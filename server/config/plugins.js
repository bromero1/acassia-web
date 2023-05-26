module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "strapi-provider-email-postmark",
      providerOptions: {
        apiKey: env('EMAIL_KEY'),
      },
      settings: {
        defaultMessageStream: "outbound",
        defaultFrom: "bryan.romero001@umb.edu",
        defaultTo: "bryan.romero001@umb.edu",
        defaultReplyTo: "cac0731fa0b48a89b6bb9d12bca81e59+aaebdbad76a9fcd14235b22844ba8f84@inbound.postmarkapp.com",
        defaultVariables: {
          sentBy: "strapi",
        },
      },
    },
  },
  // ...
});
