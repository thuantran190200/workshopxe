import axios from 'axios';

export const adddm = (dm) => {
    return axios
      .post('/adDM', dm)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return {
          message: {
            msgBody: 'Them danh muc khong thanh cong',
            msgError: true,
          },
          err,
        };
      });
  };


   
export const getDanhmuc = () => {
  return axios
    .get('/getDanhmuc')
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return {
        message: {
          msgBody: 'Lỗi!!!',
          msgError: true,
        },
        err,
      };
    });
};