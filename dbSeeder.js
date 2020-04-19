// // const languages = require('./data');

const mongoose = require('mongoose');

// const Languages = new mongoose.Schema({
//   name: String,
//   paradigm: String,
// });

// const LangModel = mongoose.model('Languages', Languages);

// const seedLanguages = [
//   {
//     name: 'JavaScript',
//     paradigm: 'MultiParadigm',
//   },
//   {
//     name: 'C',
//     paradigm: 'Procedural',
//   },
//   {
//     name: 'Java',
//     paradigm: 'Object Oriented',
//   },
//   { name: 'Scheme', paradigm: 'Functional' },
//   {
//     name: 'TypeScript',
//     paradigm: 'Object Oriented',
//   },
//   {
//     name: 'Golang',
//     paradigm: 'Procedural',
//   },
// ];

// // (function () {
// //   Promise.resolve(
// //     new languages({
// //       name: 'Golang',
// //       paradigm: 'Procedural',
// //     }).save(),
// //   )
// //     .then((result) => console.log('Inserted: ', result))
// //     .catch((err) => console.error('Error inserting: ', err));
// // })();
// LangModel.insertMany(seedLanguages, function (err, small) {
//   if (err) return handleError(err);
//   console.log(small);
// });

var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Tank = mongoose.model('Tank', schema);

var small = new Tank({ size: 'small' });

const x = () => {
    small.save(function (err) {
        if (err) return handleError(err);
        console.log("hi");
      });
}
x()