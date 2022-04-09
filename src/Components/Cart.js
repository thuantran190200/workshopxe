import React from 'react';
import Listdanhmuc from '../Danhmuc/Listdanhmuc';

function Cart() {
    return (
        <div>
            {/* Navagition */}
            <div id='top'>
                <div class="wrapper row0">
                    <header id="header" class="hoc clear"> 

                        <div id="logo" class="one_quarter first">
                            <h1><a href="/"><span>Y</span>15<span>Z</span>R</a></h1>
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
            </div>
            {/* kết thúc Navagition */}

            {/* Phần Cart  */}
            <div>
                <h1>Content</h1>
            </div>
            {/* Kết thúc Cart */}

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
                                <h6 class="heading">Map Shop</h6>
                                <form method="post" action="#">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4057.5913281048647!2d106.59036318011049!3d10.782576251267674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d3a4004bf0d%3A0xb92afde684c0436f!2zNSDEkMaw4budbmcgQ8OieSBDw6FtLCBCw6xuaCBIxrBuZyBIb8OgIEIsIELDrG5oIFTDom4sIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1626252341678!5m2!1svi!2s" width="350" height="225" allowfullscreen="" loading="lazy"></iframe>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Cart;