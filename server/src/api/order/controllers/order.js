'use strict';
const stripe = require("stripe")("sk_test_51MeM66GuAAu0dPWHgLUbUK84i8U8NUksVPvpZ7i3XxcoxQGgbjr25CLb4MVmY8FIGz1up5HO3Da0CErfiMHhRcgl00Xb8mc2zI")/**
 * order controller
 */

console.log(process.env.STRIPE_SECRET_KEY)

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order');
