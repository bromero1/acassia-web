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
        defaultReplyTo: "cd514db8f144ff5548008c8142deb33e@inbound.postmarkapp.com",
        defaultVariables: {
          sentBy: "strapi",
        },
      },
    },
  },
  // ...
});
