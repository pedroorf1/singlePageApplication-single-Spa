import axios from 'axios';

const data = []

const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/search/',
  params: {
    q: '<REQUIRED>',
    type: 'multi',
    offset: '0',
    limit: '10',
    numberOfTopResults: '5'
  },
  headers: {
    'X-RapidAPI-Key': '37d2b0e83dmsh74eb5d144ff4e0bp17f2a9jsnfe9271bbb369',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
  data = response.data
}).catch(function (error) {
  console.error(error);
  data = error
});

export default data

