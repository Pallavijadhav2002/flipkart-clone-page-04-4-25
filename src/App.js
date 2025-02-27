import React from "react";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import PromotionalCards from "./components/PromotionalCards";

function App() {
  // Example products
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
      
      <div className="content-wrapper">
        <ProductSection title="Best of Electronics" products={bestOfElectronics} />
        <ProductSection title="Beauty, Food, Toys & More" products={beautyAndToys} />
      </div>

      <Footer />
    </>
  );
}

export default App;
