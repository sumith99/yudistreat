import React from 'react'
import LightLogo from "../assets/images/logo_light.png";
import DarkLogo from "../assets/images/logo_dark.png"

const Navbar = () => {
    console.log("CALLED")
    return (
        <>
            <div className="header_wrap fixed-top light_skin sticky_dark_skin main_menu_uppercase transparent_header dd_dark_skin" style={{ backgroundColor: "black" }}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="index.html">
                            <img className="logo_light" src={LightLogo} alt="logo" />
                            <img className="logo_dark" src={DarkLogo} alt="logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false">
                            <span className="ion-android-menu"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="dropdown">
                                    <a data-toggle="dropdown" className="nav-link dropdown-toggle active" href="#">Home</a>
                                    <div className="dropdown-menu">
                                        <ul>
                                            <li><a className="dropdown-item nav-link nav_item active" href="index.html">Homepage 1</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="index-2.html">Homepage 2</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="index-3.html">Homepage 3</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" href="#">Pages</a>
                                    <div className="dropdown-menu">
                                        <ul>
                                            <li className="dropdown">
                                                <a className="dropdown-item menu-link dropdown-toggler" data-toggle="dropdown" href="#">About Us</a>
                                                <div className="dropdown-menu">
                                                    <ul>
                                                        <li><a className="dropdown-item nav-link nav_item" href="about.html">About Us</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="about-2.html">About Us 2</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="dropdown">
                                                <a className="dropdown-item menu-link dropdown-toggler" data-toggle="dropdown" href="#">Gallery</a>
                                                <div className="dropdown-menu">
                                                    <ul>
                                                        <li><a className="dropdown-item nav-link nav_item" href="gallery.html">Gallery Grid</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="gallery-masonry.html">Gallery Masonry</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="dropdown">
                                                <a className="dropdown-item menu-link dropdown-toggler" data-toggle="dropdown" href="#">Contact Us</a>
                                                <div className="dropdown-menu">
                                                    <ul>
                                                        <li><a className="dropdown-item nav-link nav_item" href="contact.html">Contact Us</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="contact-2.html">Contact Us 2</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><a className="dropdown-item nav-link nav_item" href="book-table.html">Book Table</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="login.html">Login</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="register.html">Register</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="404.html">404 Error Page</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="coming-soon.html">Coming Soon</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" href="#">Menu</a>
                                    <div className="dropdown-menu">
                                        <ul>
                                            <li><a className="dropdown-item nav-link nav_item" href="menu.html">Menu Style 1</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="menu-2.html">Menu Style 2</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" href="#">Chef</a>
                                    <div className="dropdown-menu">
                                        <ul>
                                            <li><a className="dropdown-item nav-link nav_item" href="chef.html">Chef</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="chef-detail.html">Chef Detail</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" href="#">Blog</a>
                                    <div className="dropdown-menu">
                                        <ul>
                                            <li><a className="dropdown-item nav-link nav_item" href="blog.html">Blog</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="blog-detail.html">Blog Detail</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" href="#">Shop</a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <ul>
                                            <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail.html">Shop Product Detail</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="shop-cart.html">Shop Cart</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="checkout.html">Checkout</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav attr-nav align-items-center">
                            <li><a href="javascript:void(0);" className="nav-link search_trigger"><i className="linearicons-magnifier"></i></a>
                                <div className="search_wrap">
                                    <span className="close-search"><i className="ion-ios-close-empty"></i></span>
                                    <form>
                                        <input type="text" placeholder="Search" className="form-control" id="search_input" />
                                        <button type="submit" className="search_icon"><i className="ion-ios-search-strong"></i></button>
                                    </form>
                                </div><div className="search_overlay"></div>
                            </li>
                            <li><a className="nav-link cart_trigger" href="javascript:void(0);"><i className="linearicons-cart"></i><span className="cart_count">2</span></a>
                                <div className="cart_box">
                                    <div className="cart_header">
                                        <h3>Your Cart</h3>
                                    </div>
                                    <ul className="cart_list">
                                        <li>
                                            <a href="#" className="item_remove"><i className="ion-close"></i></a>
                                            <a href="#"><img src="../assets/images/cart_thamb1.jpg" alt="cart_thumb1" />Berry Salad</a>
                                            <span className="cart_quantity"> 1 x <span className="cart_amount"> <span className="price_symbole">$</span></span>78.00</span>
                                        </li>
                                        <li>
                                            <a href="#" className="item_remove"><i className="ion-close"></i></a>
                                            <a href="#"><img src="../assets/images/cart_thamb2.jpg" alt="cart_thumb2" />Milky Fruit</a>
                                            <span className="cart_quantity"> 1 x <span className="cart_amount"> <span className="price_symbole">$</span></span>81.00</span>
                                        </li>
                                        <li>
                                            <a href="#" className="item_remove"><i className="ion-close"></i></a>
                                            <a href="#"><img src="../assets/images/cart_thamb3.jpg" alt="cart_thumb3" />Egg Bread</a>
                                            <span className="cart_quantity"> 1 x <span className="cart_amount"> <span className="price_symbole">$</span></span>78.00</span>
                                        </li>
                                        <li>
                                            <a href="#" className="item_remove"><i className="ion-close"></i></a>
                                            <a href="#"><img src="../assets/images/cart_thamb4.jpg" alt="cart_thumb4" />Orange Jam</a>
                                            <span className="cart_quantity"> 1 x <span className="cart_amount"> <span className="price_symbole">$</span></span>81.00</span>
                                        </li>
                                    </ul>
                                    <div className="cart_footer">
                                        <p className="cart_total"><strong>Total:</strong> <span className="cart_price"> <span className="price_symbole">$</span>159.00</span></p>
                                        <p className="cart_buttons"><a href="#" className="btn btn-default btn-radius checkout">Checkout</a></p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar