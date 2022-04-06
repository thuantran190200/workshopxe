import React, { useState } from 'react';
import { addsanpham } from '../Service/sanphamService';
import Message from './Message';

function Sanpham(props) {
  const [sanpham, setSanpham] = useState({
    masp: '',
    tensp: '',
    gia:'',
    mota:'',
    madm:'',
    img:'',

   
  });

  const [message, setMessage] = useState(false);

  const onChange = (e) => {
    e.preventDefault();
    const newSP = { ...sanpham };
    newSP[e.target.name] = e.target.value;
    setSanpham(newSP);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const variable = {
      Masp: sanpham.masp,
      TenSP: sanpham.tensp,
      Gia: sanpham.gia,
      Mota:sanpham.mota,
      MADM:sanpham.madm,
      IMG:sanpham.img,
    };

  
      addsanpham(variable).then((data) => {
        const { message } = data;
        setMessage(message);

        if (!message.msgError) {
          setMessage(message);
          setTimeout(() => {
            props.history.push('/addsanpham');
          }, 2000);
        }
      });
  
  };

  return (
    <section className="page-section my-3 register">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Sản phẩm
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
                  <label>Mã san phẩm</label>
                  <input
                    className="form-control"
                    name="masp"
                    type="text"
                    placeholder="Mã sản phẩm"
                    autoFocus={true}
                    value={sanpham.MADM}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Tên sản Phẩm</label>
                  <input
                    className="form-control"
                    name="tensp"
                    type="text"
                    placeholder="Tên sản phẩm"
                    value={sanpham.TenSP}
                    onChange={onChange}
                  />
                </div>
              </div>
            
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Giá</label>
                  <input
                    className="form-control"
                    name="gia"
                    type="text"
                    placeholder="Giá"
                    value={sanpham.Gia}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Mô Tả</label>
                  <input
                    className="form-control"
                    name="mota"
                    type="text"
                    placeholder="Mô tả"
                    value={sanpham.Mota}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Mã danh mục</label>
                  <input
                    className="form-control"
                    name="madm"
                    type="text"
                    placeholder="Mã danh mục"
                    value={sanpham.MADM}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>hình sản phẩm</label>
                  <input
                    className="form-control"
                    name="img"
                    type="text"
                    placeholder="hình sản phẩm"
                    value={sanpham.IMG}
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
                  Thêm sản phẩm
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

export default Sanpham;
