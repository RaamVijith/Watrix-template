import BrandSec from "./Components/BrandSec";
import FeatureSection from "./Components/FeatureSection";
import GenderSelection from "./Components/GenderSelection";
import HomeSlider from "./Components/HomeSlider";
import Product from "./Components/Product";
import SpecialOffer from "./Components/WatchDiscountPromotion";

function App() {
  const products = [
    {
      image:
        "https://ld-wp73.template-help.com/woocommerce/prod_24427/v2/wp-content/uploads/2019/06/Bold-Round-Analog-Gunmetal-Dial-1-400x400.jpg",
      title: "BOLD ROUND ANALOG GUNMETAL DIAL",
      price: 49.99,
    },
    {
      image:
        "https://ld-wp73.template-help.com/woocommerce/prod_24427/v2/wp-content/uploads/2019/06/Dapper-Round-Analog-400x400.jpg",
      title: "DAPPER ROUND ANALOG",
      price: 79.99,
    },
    {
      image:
        "https://ld-wp73.template-help.com/woocommerce/prod_24427/v2/wp-content/uploads/2019/06/Round-Analog-White-Bee-Dial-Ladies-2-400x400.jpg",
      title: "ROUNDER ALOLOG WHITE BEE DIAL LADIES",
      price: 49.99,
    },
    {
      image:
        "https://ld-wp73.template-help.com/woocommerce/prod_24427/v2/wp-content/uploads/2019/06/Round-Analog-White-Dial-Ladies-2-400x400.jpg",
      title: "ROUNDED ANALOG WHITE DIAL LADIES",
      price: 79.99,
    },
  ];

  return (
    <>
      {/* <Navbar/> */}
      <HomeSlider />
      <BrandSec />

      <div className="flex w-full justify-center border-t-[1px] border-gray-400 text-gray-800 py-[3vw] font-normal text-2xl lg:text-4xl">
        TREND WATCHES
      </div>
      <div className="flex flex-wrap ">
        {products.map((product, index) => (
          <Product
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
      <SpecialOffer />

      <div className="flex w-full justify-center uppercase border-t-[1px] border-gray-400 text-gray-800 py-[3vw] font-normal text-2xl lg:text-4xl">
        Choose your watch
      </div>
      <div>
        <GenderSelection
          leftImage="https://ld-wp73.template-help.com/woocommerce/prod_24427/v2/wp-content/uploads/2019/06/for-her.jpg"
          rightImage="https://ld-wp73.template-help.com/woocommerce/prod_24427/v2/wp-content/uploads/2019/06/for-him.jpg"
        />
      </div>

      <FeatureSection />

      <div className="flex w-full uppercase justify-center border-t-[1px] border-gray-400 text-gray-800 py-[3vw] font-normal text-2xl lg:text-4xl">
        
popular watches

      </div>
      <div className="flex flex-wrap ">
        {products.map((product, index) => (
          <Product
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}

export default App;
