import logo from '../../img/logo.svg'
import { AiOutlineShopping } from "react-icons/ai";

import "./menu.css"

export default function Menu(){
    // className="d-inline-block align-text-top"
    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img classNameName='col-3 logo' src={logo} alt="Digikala"  width="80"  />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">دسته بندی کالاها</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">درباره ما</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">تماس با ما</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <button className='btn text-light'> ثبت نام / ورود</button>
                        <a className='shop ' href="" dir="rtl"><AiOutlineShopping /></a>
                    </span>
                </div>
            </div>
        </nav>
    )
}