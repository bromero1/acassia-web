"use strict";
const stripe = require("stripe")("sk_test_51MeM66GuAAu0dPWHgLUbUK84i8U8NUksVPvpZ7i3XxcoxQGgbjr25CLb4MVmY8FIGz1up5HO3Da0CErfiMHhRcgl00Xb8mc2zI");

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;


module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products, userName, email } = ctx.request.body;

    try {
      //retrieve item info requested by frontend
      console.log("Retrieving item info...");
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::item.item")
            .findOne(product.id);

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
              },
              unit_amount: item.price * 100,
            },
            quantity: product.count,
          };
        })
      );

      // create a stripe session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        customer_email: email,
        mode: "payment",
        success_url: "http://localhost:3000/checkout/success",
        cancel_url: "http://localhost:3000/",
        line_items: lineItems,
      });

      // post order to strapi
      await strapi
        .service("api::order.order")
        .create({ data: { userName, products, stripeSessionId: session.id } });

      //return session id to use in front end
      return { id: session.id };
    } catch (error) {
      ctx.response.status = 500;
      console.log(error);
      return { 
        error: { message: error } 
      };
    }
  },
}));
