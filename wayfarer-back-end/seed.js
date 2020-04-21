const db = require('./models');

const cities = [
  {
    name: "Hogsmeade",
    photo: "https://www.zerkalo.lv/wp-content/uploads/2014/06/%D0%B3%D0%B0%D1%80%D1%80%D0%B8-%D0%BF%D0%BE%D1%82%D1%82%D0%B5%D1%80.jpg",
  },

  {
    name: "Midgar",
    photo: "https://images.tweaktown.com/news/7/1/71096_90_final-fantasy-7-remakes-midgar-is-city-made-into-world.png",
  },

  {
    name: "South Park",
    photo: "https://vignette.wikia.nocookie.net/southpark/images/c/c4/South_park.png/revision/latest?cb=20180208185617",
  },

  {
    name: "King's Landing",
    photo: "https://i.pinimg.com/originals/a8/fe/17/a8fe17cf6a832e58a8ada75b550be629.jpg",
  },

  {
    name: "Gotham City",
    photo: "https://s3-us-west-1.amazonaws.com/dkn-wp/wp-content/uploads/2018/11/13194022/Gotham-740x431.jpg",
  },

  {
    name: "Naboo",
    photo: "https://cdn.cnn.com/cnnnext/dam/assets/171207142711-star-wars-architecture-naboo-theed-palace.jpg",
  },

  {
    name: "Asgard",
    photo: "https://i.pinimg.com/originals/c1/f1/dc/c1f1dc1d82118de9a4e216846e8a5d63.jpg",
  },

  {
    name: "Binglerz City",
    photo: "https://wayfarer.s3.amazonaws.com/BinglerzCity.jpg",
  },
];

// Delete All Cities
console.log('Deleting all cities...');

db.City.deleteMany({}, (err, result) => {
  if (err) {
    console.log(err);
    process.exit();
  }

  console.log(`Successfully deleted ${result.deletedCount} cities.`);

  // Delete All Posts
  console.log('Deleting all posts...');
  db.Post.deleteMany({}, (err, result) => {
    if (err) {
      console.log(err);
      process.exit();
    }

    console.log(`Successfully deleted ${result.deletedCount} posts.`);

    // Delete All Users
    console.log('Deleting all users...');

    db.User.deleteMany({}, (err, result) => {
      if (err) {
        console.log(err);
        process.exit();
      };

      console.log(`Successfully deleted ${result.deletedCount} users.`);

      // Create New Cities
      console.log('Creating new cities...');
      db.City.create(cities, (err, newCities) => {
        if (err) {
          console.log(err);
          process.exit();
        };

        console.log(`Successfully created ${newCities.length} cities.`);
        process.exit();
      });
    });
  });
});
