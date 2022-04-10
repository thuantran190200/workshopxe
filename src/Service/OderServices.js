import axios from 'axios';

export const adoder = (dm) => {
    return axios
      .post('/adoder', dm)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return {
          message: {
            msgBody: 'Them oder khong thanh cong',
            msgError: true,
          },
          err,
        };
      });
  };

