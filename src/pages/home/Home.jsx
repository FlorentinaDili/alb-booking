import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Features from "../../components/features/Features";
import PropertyList from "../../components/featurePropertyList/PropertyList";
import HomesList from "../../components/featureHomesList/HomesList";
import "./home.css"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Features />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h1 className="homeTitle">Homes guests love</h1>
          <HomesList />
        </div>
    </div>
  )
}

export default Home