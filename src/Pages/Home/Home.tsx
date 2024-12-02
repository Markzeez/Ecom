import Banner from "../../Component/Banner"
import Footer from "../../Component/Footer"
import Review from "../../Component/Review"
import ProductPage from "../Product/ProductPage"



function Home() {
  return (
    <div>
        <Banner/>
        <ProductPage/>
        <Review/>
        <Footer/>
    </div>
  )
}

export default Home