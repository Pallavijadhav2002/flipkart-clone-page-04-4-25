import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import PromotionalCards from "./components/PromotionalCards";
import FloatingCart from "./components/FloatingCart";
import ProductPage from "./components/pages/ProductPage";
import "./styles.css";
import ProductGrid from "./ProductGrid";
import ProductDetails from "./ProductDetails";
import products from "./data/product.json"; // ✅ Correct Import
import ProductDetailsPage from "./components/pages/ProductDetailsPage";


function App() {
  // Example products
  const fashion = [
    {
      id: 1,
      name: "Black Jacket",
      image:
     "https://rukminim1.flixcart.com/image/580/696/k2z1t3k0/jacket/5/d/z/9-10-years-abjkcrgfx19327-allen-solly-original-imafm4kftqz5ksgt.jpeg?q=50",
      price: "₹1789",
    },
    {
      id: 2,
      name: "Embellished Sweatshirt",
      image:
"https://rukminim1.flixcart.com/image/434/521/kjbr8280-0/jacket/7/a/t/11-12-years-gj04-fort-collins-original-imafywuvnzkvvhxj.jpeg?q=50",        price: "₹999",
    },
    {
      id: 3,
      name: "Printed Jacket",
      image:
"https://rukminim1.flixcart.com/image/434/521/kfmv9u80/sweatshirt/h/m/v/5-6-years-mcbaw20ss009b-miss-chief-original-imafwfyvmgefy4tw.jpeg?q=50",        price: "₹2400",
    },
    {
      id: 4,
      name: "Winter Gloves",
      image:
"https://rukminim1.flixcart.com/image/434/521/ke1pnrk0/glove/c/w/u/free-reusable-washable-knitted-winter-cotton-gloves-bundle-grey-original-imafusmyse4nzcvx.jpeg?q=50",        price: "₹299",
    },
    {
      id: 5,
      name: "Women Dress",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/e/u/z/s-ttsh001525-tokyo-talkies-original-imagthfyedpyhcfh.jpeg?q=70",
        price: "₹467",
    },
    {
      id: 6,
      name: "Kanjivaram Saree",
      image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/m/b/q/free-jac02-anjavi-fashion-unstitched-original-imah87ymhhecswer.jpeg?q=70",   
      price: "₹1299",
    },
    {
      id: 7,
      name: "Regular High Rise Light Blue Jeans",
      image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/u/j/u/32-kttladiesjeans2915-kotty-original-imah6zjvz3etuw9g.jpeg?q=70",    
      price: "₹550",
    },
  ];

  const bestOfElectronics = [
    {
      name: "Smart Watch",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/r/c/o/-original-imah8mtvefdghhgn.jpeg?q=70",
      price: "From ₹1,099",
    },
    {
      name: "Power Bank",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/power-bank/i/z/y/-original-imagymk3gc326pby.jpeg?q=70",
      price: "From ₹899",
    },
    {
      name: "Trimmer",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/trimmer/a/d/k/-original-imah5yytgup8h2rr.jpeg?q=70",
      price: "From ₹649",
    },
    {
      name: "Headphones",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/g/p/v/nb119-pro-belief-upto-48h-playtime-fast-charging-dual-pairing-original-imah873fjtfajqsy.jpeg?q=70",
      price: "From ₹1,499",
    },
    {
      name: "Camera",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/dslr-camera/n/p/t/eos-r50-24-2-r50-canon-original-imagngc7syac8pfd.jpeg?q=70",
      price: "From ₹34,999",
    },
    {
      name: "Monitor",
      image:
      "https://rukminim2.flixcart.com/image/312/312/l55nekw0/monitor/j/m/b/vz24ehe-full-hd-23-8-90lm07c3-b01410-asus-original-imagfwed5g2s2d7y.jpeg?q=70",      price: "From ₹7999",
    },
    {
      name: "Printers",
      image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/printer/s/8/d/-original-imafkykednshkhx5.jpeg?q=70",
      price: "From ₹23,999",
    },
  ];

  const beautyAndToys = [
    {
      name: "Tea Powder",
      image:
     "https://rukminim2.flixcart.com/image/612/612/kkimfm80/tea/z/n/1/premium-pouch-regular-tea-powder-tata-original-imafzuf2mnubzphd.jpeg?q=70",
      offer: "Up to 80% Off",
    },
    {
      name: "Food Spreads",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/jam-spread/t/t/g/510-chocolate-crispy-junior-jar-1-nut-butter-myfitness-peanut-original-imah8hgd3azskmbt.jpeg?q=70",
      offer: "Up to 75% Off",
    },
    {
      name: "Geared Cycles",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/j/c/o/hopper-jetpro-ibc-26t-with-90-assembled-26-18-fastway-bicycle-original-imah92gez9z4ypfw.jpeg?q=70",
      offer: "Up to 70% Off",
    },
    {
      name: "Remote Control Toys",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/l/b/k/famous-car-remote-control-3d-car-with-led-lights-chargeable-1-original-imagwwfyphzhvpmv.jpeg?q=70",
      offer: "Up to 80% Off",
    },
    {
      name: "Soft Toys",
      image:
        "https://rukminim2.flixcart.com/image/612/612/ke4kjgw0/stuffed-toy/3/s/c/5-feet-soft-smooth-teddy-bear-very-smooth-toys-birthday-150-original-imafuvgcdgwvyg6y.jpeg?q=70",
      offer: "Up to 70% Off",
    },
    {
      name: "Dry fruits",
      image:
     " https://rukminim2.flixcart.com/image/612/612/xif0q/nut-dry-fruit/v/q/a/200-premium-natural-californian-1-pouch-happilo-original-imah9de9yqve5gz7.jpeg?q=70",    
       offer: "Up to 70% Off",
    },
    {
      name: "Moisturizer",
      image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-moisturizer-cream/3/t/p/50-oil-free-moisturizer-for-oily-skin-non-comedogenic-original-imah5aghf6mgvrq7.jpeg?q=70",      offer: "Up to 70% Off",
    },
  ];

  return (
    <>
      <Navbar />
      <Categories />
      <Banner />
      <PromotionalCards />
      
      <Routes>
        {/* Home Page with Product Sections */}
        <Route
          path="/"
          element={
            <div className="content-wrapper">
              <ProductSection title="New Arrival Clothes" products={products} />
            </div>
          }
        />

        {/* Product Details Page Route */}
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
       
      <div className="content-wrapper">
        <ProductSection title="Best of Electronics" products={bestOfElectronics} />
        <ProductSection title="New Arrival cloths" products={fashion} /> 
        <ProductSection title="Beauty, Food, Toys & More" products={beautyAndToys} />
      </div>

      
      <FloatingCart />  {/* Add this component */}
      
      <Footer />
   
      
    </>
  );
}

export default App;