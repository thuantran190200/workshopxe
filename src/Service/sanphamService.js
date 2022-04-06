import axios from 'axios';

export const addsanpham = (dm) => {
    return axios
      .post('/addsanpham', dm)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return {
          message: {
            msgBody: 'Them san pham khong thanh cong',
            msgError: true,
          },
          err,
        };
      });
  };


  
export const getSanpham = () => {
    return axios
      .get('/getSanpham')
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


  export const getSanphamid = () => {
    return axios
      .get('/getSanpham/:id')
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
