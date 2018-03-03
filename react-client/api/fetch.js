import axios from 'axios';

const fetch = (id, callback) => {
  axios({
    method: 'get',
    url: `/item/${id}/description`,
  })
    .then((response) => {
      callback(response.data);
    })
    .catch(error => console.log(error));
};

export default fetch;
