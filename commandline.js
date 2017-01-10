var axios = require('axios');


axios.get('https://api.github.com/users/Olapeju')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });