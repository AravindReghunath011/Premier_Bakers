import React from 'react';
import { ShoppingBag, Star, Heart, Plus } from 'lucide-react';

const ProductCard = ({ image, name, price }) => {
  const handleWhatsAppClick = (name) => {
    const message = `I would like to try out ${name}`;
    const whatsappUrl = `https://wa.me/+91${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <div
    onClick={()=>{handleWhatsAppClick(name)}}
    className="group bg-white rounded-2xl shadow-xl p-6 transform transition-transform duration-300 hover:-translate-y-2">
      <div className="relative">
        <div className="absolute top-0 right-0 bg-white rounded-full p-2 shadow-md">
          <Heart className="w-5 h-5 text-[#C44347] cursor-pointer" />
        </div>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-56 object-contain rounded-xl mb-4 transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute bottom-4 right-4 bg-[#C44347] rounded-full p-2 cursor-pointer transform transition-transform duration-300 hover:scale-110">
          <Plus className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#C44347] text-[#C44347]" />
            ))}
          </div>
        </div>
        <div className="text-right">
          <p className="text-[#111] font-bold text-xl">₹{price}</p>
        </div>
      </div>
    </div>
  );
};

const ChooseYourItems = () => {
  const products = [
    {
      image: "gcsm.png",
      name: "Green Chilly",
      price: "220",
    },
    {
      image: "asm.png",
      name: "Arabian Shawaya",
      price: "200",
    },
    {
      image: "posts/post4.heic",
      name: "Chicken Biryani",
      price: "340",
    },
  ];



  return (
    <div className="py-16 bg-gradient-to-b from-white via-[#024548]/5 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <ShoppingBag className="w-5 h-5 text-[#C44347]" />
          <h2 className="text-center text-[#C44347] uppercase text-sm font-semibold">
            Popular Products
          </h2>
        </div>
        <h1 className="text-center text-3xl font-bold text-gray-900 mb-4">
          Choose Your Items
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Discover our handpicked selection of delicious items made with premium ingredients 
          and crafted with passion.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseYourItems;