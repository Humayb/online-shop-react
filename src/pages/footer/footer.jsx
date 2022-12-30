import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineFacebook, AiOutlineWhatsApp } from "react-icons/ai";


import './footer.css'


export default function Footer(){
    return(
        <div className="container-fluid footer p-sm-5">
            <div className="row">
                <div className="row col-9  footer-right">
                    <FooterRight/>
                </div>
                <div className="row col-sm-3 col-sx-12 footer-left">
                    <FooterLeft/>
                </div>
            </div>
        </div>
    )
}

function FooterRight(){
    return(
        <>
            <ul className="col-sm-4 col-sx-12">
                <li>
                    <h3>با دیجی کالا</h3>
                </li>
                <li>
                    <a  href="">
                        فروش در دیجی کالا
                    </a>
                </li>
                <li>
                    <a href="">
                        فرصت های شغلی
                    </a>
                </li>
                <li>
                    <a href="">
                        تماس با دیجی کالا
                    </a>
                </li>
                <li>
                    <a href="">
                        اتاق خبر دیجی کالا
                    </a>
                </li>
                <li>
                    <a href="">
                        درباره دیجی کالا
                    </a>
                </li>
            </ul>

            <ul className="col-sm-4 col-sx-12">
                <li>
                    <h3>خدمات مشتریان</h3>
                </li>
                <li>
                    <a href="">
                        پاسخ به پرسش های متداول
                    </a>
                </li>
                <li>
                    <a href="">
                        رویه بازگرداندن کالا
                    </a>
                </li>
                <li>
                    <a href="">
                        شرایط استفاده از دیجی کالا
                    </a>
                </li>
                <li>
                    <a href="">
                        حریم خصوصی
                    </a>
                </li>
                <li>
                    <a href="">
                        گزارش باگ   
                    </a>
                </li>
            </ul>

            <ul className="col-sm-4 col-sx-12">
                <li>
                    <h3>راهنمای خرید از دیجی کالا</h3>
                </li>
                <li>
                    <a href="">
                        نحوه ثبت سفارش  
                    </a>
                </li>
                <li>
                    <a href="">
                        رویه ارسال سفارش در دیجی کالا
                    </a>
                </li>
                <li>
                    <a href="">
                        شیوه های پرداخت
                    </a>
                </li>
            </ul>
    </>
    )
}

function FooterLeft(){
    return(
        <>
            <h3 className="col-12">دیجی کالا در شبکه های اجتماعی</h3>
            <div className="social row">
                <div className="col-3 icon">
                    <AiOutlineWhatsApp/>
                </div>
                <div className="col-3 icon">
                    <AiOutlineInstagram/>
                </div>
                <div className="col-3 icon">
                    <AiOutlineFacebook/>
                </div>
                <div className="col-3 icon">
                    <AiOutlineLinkedin/>
                </div>
            </div>

            {/* <p>ثبت ایمیل، از جدیدیترین تخفیف ها با خبر شوید</p> */}

        </>
    )
}