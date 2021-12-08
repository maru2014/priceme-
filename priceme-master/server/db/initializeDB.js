const mongoose =  require('mongoose');
const seedUser = require('./seeds/sampleUser');
module.exports = () => {
    mongoose
        .connect(process.env.MONGODB_URI)
        .then((db) => {
            seedUser().then(r => console.log('user seed run successfully'));
        }).catch(err => console.log(err));
};
