import Banner from "../../Component/Banner"
import CardFeature from "../../Component/CardFeature"
import Review from "../../Component/Review"
import Search from "../../Component/Search"
// import ProductList from "../Product/ProductList"
import ProductPage from "../Product/ProductPage"




function Home() {
  return (
    <div>
        <Banner/>
        {/* <Filter/> */}
        <Search/>
        {/* <ProductList/> */}
        <ProductPage/>
        <CardFeature/>
        <Review/>
    </div>
  )
}

export default Home