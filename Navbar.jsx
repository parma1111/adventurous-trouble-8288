import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div class="block">
        <div>
            <div>
                <div class="navbarSugarUpperArea">
                      <img class="navbarSugarLogoPride" src="https://media.sugarcosmetics.com/upload/Logo-static.jpg" alt="pride logo sugar" />
                 <div class="navbarSugarInputSearchContainer">
                  <input class="navbarSugarInputSearchBox" type="text" placeholder='Try "Lipstick"' />
                  <button class="navbarSugarInputSearchButton">Search</button>
                 </div>
                 <div class="navbarIconBox">
                      <img class="navbarLoginIcon" src="https://in.sugarcosmetics.com/desc-images/person.png" alt="" />
                     <div class="loginInNav">
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="loginInNav_button">
                            <p>Login/SignUp</p>
                        </button>
                     </div>
                     <div class="modal fade" id="exampleModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                     </div>
                 </div>
                 <div class="setIcons">
                <i class="fa-solid fa-heart" style={{cursor:"pointer"}}></i>
                <i class="fa-solid fa-bag-shopping" style={{cursor:"pointer"}}></i>
                <img
              className="setDiscountLogo"
              src="https://in.sugarcosmetics.com/desc-images/discountIcon.svg"
              alt=""
            />
            </div>
            </div>

            <div class="upperBox">
              <div class="main_menu">
                <a class="menu-btn" href="/makeup">MAKEUP</a>
                <div class="xyz">
                    <div class="b">
                        <div class="div">
                            <ul>
                                <li><a class="p" href="https://www.sugarcosmetics.com/makeup/lips-makeup">LIPS</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/makeup/face-makeup">FACE</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/makeup/eye-makeup">EYES</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/makeup/eye-makeup"></a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/makeup/eye-makeup"></a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/makeup/eye-makeup"></a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/makeup/eye-makeup"></a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/makeup/eye-makeup"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>

              <div class="main_menu">
                <a class="menu-btn" href="/brushes">BRUSHES</a>
                <div class="xyz">
                    <div class="b">
                        <div class="div">
                            <ul>
                                <li><a class="p" href="https://www.sugarcosmetics.com/blend-trend-makeup-brush/face-brushes">FACE BRUSHES</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/blend-trend-makeup-brush/eyes-brushes">EYE BRUSHES</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/"></a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/"></a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/"></a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/"></a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/"></a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>

              <div class="main_menu">
                <a class="menu-btn" href="/skincare">SKINCARE</a>
                <div class="xyz">
                    <div class="b">
                        <div class="div">
                            <ul>
                                <li><a class="p" href="https://www.sugarcosmetics.com/skin-care-products/face-moisturizer">MOISTURIZERS</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/collections/sunscreen">SUNSCREEN</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/skin-care-products/setting-spray-makeup">SETTING MISTS</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/coffee-culture-range">COFFEE CULTURE RANGE</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/skin-care-products/sheet-mask-combo">SHEET MASK COMBO</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/citrus-got-real-range">CITRUS GOT REAL RANGE</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/aquaholic-range">MASKS</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/skin-care-products/sheet-mask">AQUAHOLIC RANGE</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>

              <div class="main_menu">
                <a class="menu-btn" href="/trending">TRENDING</a>
                <div class="xyz">
                    <div class="b">
                        <div class="div">
                            <ul>
                                <li><a class="p" href="https://www.sugarcosmetics.com/skin-care-products/face-moisturizer">SUGAR MERCH STATION</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/collections/sunscreen">MAKEUP KITS</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/skin-care-products/setting-spray-makeup">BESTSELLERS</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/coffee-culture-range">SUGAR SETS</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/skin-care-products/sheet-mask-combo">VALUE SETS</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/citrus-got-real-range">CITRUS GOT REAL RANGE</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/aquaholic-range">MASKS</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/skin-care-products/sheet-mask">AQUAHOLIC RANGE</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>

              <div class="main_menu">
                <a class="menu-btn" href="/trending">BLOG</a>
                <div class="xyz">
                    <div class="b">
                        <div class="div">
                            <ul>
                                <li><a class="p" href="https://www.sugarcosmetics.com/skin-care-products/face-moisturizer">FEATURED</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/collections/sunscreen">MAKEUP KITS</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/skin-care-products/setting-spray-makeup">SKINCARE</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/coffee-culture-range">SUGAR SETS</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/skin-care-products/sheet-mask-combo">VALUE SETS</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/citrus-got-real-range">CITRUS GOT REAL RANGE</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/aquaholic-range">MASKS</a></li>
                                <li><a class="p" href="https://www.sugarcosmetics.com/skin-care-products/sheet-mask">AQUAHOLIC RANGE</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>
              <a class="grow" href="https://www.sugarcosmetics.com/pages/offer">OFFERS</a>
              <a class="grow" href="https://www.sugarcosmetics.com/stores">STORES</a>

            </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
