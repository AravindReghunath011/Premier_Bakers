import Link from "next/link";
import React, { useState } from "react";

const PricingMenu = () => {
  const [activeTab, setActiveTab] = useState("Mandhi");

  const tabs = ["Mandhi", "Biriyani", "Barbecue"];

  const handleWhatsAppClick = (item) => {
    const message = `I would like to try out ${item.name}`;
    const whatsappUrl = `https://wa.me/+91${
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
    }?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const menuItems = [
    {
      category: "Mandhi",
      items: [
        {
          name: "Chicken Mandhi",
          description:
            "Fragrant basmati rice cooked with tender chicken pieces in authentic Hyderabadi spices.",
          price: 200,
          image: "peri-peri-mandi.png",
        },
        {
          name: "ARABIC SHAWAYA MANDI",
          description:
            "Fragrant basmati rice cooked with tender chicken pieces in authentic Hyderabadi spices.",
          price: 200,
          image: "peri-peri-mandi.png",
        },
        {
          name: "GREEN CHILLY SHAWAY MANDI",
          description:
            "Fragrant basmati rice cooked with tender chicken pieces in authentic Hyderabadi spices.",
          price: 220,
          image: "peri-peri-mandi.png",
        },
        {
          name: "PERI PERI SHAWAY MANDI ",
          description:
            "Fragrant basmati rice cooked with tender chicken pieces in authentic Hyderabadi spices.",
          price: 220,
          image: "peri-peri-mandi.png",
        },
        {
          name: "PEPPER SHAWAY MANDI ",
          description:
            "Fragrant basmati rice cooked with tender chicken pieces in authentic Hyderabadi spices.",
          price: 220,
          image: "peri-peri-mandi.png",
        },
        {
          name: "MASALA SHAWAY MANDI",
          description:
            "Fragrant basmati rice cooked with tender chicken pieces in authentic Hyderabadi spices.",
          price: 220,
          image: "peri-peri-mandi.png",
        },
        {
          name: "MADHFOON CHICKEN MANDI",
          description:
            "Fragrant basmati rice cooked with tender chicken pieces in authentic Hyderabadi spices.",
          price: 220,
          image: "peri-peri-mandi.png",
        },
        {
          name: "BARBEQUE MANDI",
          description:
            "Fragrant basmati rice cooked with tender chicken pieces in authentic Hyderabadi spices.",
          price: 220,
          image: "peri-peri-mandi.png",
        },
        {
          name: "PERI PERI BBQ MANDI",
          description:
            "Fragrant basmati rice cooked with tender chicken pieces in authentic Hyderabadi spices.",
          price: 220,
          image: "peri-peri-mandi.png",
        },
      ],
    },
    {
      category: "Biriyani",
      items: [
        {
          name: "Hyderabadi Chicken Biriyani",
          description:
            "Fragrant basmati rice cooked with tender chicken pieces in authentic Hyderabadi spices.",
          price: 190,
          image: "menu/biriyani/hydrabadi.jpg",
        },
        {
          name: "Malabar Chicken Biriyani",
          description:
            "Aromatic rice with chicken cooked in traditional Malabar style with coastal spices.",
          price: 170,
          image: "menu/biriyani/malabar.jpg",
        },
        {
          name: "Chicken Tikka Biriyani",
          description:
            "Flavorful biriyani with marinated and grilled chicken tikka pieces.",
          price: 240,
          image: "menu/biriyani/tikka.jpg",
        },
        {
          name: "Castle Special Biriyani",
          description:
            "Our signature biriyani with premium spices and tender chicken pieces.",
          price: 260,
          image: "menu/biriyani/hydrabadi.jpg",
        },
        {
          name: "Hyderabadi Mutton Biriyani",
          description:
            "Tender mutton pieces slow-cooked with basmati rice and authentic Hyderabadi spices.",
          price: 280,
          image: "menu/biriyani/mutton.jpg",
        },
        {
          name: "Malabar Mutton Biriyani",
          description:
            "Succulent mutton cooked with rice in traditional Kerala coastal style.",
          price: 270,
          image: "menu/biriyani/malabar-mutton.jpg",
        },
        {
          name: "Paneer Biriyani",
          description:
            "Flavorful vegetarian option with soft paneer cubes and aromatic rice.",
          price: 150,
          image: "menu/biriyani/paneer.jpg",
        },
        {
          name: "Hyderabadi Family Chicken Biriyani (Full)",
          description:
            "Large portion of our signature Hyderabadi chicken biriyani, perfect for family sharing.",
          price: 750,
          image: "menu/biriyani/hydrabadi.jpg",
        },
      ],
    },
    {
      category: "Barbecue",
      items: [
        {
          name: "Grilled Chicken (Full)",
          description: "Whole chicken marinated and grilled to perfection.",
          price: 400,
          image: "grilledchicken.png",
        },
        {
          name: "Masala Shaway (Full)",
          description:
            "Traditional Arabian grilled chicken with a spicy masala twist.",
          price: 460,
          image: "MasalaShaway.png",
        },
        {
          name: "Peri Peri Shaway (Full)",
          description: "Grilled chicken with fiery peri peri spice blend.",
          price: 480,
          image: "periperishawaya.png",
        },
        {
          name: "Barbeque Wings (8pcs)",
          description:
            "Juicy chicken wings marinated in BBQ sauce and grilled.",
          price: 420,
          image: "BarbequeWings.png",
        },
        {
          name: "Al-Faham Dajaj (Full)",
          description:
            "Traditional Middle Eastern style grilled chicken with special spices.",
          price: 440,
          image: "AlFahamDajaj.png",
        },
        {
          name: "Castle Special Barbeque Chicken (Full)",
          description:
            "Our signature barbeque chicken with chef's special marinade.",
          price: 480,
          image: "SpecialBarbeque.png",
        },
        {
          name: "Moroccan BBQ Chicken (Full)",
          description: "Grilled chicken with exotic Moroccan spices and herbs.",
          price: 500,
          image: "moroccan.png",
        },
        {
          name: "Mutton Chops",
          description:
            "Tender mutton chops marinated and grilled to perfection.",
          price: 499,
          image: "muttonchops.png",
        },
      ],
    },
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
        <div className="flex justify-center gap-4 mt-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#C44347] text-white"
                  : "bg-white text-gray-700 shadow"
              }`}
            >
              {tab}
            </button>
          ))}
          <Link href={"/"}>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all bg-white text-gray-700 shadow`}
            >
              View All
            </button>
          </Link>
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
