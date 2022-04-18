import React from 'react';

const ProductInfo = ({ product, loading, error }) => {
  if(error) return <h2>{error}</h2>
  return <section className='product_info'>
    {
      product &&  
      <>
 
<div class="wrapper row0">
    <header id="header" class="hoc clear">
      
        <div id="logo" class="one_quarter first">
            <h1><a href="/wavefire/index.html"><span>Y</span>15<span>Z</span>R</a></h1>
        </div>
        <div class="three_quarter">
            <ul class="nospace clear">
                <li class="one_third first">
                    <div class="block clear"><a href="#"><i class="fa fa-phone"></i></a> <span><strong>Alo Admin:</strong> 0389672882</span></div>
                </li>
                <li class="one_third">
                    <div class="block clear"><a href="#"><i class="fa fa-envelope"></i></a> <span><strong>mail:</strong> lehaidangxh@gmail.com</span></div>
                </li>
                <li class="one_third">
                    <div class="block clear"><a href="#"><i class="fa fa-clock"></i></a> <span><strong> Hoạt Động:</strong> 08.00am - 18.00pm</span></div>
                </li>
            </ul>
        </div>
      
    </header>
</div>
<div class="wrapper row1">
    <section class="hoc clear">
       
        <nav id="mainav">
            <ul class="clear">
                <li class="active"><a href="~/Home/Trangchu">Home</a></li>
                <li>
                    <a href="~/Danhmuc/Nhot">Nhớt</a>

                </li>
              
                <li>
                    <a t href="~/Danhmuc/Phuocxe">Phuộc Xe</a>

                </li>
                <li><a href="~/Danhmuc/mamxe">Mâm Xe</a></li>
                <li><a href="~/Danhmuc/octitan">Ốc Titan</a></li>
                <li><a href="#">Đồ Chơi Xe</a></li>
                <li><a href="~/Danhmuc/voxe">Vỏ Xe</a></li>
            </ul>
        </nav>
       
        <div id="searchform">
            <div>
                <form action="#" method="post">
                    <fieldset>
                        <legend>Tìm Kiếm:</legend>
                        <input type="text" placeholder="Enter search term&hellip;"/>
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </fieldset>
                </form>
            </div>
        </div>
      
    </section>
</div>
      
<div class="container page-wrapper">
  <div class="page-inner">
    <div class="row">
      <div class="el-wrapper">
        <div class="box-up">
        <img class="img" src={product.IMG} alt={product.IMG} />
          <div class="img-info">
            <div class="info-inner">
              <span class="p-name">{product.TenSP}</span>
              <span class="p-company">{product.MADM}</span>
            </div>
            <div class="a-size"> Mô tả : <span class="size">{product.Mota}</span></div>
          </div>
        </div>

        <div class="box-down">
          <div class="h-bg">
            <div class="h-bg-inner"></div>
          </div>

          <a class="cart" href="#">
            <span class="price">{product.Gia}</span>
            <span class="add-to-cart">
              <span  class="txt">Add in cart</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>







<div class="wrapper row4">
    <footer id="footer" class="hoc clear">
      
       


        <div class="one_third">
            <h6 class="heading">Bình Luận ở đây</h6>
            <form method="post" action="#">
                <fieldset>
                    <legend>Bình luận</legend>
                    <input class="btmspace-15" type="text" name="txtCmt" v placeholder="Nọi dung"/>
                    <input class="btmspace-15" type="text" name="txtName" value=""placeholder="Tên của bạn"/>

                    <ul class="dangnhap">
                        <li class="dangki">
                            <button type="submit" name="submitcmt">Bình luận</button>

                        </li>
                      
                    </ul>
                </fieldset>
            </form>
        </div>
        </footer>

</div>
      </>





    }

    { loading && <h2>Loading...</h2>}
  </section>;
};

export default ProductInfo;
