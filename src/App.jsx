import Menu from './pages/header/menu.jsx'
import HeroSection from './pages/herosection/herosection'
import Category from './pages/category/category'
import Product from './pages/product/product.jsx'
// import Section from  './pages/section/roduct.jsx'
import Footer from './pages/footer/footer.jsx'

import './App.css'


export default function Main(){
  return(
    <main className='container-fluid'>
      <Menu />
      <HeroSection />
      <Category />
      <Product />
      {/* <Section /> */}
      <Footer />
    </main>
  )

  }

