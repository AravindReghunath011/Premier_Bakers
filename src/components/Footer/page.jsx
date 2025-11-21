import React from "react";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#C44347] text-[#fff] py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Company Info */}
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-6">
            <img
              src="premier_logo.jpg"
              alt="Company Logo"
              className="h-36 rounded-full"
            />
          </div>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-[#FBEABB]/80 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/premier_bakers_/"
              className="hover:text-[#FBEABB]/80 transition-colors"
              target="__blank"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-[#FBEABB]/80 transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-[#FBEABB]/80 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-center md:text-left">
            © 2025 Premier Bakers. All rights reserved.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Contact</h3>

          <div className="space-y-2">
            
            <h4 className="text-lg font-medium">Ramapuram</h4>
            <p className="text-sm">
           Ramapuram ,Kottayam, Kerala 686561
            </p>
            <p className="text-sm">+91 73065 72682</p>
            <p className="text-sm">premierbakers1996@gmail.com </p>
          </div>

          {/* <div className="space-y-2">
            <h4 className="text-lg font-medium">Madiwalla  </h4>
            <p className="text-sm">
            Ramapuram ,Kottayam, Kerala 686561
            </p>
            <p className="text-sm">+91 80504 50604
            </p>
            <p className="text-sm">compliance@.in </p>
          </div> */}

          
        </div>

        {/* Branches & Newsletter */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-[#fff]">Our Branches</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><a
            href="https://maps.app.goo.gl/2gcXPQ9dMVb4vYgdA?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FBEABB]/80 hover:underline text-sm"
          >
            Ramapuram
          </a></li>
            <li><a
            href="https://maps.app.goo.gl/3XjDRnf6NzSr3znD7?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FBEABB]/80 hover:underline text-sm"
          >
            Kollappally 
          </a></li>
            <li><a
            href="https://maps.app.goo.gl/aNsjmGPmHQQHXhNy6?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FBEABB]/80 hover:underline text-sm"
          >
            Pravithanam
          </a></li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#fff]">Stay Updated</h3>
          <p className="text-sm">
            Subscribe to our newsletter for the latest updates and insights.
          </p>
          <form className="flex mt-4">
            <input
              type="email"
              placeholder="Your email"
              className="p-3 rounded-l-md w-2/3 text-[#C92127] bg-[#FEFCD8] focus:outline-none"
            />
            <button
              type="submit"
              className="p-3 bg-[#FEFCD8] text-[#C92127] rounded-r-md hover:bg-[#FBEABB]/90 transition duration-300 font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 mt-10 border-t border-[#FBEABB]/30">
        <p className="text-sm">
          &copy; 2025 Premier Bakers. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;