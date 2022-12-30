import bag from '../../img/bag&ShoesWomen.png'
import sport from '../../img/cricket-bat-and-ball.png'
import toys from '../../img/toys.png'
import perfumes from '../../img/NicePng_perfumes-png_2985022.png'
import ashpazkhane from '../../img/NicePng_leafe-png_3628846.png'
import Digital from '../../img/digital-kala.png'
import Dress from '../../img/women.png'
import pen from '../../img/pen.png'
import men from '../../img/men.png'

import './category.css'


export default function Category(){
    return(
        <section className='row'>
            <h2 className="col-12 text-center">دسته‌بندی‌های دیجی‌کالا</h2>
            <div className='row col-12 justify-content-center category'>

                <div className="col-sm-4 col-sx-2 category-items">
                    <img className='' src={bag} alt="" width='80%' />
                    <h3 className='text-center' >  کیف و کفش</h3>
                </div>

                <div className="col-sm-4 col-sx-2 category-items">
                    <img className='' src={pen} alt="لوازم التحریر" width='100%'  />
                    <h3 className='text-center'>لوازم التحریر</h3>
                </div>

                <div className="col-4 category-items">
                    <img style={{paddingLeft: "12px"}}  src={Dress} alt="پیراهن زنانه" width='80%' />
                    <h3 className='text-center'>پیراهن زنانه</h3>
                </div>

                <div className="col-4 category-items">
                    <img className='' src={toys} alt=""  width='90%'/>
                    <h3 className='text-center'>اسباب بازی</h3>
                </div>

                <div className="col-4 category-items">
                    <img style={{paddingLeft: "16px"}} src={men} alt="پیراهن مردانه" width='80%'  />
                    <h3 className='text-center'>پیراهن مردانه</h3>
                </div>

                <div className="col-4 category-items">
                    <img className='' src={Digital} alt="کالای دیجیتال" width='90%'/>
                    <h3 className='text-center'>کالای دیجیتال</h3>
                </div>

                <div className="col-4 category-items">
                    <img  style={{paddingLeft: "20px"}}  src={perfumes} alt="عطر و ادکلن" width='78%'/>
                    <h3 className='text-center'>عطر و ادکلن</h3>
                </div>

                <div className="col-4 category-items">
                    <img src={ashpazkhane} alt="خانه و آشپزخانه" width='80%'/>
                    <h3 className='text-center'>خانه و آشپزخانه</h3>
                </div>

                <div className="col-4 category-items">
                    <img className='px-1' src={sport} alt="ورزشی" width='100%' />
                    <h3 className='text-center'>ورزشی</h3>
                </div>
            </div>
        </section>
    )
}