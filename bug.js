const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.send('OK');
  }).catch(err => {
    // Error handling missing here
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        resolve();
      } else {
        reject(new Error('Something went wrong'));
      }
    }, 1000);
  });
}