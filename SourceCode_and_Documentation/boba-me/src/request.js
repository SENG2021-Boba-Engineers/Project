// Sample API Usage
const axios = require('axios');

axios.get(`http://127.0.0.1:5000/api/echo`, { params: { data: 'Hello World' } })
      .then((response) => {
        console.log(response.data['data'])
      })
