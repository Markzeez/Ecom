import Banner from "../../Component/Banner"
import FAQ from "../../Component/FAQ"
import Filter from "../../Component/Filter"
import Footer from "../../Component/Footer"
import Review from "../../Component/Review"
// import ProductList from "../Product/ProductList"
import ProductPage from "../Product/ProductPage"



function Home() {
  return (
    <div>
        <Banner/>
        <Filter/>
        {/* <ProductList/> */}
        <ProductPage/>
        <Review/>
        <FAQ/>
        <Footer/>
    </div>
  )
}

export default Home