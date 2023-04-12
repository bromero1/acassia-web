const { faker } = require("@faker-js/faker");

// 1
async function seedItemsCollection() {
  const numberOfRecordsToCreate = 7;

  // 2
  for (let i = 0; i < numberOfRecordsToCreate; i++) {
    // 3
    await strapi.api.item.services.item.create({
      data: {
        name: faker.lorem.words(3),
        longDescription: faker.lorem.sentence(10),
        shortDescription: faker.lorem.sentence(4),
        price: faker.finance.amount(5, 100),
      },
    });
  }

  console.log(`Added ${numberOfRecordsToCreate} records`);
}

module.exports = { seedItemsCollection };