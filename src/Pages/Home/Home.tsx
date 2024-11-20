import Banner from "../../Component/Banner"
import Footer from "../../Component/Footer"
import ProductPage from "../Product/ProductPage"
// import ProductReview from "../Product/ProductReview"


function Home() {
  return (
    <div>
        <Banner/>
        <ProductPage/>
        {/* <ProductReview/> */}
        <Footer/>
    </div>
  )
}

export default Home