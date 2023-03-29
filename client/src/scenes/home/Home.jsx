import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList";

const Home = () => {
  return (
    <div className="home">
      <MainCarousel />
      <ShoppingList />
      {/* <Subscribe /> */}
    </div>
  );
};

export default Home;
