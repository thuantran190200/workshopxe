import React from "react";
import { NavLink } from 'react-router-dom';
import ListspAdmin from "../sp/ListspAdmin";
function admin()
{
return <div>
<h1>admin</h1>


        <div class="headerbar">

            
            <div class="headerbar-left">
                <a href="index.html" class="logo">
                    <img alt="Logo" src="assets/images/logo.png" />
                    <span>Nura Admin</span>
                </a>
            </div>

            <nav class="navbar-custom">

                <ul class="list-inline float-right mb-0">
                    <li class="list-inline-item dropdown notif">
                        <a class="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" aria-haspopup="false" aria-expanded="false">
                            <i class="far fa-envelope"></i>
                            <span class="notif-bullet"></span>
                        </a>

                        <div class="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-arrow-success dropdown-lg">
                            
                            <div class="dropdown-item noti-title">
                                <h5>
                                    <small>
                                        <span class="label label-danger pull-xs-right">12</span>Mailbox</small>
                                </h5>
                            </div>

                          
                            <a href="mail-all.html" class="dropdown-item notify-item">
                                <p class="notify-details ml-0">
                                    <b>John Doe</b>
                                    <span>New message received</span>
                                    <small class="text-muted">3 minutes ago</small>
                                </p>
                            </a>

                           
                            <a href="mail-all.html" class="dropdown-item notify-item">
                                <p class="notify-details ml-0">
                                    <b>Michael Smith</b>
                                    <span>New message received</span>
                                    <small class="text-muted">18 minutes ago</small>
                                </p>
                            </a>

                          
                            <a href="mail-all.html" class="dropdown-item notify-item">
                                <p class="notify-details ml-0">
                                    <b>John Lenons</b>
                                    <span>New message received</span>
                                    <small class="text-muted">Yesterday, 18:27</small>
                                </p>
                            </a>

                            
                            <a href="mail-all.html" class="dropdown-item notify-item notify-all">
                                View All Messages
                            </a>

                        </div>

                    </li>

                    <li class="list-inline-item dropdown notif">
                        <a class="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" aria-haspopup="false" aria-expanded="false">
                            <i class="far fa-bell"></i>
                            <span class="notif-bullet"></span>
                        </a>

                        <div class="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-arrow-success dropdown-lg">
                          
                            <div class="dropdown-item noti-title">
                                <h5>
                                    <small>
                                        <span class="label label-danger pull-xs-right">5</span>Allerts</small>
                                </h5>
                            </div>

                          
                            <a href="#" class="dropdown-item notify-item">
                                <div class="notify-icon bg-faded">
                                    <img src="assets/images/avatars/avatar2.png" alt="img" class="rounded-circle img-fluid"/>
                                </div>
                                <p class="notify-details">
                                    <b>John Doe</b>
                                    <span>User registration</span>
                                    <small class="text-muted">3 minutes ago</small>
                                </p>
                            </a>

                           
                            <a href="#" class="dropdown-item notify-item">
                                <div class="notify-icon bg-faded">
                                    <img src="assets/images/avatars/avatar3.png" alt="img" class="rounded-circle img-fluid"/>
                                </div>
                                <p class="notify-details">
                                    <b>Michael Cox</b>
                                    <span>Task 2 completed</span>
                                    <small class="text-muted">12 minutes ago</small>
                                </p>
                            </a>

                           
                            <a href="#" class="dropdown-item notify-item">
                                <div class="notify-icon bg-faded">
                                    <img src="" alt="img" class="rounded-circle img-fluid"/>
                                </div>
                                <p class="notify-details">
                                    <b>Michelle Dolores</b>
                                    <span>New job completed</span>
                                    <small class="text-muted">35 minutes ago</small>
                                </p>
                            </a>

                           
                            <a href="#" class="dropdown-item notify-item notify-all">
                                View All Allerts
                            </a>

                        </div>
                    </li>


                    <li class="list-inline-item dropdown notif">
                        <a class="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" aria-haspopup="false" aria-expanded="false">
                            <i class="fas fa-cog"></i>
                        </a>

                        <div class="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-arrow-success dropdown-sm">
                           
                            <div class="dropdown-item noti-title">
                                <h5>
                                    <small>Settings</small>
                                </h5>
                            </div>

                         
                            <a href="#" class="dropdown-item notify-item">
                                <p class="notify-details ml-0">
                                    <i class="fas fa-cog"></i>
                                    <b>Settings 1</b>
                                </p>
                            </a>

                           
                            <a href="#" class="dropdown-item notify-item">
                                <p class="notify-details ml-0">
                                    <i class="fas fa-cog"></i>
                                    <b>Settings 2</b>
                                </p>
                            </a>

                           
                            <a href="#" class="dropdown-item notify-item">
                                <p class="notify-details ml-0">
                                    <i class="fas fa-cog"></i>
                                    <b>Settings 3</b>
                                </p>
                            </a>

                        </div>

                    </li>


                    <li class="list-inline-item dropdown notif">
                        <a class="nav-link dropdown-toggle nav-user" data-toggle="dropdown" href="#" aria-haspopup="false" aria-expanded="false">
                            <img src="assets/images/avatars/admin.png" alt="Profile image" class="avatar-rounded"/>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                        
                            <div class="dropdown-item noti-title">
                                <h5 class="text-overflow">
                                    <small>Hello, admin</small>
                                </h5>
                            </div>

                           
                            <a href="profile.html" class="dropdown-item notify-item">
                                <i class="fas fa-user"></i>
                                <span>Profile</span>
                            </a>

                          
                            <a href="#" class="dropdown-item notify-item">
                                <i class="fas fa-power-off"></i>
                                <span>Logout</span>
                            </a>
                        </div>
                    </li>

                </ul>

                <ul class="list-inline menu-left mb-0">
                    <li class="float-left">
                        <button class="button-menu-mobile open-left">
                            <i class="fas fa-bars"></i>
                        </button>
                    </li>
                </ul>

            </nav>

        </div>



        <div class="left main-sidebar">

<div class="sidebar-inner leftscroll">

    <div id="sidebar-menu">

        <ul>
            <li class="submenu">
                <a class="active" href="index.html">
                    <i class="fas fa-bars"></i>
                    <span> Dashboard </span>
                </a>
            </li>

            <li class="submenu">
                <NavLink to="/addsanpham">
                    <i class="fas fa-user"></i>
                    <span> Qu???n l?? s???n ph???m </span>
                </NavLink>
            </li>

            <li class="submenu">
                <NavLink to="/danhmuc" >
                    <i class="fas fa-file-alt"></i>
                    <span> Qu???n l?? danh m???c </span>
                </NavLink>
            </li>

            <li class="submenu">
            <NavLink to="/Listsp" >
                    <span class="label radius-circle bg-danger float-right">18</span>
                    <i class="fas fa-envelope"></i>
                    <span> Danh s??ch oder </span>
             </NavLink>
            </li>

            <li class="submenu">
                <NavLink to="/register">
                    <i class="fas fa-photo-video"></i>
                    <span> ????ng k?? </span>
                </NavLink>
            </li>

            <li class="submenu">
                <a href="charts.html">
                    <i class="fas fa-chart-line"></i>
                    <span> Charts </span>
                </a>
            </li>

            <li class="submenu">
                <a id="tables" href="#">
                    <i class="fas fa-table"></i>
                    <span> Tables </span>
                    <span class="menu-arrow"></span>
                </a>
                <ul class="list-unstyled">
                    <li>
                        <a href="tables-basic.html">Basic Tables</a>
                    </li>
                    <li>
                        <a href="tables-datatable.html">Data Tables</a>
                    </li>
                </ul>
            </li>

            <li class="submenu">
                <a href="#">
                    <i class="fas fa-laptop"></i>
                    <span> User Interface </span>
                    <span class="menu-arrow"></span>
                </a>
                <ul class="list-unstyled">
                    <li>
                        <a href="ui-alerts.html">Alerts</a>
                    </li>
                    <li>
                        <a href="ui-buttons.html">Buttons</a>
                    </li>
                    <li>
                        <a href="ui-cards.html">Cards</a>
                    </li>
                    <li>
                        <a href="ui-carousel.html">Carousel</a>
                    </li>
                    <li>
                        <a href="ui-collapse.html">Collapse</a>
                    </li>
                    <li>
                        <a href="ui-icons.html">Icons</a>
                    </li>
                    <li>
                        <a href="ui-modals.html">Modals</a>
                    </li>
                    <li>
                        <a href="ui-tooltips.html">Tooltips and Popovers</a>
                    </li>
                </ul>
            </li>

            <li class="submenu">
                <a href="#">
                    <i class="fab fa-wpforms"></i>
                    <span> Forms </span>
                    <span class="menu-arrow"></span>
                </a>
                <ul class="list-unstyled">
                    <li>
                        <a href="forms-general.html">General Elements</a>
                    </li>
                    <li>
                        <a href="forms-select2.html">Select2</a>
                    </li>
                    <li>
                        <a href="forms-validation.html">Form Validation</a>
                    </li>
                    <li>
                        <a href="forms-text-editor.html">Text Editors</a>
                    </li>
                    <li>
                        <a href="forms-upload.html">Multiple File Upload</a>
                    </li>
                    <li>
                        <a href="forms-datetime-picker.html">Date and Time Picker</a>
                    </li>
                    <li>
                        <a href="forms-color-picker.html">Color Picker</a>
                    </li>
                </ul>
            </li>

            <li class="submenu">
                <a href="#">
                    <i class="fas fa-file-image"></i>
                    <span> Multimedia </span>
                    <span class="menu-arrow"></span>
                </a>
                <ul class="list-unstyled">
                    <li>
                        <a href="media-fancybox.html">
                            <span class="label radius-circle bg-danger float-right">cool</span> Fancybox </a>
                    </li>
                    <li>
                        <a href="media-masonry.html">Masonry</a>
                    </li>
                    <li>
                        <a href="media-lightbox.html">Lightbox</a>
                    </li>
                    <li>
                        <a href="media-owl-carousel.html">Owl Carousel</a>
                    </li>
                    <li>
                        <a href="media-image-magnifier.html">Image Magnifier</a>
                    </li>
                </ul>
            </li>

            <li class="submenu">
                <a href="#">
                    <i class="fas fa-star"></i>
                    <span> Plugins </span>
                    <span class="menu-arrow"></span>
                </a>
                <ul class="list-unstyled">
                    <li>
                        <a href="star-rating.html">Star Rating</a>
                    </li>
                    <li>
                        <a href="range-sliders.html">Range Sliders</a>
                    </li>
                    <li>
                        <a href="tree-view.html">Tree View</a>
                    </li>
                    <li>
                        <a href="sweetalert.html">SweetAlert</a>
                    </li>
                    <li>
                        <a href="calendar.html">Calendar</a>
                    </li>
                    <li>
                        <a href="counter-up.html">Counter-Up</a>
                    </li>
                </ul>
            </li>

            <li class="submenu">
                <a href="#">
                    <i class="far fa-copy"></i>
                    <span> Example Pages </span>
                    <span class="menu-arrow"></span>
                </a>
                <ul class="list-unstyled">
                    <li>
                        <a href="page-pricing-tables.html">Pricing Tables</a>
                    </li>
                    <li>
                        <a href="page-timeline.html">Timeline</a>
                    </li>
                    <li>
                        <a href="page-invoice.html">Invoice</a>
                    </li>
                    <li>
                        <a href="page-blank.html">Blank Page</a>
                    </li>
                </ul>
            </li>

            <li class="submenu">
                <a href="#">
                    <span class="label radius-circle bg-primary float-right">9</span>
                    <i class="fas fa-indent"></i>
                    <span> Menu Levels </span>
                </a>
                <ul>
                    <li>
                        <a href="#">
                            <span>Second Level</span>
                        </a>
                    </li>
                    <li class="submenu">
                        <a href="#">
                            <span>Third Level</span>
                            <span class="menu-arrow"></span>
                        </a>
                        <ul>
                            <li>
                                <a href="#">
                                    <span>Third Level Item</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Third Level Item</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <li class="submenu">
                    <a class="pro" href="pro.html">
                        <i class="fas fa-shopping-cart"></i>
                        <span> PRO Version </span>
                    </a>
                </li>

                <li class="submenu">
                    <a target="_blank" href="https://nura24.com">
                        <i class="fas fa-th"></i>
                        <span> Nura24 Free Suite </span>
                    </a>
                </li>

            </li>

        </ul>

        <div class="clearfix"></div>

    </div>

    <div class="clearfix"></div>

</div>

</div>
<ListspAdmin/>
</div>

}
export default admin;