export default function Rodape(){
    return (
        <footer class="footer py-5 bg-light">
            <div class="container">
                <div class="footerinner">
                    <div class="footeritem">
                        <form>
                            <div class="d-md-flex justify-content-between align-items-center">
                                <div class="form-group">
                                    <h5 class="mb-1">Get new themes in your inbox!</h5>
                                    <div class="form-text mt-0">New themes or big discounts. Never spam.</div>
                                </div>
                                <div id="signup_footer" class="d-flex align-items-start">
                                    <div class="form-group w-100 mr-2">
                                        <input id="mce-EMAIL" class="footer__email-input form-control form-control--muted" name="EMAIL" type="email" aria-describedby="footerEmail" placeholder="Email address" />
                                    </div>
                                    <input class="btn btn-brand" type="submit" value="Subscribe" name="subscibe" id="mc-embedded-subscribe" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="footer__item d-lg-flex justify-content-lg-between align-items-lg-center">
                        <ul id="menu-seller-footer" class="nav sub-nav footer__sub-nav"><li id="menu-item-1333" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1333"><a title="Help Center" href="https://themes.zendesk.com/hc/en-us">Help Center</a></li>
                            <li id="menu-item-1335" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1335"><a title="Terms of Service" href="https://themes.getbootstrap.com/terms/">Terms of Service</a></li>
                            <li id="menu-item-1334" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1334"><a title="Licenses" href="https://themes.getbootstrap.com/licenses/">Licenses</a></li>
                            <li id="menu-item-49443" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-49443"><a title="Sell Themes" href="https://themes.getbootstrap.com/sell/">Sell Themes</a></li>
                        </ul>
                        <p class="hidden-sm-down d-none d-lg-block">Trying to redownload a theme? Use our <a href="https://themes.getbootstrap.com/redownload/">redownload page.</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}