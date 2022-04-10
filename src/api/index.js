import axios from 'axios';
//mock API
let API_URL = 'http://127.16.1.157:8088';
   export default function callApi(endpoint, method = 'GET', body) {
       return axios({
           method,
           url: `${API_URL}/${endpoint}`,
           data: body
       }).catch(err => {
           console.log(err);
       });
}
