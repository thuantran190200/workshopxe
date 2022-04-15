import React, { useState } from 'react';
import { adddm } from '../Service/danhmucService';
import Message from './Message';

function Danhmuc(props) {
  const [danhmuc, setDanhmuc] = useState({
    madm: '',
    tendm: '',
   
  });

  const [message, setMessage] = useState(false);

  const onChange = (e) => {
    e.preventDefault();
    const newDM = { ...danhmuc };
    newDM[e.target.name] = e.target.value;
    setDanhmuc(newDM);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const variable = {
      MADM: danhmuc.madm,
      TenDM: danhmuc.tendm,
    };

  
      adddm(variable).then((data) => {
        const { message } = data;
        setMessage(message);

        if (!message.msgError) {
          setMessage(message);
          setTimeout(() => {
            // props.history.push('/login');
          }, 2000);
        }
      });
  
  };

  return (
    <section className="page-section my-3 register">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Danh mục 
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line" />
          <div className="divider-custom-icon">
            <i className="fas fa-star" />
          </div>
          <div className="divider-custom-line" />
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            {message ? <Message message={message} /> : null}
            <form
              id="contactForm"
              name="sentMessage"
              noValidate="novalidate"
              onSubmit={onSubmit}
            >
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Mã danh mục</label>
                  <input
                    className="form-control"
                    name="madm"
                    type="text"
                    placeholder="Mã danh mục"
                    autoFocus={true}
                    value={danhmuc.MADM}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Tên danh mục</label>
                  <input
                    className="form-control"
                    name="tendm"
                    type="text"
                    placeholder="Tên Danh mục"
                    value={danhmuc.TenDM}
                    onChange={onChange}
                  />
                </div>
              </div>
            
              <br />
              <div id="success" />
              <div className="form-group">
                <button
                  className="btn btn-primary btn-xl"
                  id="sendMessageButton"
                  type="submit"
                >
                  Thêm danh mục
                </button>
              </div>
              <div className="form-group">
                <p className="text-register">
                  Bạn đã có tài khoản - <a href="/login">Đăng Nhập</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Danhmuc;
