import React from 'react';
import Listsp from '../sp/Listsp';
import Listdanhmuc from '../Danhmuc/Listdanhmuc';
import share from './share';
class Home extends React.Component{

  
    render() {
    
      const myStyle={
        backgroundImage: 
 "url('https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.6435-9/127145127_2904466239777399_5170882094389105081_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=XBhs9dkIcA0AX8cioGg&tn=eVQ4sbj6AxBghtk_&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT8AEPJwgpWHbGf3AK_XI3_R1UfXuEZXYUta4uMDvVpV8A&oe=626D8F32')"
       
    };
        return (
            <div id='top'>

            <div class="wrapper row0">
              <header id="header" class="hoc clear"> 
    
                <div id="logo" class="one_quarter first">
                  <h1><a href="index.html"><span>Y</span>15<span>Z</span>R</a></h1>
                </div>
                <div class="three_quarter">
                  <ul class="nospace clear">
                    <li class="one_third first">
                      <div class="block clear"><a href="#"><i class="fas fa-phone"></i></a> <span><strong>Alo Admin:</strong> 0389672882</span></div>
                    </li>
                    <li class="one_third">
                      <div class="block clear"><a href="#"><i class="fas fa-envelope"></i></a> <span><strong>mail:</strong> lehaidangxh@gmail.com  thuantran190200@gmail.com</span></div>
                    </li>
                    <li class="one_third">
                      <div class="block clear"><a href="#"><i class="fas fa-clock"></i></a> <span><strong> Hoạt Động:</strong> 08.00am - 18.00pm</span></div>
                    </li>
                  </ul>
                </div>
              </header>
            </div>

           <div class="wrapper row1">
            <section class="hoc clear"> 
              <nav id="mainav">
            
        
                 
                 <Listdanhmuc/>
              
              </nav>
      
              <div id="searchform">
                <div>
                  <form action="#" method="post">
                    <fieldset>
                      <legend>Tìm Kiếm:</legend>
                      <input type="text" placeholder="Enter search term&hellip;" />
                      <button type="submit"><i class="fas fa-search"></i></button>
                    </fieldset>
                  </form>
                </div>
              </div>
      
            </section>
          </div>

           <div class="wrapper bgded overlay" style={myStyle} > 
       
            <div id="pageintro" class="hoc clear"> 
              <article>
                <p  >Shop Đồ Chơi Xe Máy</p>
                <h3 class="heading">Hải Đăng Y15ZR</h3>
                <p>Chuyên Cung Cấp Đồ Chơi Xe Máy Chính Hãng</p>
                <footer><a class="btn" href="#">Trãi Nghiệm Ngay <i class="fas fa-angle-right"></i></a></footer>
              </article>
              
            </div>
        </div> 

          <div class="wrapper row2">
            <section class="hoc container clear"> 
              <div class="sectiontitle">
                <h6 class="heading">Thông Tin Shop</h6>
                <p>Tham Gia Và Liên Hệ Trực Tiếp Tại Đây</p>
              </div>


              <Listsp/>
              
              <div id="latest" class="group">
                <article class="one_third first"><a class="imgover" href="https://www.facebook.com/groups/310173003295730"><img src="./assets/images/demo/backgrounds/Capture.PNG" alt="" /></a>
                  <div class="excerpt">
                    <h6 class="heading">Group</h6>
                    
                    <footer><a href="#">Read More <i class="fas fa-angle-right"></i></a></footer>
                  </div>
                </article>
                <article class="one_third"><a class="imgover" href="https://www.facebook.com/All-Racing-106377424321048"><img src="./assets/images/demo/backgrounds/page.PNG" alt="" /></a>
                  <div class="excerpt">
                    <h6 class="heading">Fanpage</h6>
                  
                    <footer><a href="#">Read More <i class="fas fa-angle-right"></i></a></footer>
                  </div>
                </article>
                <article class="one_third"><a class="imgover" href="https://www.facebook.com/profile.php?id=100006421546739"><img src="./assets/images/demo/backgrounds/ad.PNG" alt="" /></a>
                  <div class="excerpt">
                    <h6 class="heading">My Facebook profile</h6>
                  
                    <footer><a href="#">Read More <i class="fas fa-angle-right"></i></a></footer>
                  </div>
                </article>
              </div>
              <footer class="center"><a class="btn" href="#">Tìm Hiểu <i class="fas fa-angle-right"></i></a></footer>
            </section>
          </div>

          <div class="wrapper row4">
            <footer id="footer" class="hoc clear"> 
              
              <div class="one_third first">
                <h6 class="heading">Thông Tin Liên Hệ</h6>
                <p>CN1: Số 5 cây cám khu phố 1 bình hưng hòa B  Bình Tân HCM.</p>
                <p>CN2: Ấp 1, xã Vĩnh Lộc B, huyện Bình Chánh, TP.HCM </p>
                <p class="btmspace-30">KẾT NỐI VỚI CHÚNG TÔI<a href="#"><i class="fas fa-arrow-right"></i></a></p>
                <ul class="faico clear">
                  <li><a class="faicon-dribble" href="#"><i class="fab fa-dribbble"></i></a></li>
                  <li><a class="faicon-facebook" href="#"><i class="fab fa-facebook"></i></a></li>
                  <li><a class="faicon-google-plus" href="#"><i class="fab fa-google-plus-g"></i></a></li>
                  <li><a class="faicon-linkedin" href="#"><i class="fab fa-linkedin"></i></a></li>
                  <li><a class="faicon-twitter" href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a class="faicon-vk" href="#"><i class="fab fa-vk"></i></a></li>
                </ul>
              </div>
              <div class="one_third">
                <h6 class="heading">Sản Phẩm</h6>
                <ul class="nospace clear latestimg">
                  <li><a href="#"><img src="./assets/images/demo/backgrounds/phuoc.jpg" alt="" /></a></li>
                  <li><a href="#"><img src="./assets/images/demo/backgrounds/nhot.jpg" alt="" /></a></li>
                  <li><a href="#"><img src="./assets/images/demo/backgrounds/mam.jpg" alt="" /></a></li>
                  <li><a href="#"><img src="./assets/images/demo/backgrounds/o.jpg" alt="" /></a></li>
                  <li><a href="#"><img src="./assets/images/demo/backgrounds/oc.jpg" alt="" /></a></li>
                  <li><a href="pages/voxe.html"><img src="./assets/images/demo/backgrounds/vo.webp" alt="" /></a></li>
                </ul>
              </div>
              <div class="one_third">
                <h6 class="heading">Đăng Nhập Để Mua Hàng</h6>
                <div>
<div class="one_third">
                <h6 class="heading">Map chỉ đường</h6>
                <form method="post" action="#">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4057.5913281048647!2d106.59036318011049!3d10.782576251267674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d3a4004bf0d%3A0xb92afde684c0436f!2zNSDEkMaw4budbmcgQ8OieSBDw6FtLCBCw6xuaCBIxrBuZyBIb8OgIEIsIELDrG5oIFTDom4sIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1626252341678!5m2!1svi!2s" width="350" height="225" allowfullscreen="" loading="lazy"></iframe>
                </form>
            </div>
    </div>
              </div>
              
            </footer>
          </div>

      
         


          <a id="backtotop" href="#top"><i class="fas fa-chevron-up"></i></a> 
          <div>


<div class="call-mobile2">
        <a data-animate="fadeInDown" href="https://zalo.me/0389672882" style={{'borderRadius':'5px'}} target="_blank" class="button success1" data-animated="true">
            <span>Chat Zalo </span>
        </a>
    </div>

    <div class="call-mobile1">
        <a data-animate="fadeInDown" href="https://business.facebook.com/latest/inbox/messenger" style={{'borderRadius':'5px'}} target="_blank" class="button success2"  data-animated="true">
            <span>Chat Facebook</span>
        </a>
    </div>

    <div class="call-mobile">
        <a id="callnowbutton" href="tel:0389672882">Gọi 0389672882</a>
    </div>

    </div>
  

          </div>
          
        );
    }
}
export default Home;