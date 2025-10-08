import Link from "next/link";
import React, { useState } from "react";

const PricingMenu = () => {
  const [activeTab, setActiveTab] = useState("MANDHI");

  const tabs = [
  "MANDHI",
  "BRIYANI",
  "SHAWARMA",
  "RICE",
  "FRIES",
  "JAPANESE FRIES",
  "CHICKEN MOMOS",
  "CHICKEN PIZZA MOMOS",
  "CHICKEN TIKKA MOMOS",  
  "VEG MOMOS",
  "NOODLES",
  "SOUP",
  "ROTTI",
]
;

  const handleWhatsAppClick = (item) => {
    const message = `I would like to try out ${item.name}`;
    const whatsappUrl = `https://wa.me/+91${
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
    }?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const menuItems = [
  {
    category: "FRIES",
   items: [
  { name: "Classic salt French fries", description: "Crispy golden fries seasoned with classic salt.", price: 80, image: "menuItems/fries.jpg" },
  { name: "Peri peri French fries", description: "Crispy fries tossed in spicy peri peri sauce.", price: 90, image: "menuItems/fries.jpg" },
  { name: "Cheese French fries", description: "Golden fries smothered with melted cheese.", price: 120, image: "menuItems/fries.jpg" },
  { name: "BBQ French fries", description: "Fries with smoky BBQ flavor.", price: 120, image: "menuItems/fries.jpg" },
  { name: "Loaded French fries", description: "Fries loaded with toppings.", price: 160, image: "menuItems/fries.jpg" },
  { name: "Loaded cheese French fries", description: "Fries loaded with cheese and toppings.", price: 180, image: "menuItems/fries.jpg" }
]

  },
  {
    category: "JAPANESE FRIES",
    items: [
      { name: "Japanese fresh fries (with Tandoori mayo)", description: "Fries with Japanese spices and tandoori mayo.", price: 100, image: "menuItems/fries.jpg" }
    ]
  },
  {
    category: "CHICKEN MOMOS",
    items: [
      { name: "Steamed / Fried", description: "Delicious chicken momos, steamed or fried.", price: 110, image: "menuItems/c-momos.avif" },
      { name: "Chilli / Schezwan", description: "Spicy chicken momos with chilli or Schezwan sauce.", price: 140, image: "menuItems/c-momos.avif" }
    ]
  },
  {
    category: "CHICKEN PIZZA MOMOS",
    items: [
      { name: "Steamed / Fried", description: "Chicken pizza momos, steamed or fried.", price: 120, image: "menuItems/pizza-momo.jpeg" },
      { name: "Chilli / Schezwan", description: "Spicy chicken pizza momos with chilli or Schezwan sauce.", price: 150, image: "menuItems/pizza-momo.jpeg" }
    ]
  },
  {
    category: "CHICKEN TIKKA MOMOS",
    items: [
      { name: "Steamed / Fried", description: "Chicken tikka momos, steamed or fried.", price: 140, image: "menuItems/c-momos.avif" },
      { name: "Chilli / Schezwan", description: "Spicy chicken tikka momos with chilli or Schezwan sauce.", price: 160, image: "menuItems/c-momos.avif" }
    ]
  },
  {
    category: "VEG MOMOS",
    items: [
      { name: "Steamed / Fried", description: "Soft and tasty vegetarian momos, steamed or fried.", price: 100, image: "menuItems/c-momos.avif" },
      { name: "Chilli / Schezwan", description: "Veg momos tossed in spicy chilli or Schezwan sauce.", price: 130, image: "menuItems/c-momos.avif" }
    ]
  },
  {
    category: "NOODLES",
    items: [
      { name: "Veg noodles", description: "Stir-fried noodles with fresh vegetables.", price: 135, image: "menuItems/noodles.webp" },
      { name: "Egg noodles", description: "Noodles with egg, stir-fried with veggies.", price: 140, image: "menuItems/noodles.webp" },
      { name: "Chicken noodles", description: "Noodles tossed with tender chicken pieces.", price: 170, image: "menuItems/noodles.webp" },
      { name: "Prawns noodles", description: "Flavorful noodles with juicy prawns.", price: 190, image: "menuItems/noodles.webp" },
      { name: "Mix noodles", description: "Noodles with mixed vegetables, chicken and prawns.", price: 190, image: "menuItems/noodles.webp" },
      { name: "Schezwan chicken noodles", description: "Spicy Schezwan chicken noodles.", price: 180, image: "menuItems/noodles.webp" },
      { name: "Schezwan egg noodles", description: "Spicy Schezwan egg noodles.", price: 150, image: "menuItems/noodles.webp" },
      { name: "Schezwan veg noodles", description: "Spicy Schezwan vegetable noodles.", price: 145, image: "menuItems/noodles.webp" },
      { name: "Schezwan prawns noodles", description: "Spicy Schezwan prawns noodles.", price: 200, image: "menuItems/noodles.webp" }
    ]
  },
  {
    category: "SOUP",
    items: [
      { name: "Sweet corn chicken", description: "Sweet corn soup with chicken.", price: 70, image: "menuItems/soup.jpg" },
      { name: "Sweet corn veg", description: "Sweet corn soup with vegetables.", price: 60, image: "menuItems/soup.jpg" },
      { name: "Hot & sour chicken", description: "Hot and sour chicken soup.", price: 80, image: "menuItems/soup.jpg" },
      { name: "Hot & sour veg", description: "Hot and sour vegetable soup.", price: 70, image: "menuItems/soup.jpg" },
      { name: "Manchow chicken", description: "Manchow chicken soup with spices.", price: 80, image: "menuItems/soup.jpg" },
      { name: "Manchow veg", description: "Manchow vegetable soup with spices.", price: 70, image: "menuItems/soup.jpg" },
      { name: "Cream of chicken", description: "Creamy chicken soup.", price: 80, image: "menuItems/soup.jpg" },
      { name: "Cream of tomato", description: "Creamy tomato soup.", price: 70, image: "menuItems/soup.jpg" },
      { name: "Cream of veg", description: "Creamy vegetable soup.", price: 70, image: "menuItems/soup.jpg" }
    ]
  },
  {
    category: "ROTTI",
    items: [
      { name: "Chapati", description: "Soft Indian flatbread.", price: 12, image: "menuItems/chapati.jpeg" },
      { name: "Parotta", description: "Flaky layered Indian bread.", price: 15, image: "menuItems/porotta.jpeg" },
      { name: "Kuboos", description: "Soft Arabic flatbread.", price: 12, image: "menuItems/kuboos.jpg" },
      { name: "Rumali", description: "Thin, hand-stretched flatbread.", price: 20, image: "menuItems/romali.jpg" }
    ]
  },
  {
    category: "STARTS CHICKEN",
    items: [
      { name: "Popcorn", description: "Crispy chicken popcorn, 10 pcs.", price: 60, image: "popcorn.png" },
      { name: "Nuggets", description: "Juicy chicken nuggets, 8 pcs.", price: 100, image: "nuggets.png" }
    ]
  },
  {
    category: "RICE",
    items: [
  { name: "Veg fried rice", description: "Wok-fried rice with vegetables.", price: 110, image: "menuItems/friedRice.webp" },
  { name: "Egg fried rice", description: "Fried rice with eggs.", price: 125, image: "menuItems/friedRice.webp" },
  { name: "Chicken fried rice", description: "Fried rice with chicken.", price: 160, image: "menuItems/friedRice.webp" },
  { name: "Prawns fried rice", description: "Fried rice with prawns.", price: 170, image: "menuItems/friedRice.webp" },
  { name: "Mixed fried rice", description: "Fried rice with chicken, veg & prawns.", price: 180, image: "menuItems/friedRice.webp" },
  { name: "Ghee rice", description: "Simple ghee-flavored rice.", price: 80, image: "menuItems/friedRice.webp" },
  { name: "Ghee rice with Alfaham", description: "Ghee rice served with Alfaham.", price: 230, image: "menuItems/friedRice.webp" },
  { name: "Schezwan chicken fried rice", description: "Spicy Schezwan chicken fried rice.", price: 170, image: "menuItems/friedRice.webp" },
  { name: "Schezwan egg fried rice", description: "Spicy Schezwan egg fried rice.", price: 135, image: "menuItems/friedRice.webp" },
  { name: "Schezwan veg fried rice", description: "Spicy Schezwan vegetable fried rice.", price: 125, image: "menuItems/friedRice.webp" },
  { name: "Schezwan prawns fried rice", description: "Spicy Schezwan prawns fried rice.", price: 180, image: "menuItems/friedRice.webp" },
  { name: "Mixed prawns fried rice", description: "Fried rice with mixed prawns.", price: 220, image: "menuItems/friedRice.webp" }
]

  },
  {
    category: "BRIYANI",
    items: [
      { name: "Prawns Briyani", description: "Fragrant prawns briyani.", price: 200, image: "posts/post4.heic" },
      { name: "Chicken Briyani", description: "Flavorful chicken briyani.", price: 160, image: "posts/post4.heic" },
      { name: "Veg Briyani", description: "Aromatic vegetable briyani.", price: 110, image: "posts/post4.heic" },
      { name: "Egg Briyani", description: "Egg briyani with spices.", price: 120, image: "posts/post4.heic" },
      { name: "Paneer Briyani", description: "Paneer briyani with fragrant spices.", price: 130, image: "posts/post4.heic" }
    ]
  },
  {
    category: "CURRY",
    items: [
      { name: "North Indian Chicken 65", description: "Crispy fried North Indian style Chicken 65.", price: 170, image: "north-indian-chicken-65.png" },
      { name: "Chicken 65", description: "Crispy fried chicken 65.", price: 160, image: "chicken-65.png" },
      { name: "Schezwan Chicken", description: "Spicy Schezwan chicken curry.", price: 150, image: "schezwan-chicken.png" },
      { name: "Shanghai Chicken", description: "Shanghai-style chicken curry.", price: 150, image: "shanghai-chicken.png" },
      { name: "Dragon Chicken", description: "Flavorful dragon chicken curry.", price: 150, image: "dragon-chicken.png" },
      { name: "Chilli Chicken", description: "Spicy chilli chicken curry.", price: 150, image: "chilli-chicken.png" },
      { name: "Garlic Chicken", description: "Garlic-flavored chicken curry.", price: 150, image: "garlic-chicken.png" },
      { name: "Ginger Chicken", description: "Ginger-flavored chicken curry.", price: 160, image: "ginger-chicken.png" },
      { name: "Chicken Manchurian", description: "Classic chicken Manchurian.", price: 140, image: "chicken-manchurian.png" },
      { name: "Chicken Roast", description: "Roasted chicken curry.", price: 140, image: "chicken-roast.png" },
      { name: "Chicken Curry", description: "Simple chicken curry.", price: 120, image: "chicken-curry.png" },
      { name: "Chilli Gobi", description: "Spicy chilli cauliflower curry.", price: 120, image: "chilli-gobi.png" },
      { name: "Chilli Paneer", description: "Spicy chilli paneer curry.", price: 120, image: "chilli-paneer.png" },
      { name: "Egg Roast", description: "Spicy egg roast.", price: 30, image: "egg-roast.png" },
      { name: "Paneer Butter Masala", description: "Creamy paneer butter masala.", price: 150, image: "paneer-butter-masala.png" },
      { name: "Paneer Manchurian", description: "Paneer Manchurian in spicy sauce.", price: 130, image: "paneer-manchurian.png" },
      { name: "Veg Mix Curry", description: "Mixed vegetable curry.", price: 80, image: "veg-mix-curry.png" },
      { name: "Gobi Manchurian", description: "Cauliflower Manchurian in spicy sauce.", price: 130, image: "gobi-manchurian.png" }
    ]
  },
  {
    category: "SHAWARMA",
    items: [
      { name: "Shawarma roll kuboos", description: "Classic shawarma roll in kuboos bread.", price: 100, image: "/menuItems/shavarma.jpg" },
      { name: "Shawarma roll romali", description: "Classic shawarma roll in rumali bread.", price: 120, image: "/menuItems/shavarma.jpg" },
      { name: "Shawarma plate kuboos", description: "Shawarma served on plate with kuboos.", price: 130, image: "/menuItems/shavarma.jpg" },
      { name: "Shawarma plate romali", description: "Shawarma served on plate with rumali.", price: 150, image: "/menuItems/shavarma.jpg" },
      { name: "Peri peri shawarma roll kuboos", description: "Spicy peri peri shawarma roll in kuboos.", price: 110, image: "/menuItems/shavarma.jpg" },
      { name: "Peri peri shawarma roll romali", description: "Spicy peri peri shawarma roll in rumali.", price: 130, image: "/menuItems/shavarma.jpg" },
      { name: "Peri peri shawarma plate kuboos", description: "Peri peri shawarma served on plate with kuboos.", price: 140, image: "/menuItems/shavarma.jpg" },
      { name: "Peri peri shawarma plate romali", description: "Peri peri shawarma served on plate with rumali.", price: 160, image: "/menuItems/shavarma.jpg" },
      { name: "BBQ shawarma roll kuboos", description: "BBQ flavored shawarma roll in kuboos.", price: 110, image: "/menuItems/shavarma.jpg" },
      { name: "BBQ shawarma roll romali", description: "BBQ flavored shawarma roll in rumali.", price: 130, image: "/menuItems/shavarma.jpg" },
      { name: "BBQ shawarma plate kuboos", description: "BBQ shawarma served on plate with kuboos.", price: 140, image: "/menuItems/shavarma.jpg" },
      { name: "BBQ shawarma plate romali", description: "BBQ shawarma served on plate with rumali.", price: 160, image: "/menuItems/shavarma.jpg" },
      { name: "Chapati shawarma roll", description: "Shawarma roll served in chapati.", price: 100, image: "/menuItems/shavarma.jpg" },
      { name: "Poratta shawarma roll", description: "Shawarma roll served in parotta.", price: 120, image: "/menuItems/shavarma.jpg" },
      { name: "Mexican shawarma roll kuboos", description: "Mexican style shawarma roll in kuboos.", price: 120, image: "/menuItems/shavarma.jpg" },
      { name: "Mexican shawarma roll romali", description: "Mexican style shawarma roll in rumali.", price: 130, image: "/menuItems/shavarma.jpg" },
      { name: "Mexican shawarma plate kuboos", description: "Mexican style shawarma served on plate with kuboos.", price: 150, image: "/menuItems/shavarma.jpg" },
      { name: "Mexican shawarma plate romali", description: "Mexican style shawarma served on plate with rumali.", price: 170, image: "/menuItems/shavarma.jpg" }
    ]
  },
  {
    category: "ALFAHAM",
    items: [
      { name: "Alfaham quarter kuboos", description: "Quarter portion Alfaham served in kuboos.", price: 140, image: "alfaham-quarter-kuboos.png" },
      { name: "Alfaham half kuboos", description: "Half portion Alfaham served in kuboos.", price: 280, image: "alfaham-half-kuboos.png" },
      { name: "Alfaham full kuboos", description: "Full Alfaham served in kuboos.", price: 560, image: "alfaham-full-kuboos.png" },
      { name: "Alfaham quarter romali", description: "Quarter portion Alfaham served in rumali.", price: 150, image: "alfaham-quarter-romali.png" },
      { name: "Alfaham half romali", description: "Half portion Alfaham served in rumali.", price: 300, image: "alfaham-half-romali.png" },
      { name: "Alfaham full romali", description: "Full Alfaham served in rumali.", price: 600, image: "alfaham-full-romali.png" },
      { name: "Alfaham quarter plate", description: "Quarter portion Alfaham served on plate.", price: 160, image: "alfaham-quarter-plate.png" },
      { name: "Alfaham half plate", description: "Half portion Alfaham served on plate.", price: 320, image: "alfaham-half-plate.png" },
      { name: "Alfaham full plate", description: "Full Alfaham served on plate.", price: 640, image: "alfaham-full-plate.png" }
    ]
  },
  {
    category: "HOT",
    items: [
      { name: "Hot coffee", description: "Freshly brewed hot coffee.", price: 40, image: "hot-coffee.png" },
      { name: "Hot tea", description: "Fresh hot tea.", price: 30, image: "hot-tea.png" },
      { name: "Hot chocolate", description: "Creamy hot chocolate.", price: 50, image: "hot-chocolate.png" },
      { name: "Filter coffee", description: "Traditional filter coffee.", price: 50, image: "filter-coffee.png" }
    ]
  },
  {
    category: "FRESH JUICE",
    items: [
      { name: "Orange juice", description: "Freshly squeezed orange juice.", price: 70, image: "orange-juice.png" },
      { name: "Pineapple juice", description: "Fresh pineapple juice.", price: 70, image: "pineapple-juice.png" },
      { name: "Mango juice", description: "Fresh mango juice.", price: 80, image: "mango-juice.png" },
      { name: "Watermelon juice", description: "Fresh watermelon juice.", price: 60, image: "watermelon-juice.png" },
      { name: "Mixed fruit juice", description: "Freshly blended mixed fruit juice.", price: 90, image: "mixed-fruit-juice.png" }
    ]
  },
  {
    category: "MOJITO",
    items: [
      { name: "Virgin mojito", description: "Refreshing non-alcoholic mojito.", price: 100, image: "virgin-mojito.png" },
      { name: "Classic mojito", description: "Classic mojito with mint and lime.", price: 120, image: "classic-mojito.png" },
      { name: "Strawberry mojito", description: "Strawberry flavored mojito.", price: 130, image: "strawberry-mojito.png" },
      { name: "Mango mojito", description: "Mango flavored mojito.", price: 140, image: "mango-mojito.png" }
    ]
  },
  {   
    category: "LIME",
    items: [
      { name: "Lime soda", description: "Refreshing lime soda.", price: 50, image: "lime-soda.png" },
      { name: "Sweet lime soda", description: "Sweet lime flavored soda.", price: 60, image: "sweet-lime-soda.png" }
    ]
  },
  {
    category: "MANDHI",
    items: [
      { name: "Quarter Mandhi with Alfaham", description: "Quarter portion of Mandhi served with Alfaham.", price: 240, image: "peri-peri-mandi.png" },
      { name: "Half Mandhi with Alfaham", description: "Half portion of Mandhi served with Alfaham.", price: 480, image: "peri-peri-mandi.png" },
      { name: "3/4 Mandhi with Alfaham", description: "Three-fourths portion of Mandhi served with Alfaham.", price: 720, image: "peri-peri-mandi.png" },
      { name: "Full Mandhi with Alfaham", description: "Full portion of Mandhi served with Alfaham.", price: 960, image: "peri-peri-mandi.png" },
      { name: "Quarter Mandhi with Peri Peri Alfaham", description: "Quarter Mandhi served with spicy Peri Peri Alfaham.", price: 250, image: "peri-peri-mandi.png" },
      { name: "Half Mandhi with Peri Peri Alfaham", description: "Half Mandhi served with spicy Peri Peri Alfaham.", price: 500, image: "peri-peri-mandi.png" },
      { name: "3/4 Mandhi with Peri Peri Alfaham", description: "Three-fourths Mandhi served with spicy Peri Peri Alfaham.", price: 750, image: "peri-peri-mandi.png" },
      { name: "Full Mandhi with Peri Peri Alfaham", description: "Full Mandhi served with spicy Peri Peri Alfaham.", price: 1000, image: "peri-peri-mandi.png" },
      { name: "Quarter Mandhi with BBQ Alfaham", description: "Quarter Mandhi served with BBQ Alfaham.", price: 250, image: "peri-peri-mandi.png" },
      { name: "Half Mandhi with BBQ Alfaham", description: "Half Mandhi served with BBQ Alfaham.", price: 500, image: "peri-peri-mandi.png" },
      { name: "3/4 Mandhi with BBQ Alfaham", description: "Three-fourths Mandhi served with BBQ Alfaham.", price: 750, image: "peri-peri-mandi.png" },
      { name: "Full Mandhi with BBQ Alfaham", description: "Full Mandhi served with BBQ Alfaham.", price: 1000, image: "peri-peri-mandi.png" },
      { name: "Quarter Mandhi with Honey Chilli Alfaham", description: "Quarter Mandhi served with Honey Chilli Alfaham.", price: 250, image: "peri-peri-mandi.png" },
      { name: "Half Mandhi with Honey Chilli Alfaham", description: "Half Mandhi served with Honey Chilli Alfaham.", price: 500, image: "peri-peri-mandi.png" },
      { name: "3/4 Mandhi with Honey Chilli Alfaham", description: "Three-fourths Mandhi served with Honey Chilli Alfaham.", price: 750, image: "peri-peri-mandi.png" },
      { name: "Full Mandhi with Honey Chilli Alfaham", description: "Full Mandhi served with Honey Chilli Alfaham.", price: 1000, image: "peri-peri-mandi.png" },
      { name: "Quarter Mandhi with Red Dragon Alfaham", description: "Quarter Mandhi served with Red Dragon Alfaham.", price: 250, image: "peri-peri-mandi.png" },
      { name: "Half Mandhi with Red Dragon Alfaham", description: "Half Mandhi served with Red Dragon Alfaham.", price: 500, image: "peri-peri-mandi.png" },
      { name: "3/4 Mandhi with Red Dragon Alfaham", description: "Three-fourths Mandhi served with Red Dragon Alfaham.", price: 750, image: "peri-peri-mandi.png" },
      { name: "Full Mandhi with Red Dragon Alfaham", description: "Full Mandhi served with Red Dragon Alfaham.", price: 1000, image: "peri-peri-mandi.png" },
      { name: "Quarter Mandhi with Hot Chilli Garlic Alfaham", description: "Quarter Mandhi served with Hot Chilli Garlic Alfaham.", price: 250, image: "peri-peri-mandi.png" },
      { name: "Half Mandhi with Hot Chilli Garlic Alfaham", description: "Half Mandhi served with Hot Chilli Garlic Alfaham.", price: 500, image: "peri-peri-mandi.png" },
      { name: "3/4 Mandhi with Hot Chilli Garlic Alfaham", description: "Three-fourths Mandhi served with Hot Chilli Garlic Alfaham.", price: 750, image: "peri-peri-mandi.png" },
      { name: "Full Mandhi with Hot Chilli Garlic Alfaham", description: "Full Mandhi served with Hot Chilli Garlic Alfaham.", price: 1000, image: "peri-peri-mandi.png" },
      { name: "Quarter Mandhi with Creamy Afghani Alfaham", description: "Quarter Mandhi served with Creamy Afghani Alfaham.", price: 250, image: "peri-peri-mandi.png" },
      { name: "Half Mandhi with Creamy Afghani Alfaham", description: "Half Mandhi served with Creamy Afghani Alfaham.", price: 500, image: "peri-peri-mandi.png" },
      { name: "3/4 Mandhi with Creamy Afghani Alfaham", description: "Three-fourths Mandhi served with Creamy Afghani Alfaham.", price: 750, image: "peri-peri-mandi.png" },
      { name: "Full Mandhi with Creamy Afghani Alfaham", description: "Full Mandhi served with Creamy Afghani Alfaham.", price: 1000, image: "peri-peri-mandi.png" },
      { name: "Only Mandhi rice", description: "Plain Mandhi rice without Alfaham.", price: 100, image: "peri-peri-mandi.png" }
    ]
  }
];



  const activeItems =
    menuItems.find((menu) => menu.category === activeTab)?.items || [];

  return (
    <div className="bg-cream text-center py-10 px-5 flex items-center justify-center min-h-screen">
      <div>
        <h1 className="text-[#C44347] font-semibold text-sm">PRICING MENU</h1>
        <h2 className="text-4xl font-bold text-gray-800 my-4">
          DELICIOUS DEALS FOR YOU
        </h2>
        <div className="flex justify-start m-auto overflow-x-scroll w-[90vw] gap-4 mt-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full hover:bg-[#C92127]/10 w-full text-nowrap text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#C44347] text-white"
                  : "bg-[#ebeaea] text-gray-700 shadow"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-[#FEFCD8] bg-opacity-75 shadow-lg rounded-lg overflow-hidden hover:cursor-pointer"
              onClick={() => handleWhatsAppClick(item)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover p-2 rounded-full"
              />
              <div className="p-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mt-2">{item.description}</p>
              </div>
              <div className="text-[#024548] font-bold text-lg px-4">
                {item.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingMenu;
