var axios = require('axios');


axios.get('https://api.github.com/users/sdkcodes')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });