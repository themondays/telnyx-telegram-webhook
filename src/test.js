const {handler} = require('./index.js');
const dummyData = {
  body: {
    data: {
      payload: {
        from: {
          phone_number: 164444900490
        },
        to: 164444900491,
        text: 'Lorem ipsum'
      }
    }
  }
};
console.log(handler);
(async () => {
  console.log(await handler(dummyData, null))
})();
