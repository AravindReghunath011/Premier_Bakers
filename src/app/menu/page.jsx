"use client";
import React, {useRef} from "react";
import { motion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, TrendingUp, Clock, Car, Star } from "lucide-react";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
const menuData = {
  categories: [
    { _id: "1", name: "SOUP", description: "VEG/NON VEG" },
    { _id: "2", name: "SALADS", description: "SMALL/MEDIUM/LARGE" },
    { _id: "3", name: "SHAWARMA" },
    { _id: "4", name: "ARABIC SIZZLERS" },
    { _id: "5", name: "ANDHRA STARTERS" },
    { _id: "6", name: "CASTLE SPECIAL PLATTER", description: "VEG/NON VEG" },
    { _id: "7", name: "INDIAN STARTERS", description: "FULL/HALF" },
    { _id: "8", name: "GRILLS & BARBEQUES", description: "FULL/HALF/QTR" },
    { _id: "9", name: "TANDOORI HUT NONVEG" },
    { _id: "10", name: "TANDOORI HUT SEA FOOD" },
    { _id: "11", name: "TANDOORI HUT VEG" },
    { _id: "12", name: "ARABIAN TAWA NONVEG" },
    { _id: "13", name: "ARABIAN TAWA SEA FOOD" },
    { _id: "14", name: "ARABIAN TAWA VEG" },
    { _id: "15", name: "MANDI & ARABIC RICE", description: "FULL/HALF/QTR" },
    { _id: "16", name: "INDIAN BIRIYANI & RICE", description: "QTR/HALF/FULL" },
    { _id: "17", name: "CHINESE NON VEG", description: "DRY/GRAVY" },
    { _id: "18", name: "SEA FOOD CHINESE", description: "DRY/GRAVY" },
    { _id: "19", name: "VEG CHINESE", description: "DRY/GRAVY" },
    { _id: "20", name: "BREADS" },
    { _id: "21", name: "INDIAN CURRYS VEG", description: "HALF/FULL" },
    { _id: "22", name: "FRESH JUICES" },
    { _id: "23", name: "MILKSHAKES & MOJITO" },
    { _id: "24", name: "FALOODA & ICE CREAMS" },
    { _id: "25", name: "FRUIT WITH CREAM" },
  ],
  items: [
    // SOUP
    { _id: "s1", categoryId: "1", name: "Mutton Soup", price: 160 },
    {
      _id: "s2",
      categoryId: "1",
      name: "Clear Soup",
      price: "90/130",
      variants: "Veg/Non-Veg",
    },
    {
      _id: "s3",
      categoryId: "1",
      name: "Hot & Sour",
      price: "90/130",
      variants: "Veg/Non-Veg",
    },
    {
      _id: "s4",
      categoryId: "1",
      name: "Manchow",
      price: "90/130",
      variants: "Veg/Non-Veg",
    },
    {
      _id: "s5",
      categoryId: "1",
      name: "Noodle Soup",
      price: "90/130",
      variants: "Veg/Non-Veg",
    },
    {
      _id: "s6",
      categoryId: "1",
      name: "Pepper Soup",
      price: "90/130",
      variants: "Veg/Non-Veg",
    },
    {
      _id: "s7",
      categoryId: "1",
      name: "Sweet Corn",
      price: "90/130",
      variants: "Veg/Non-Veg",
    },
    { _id: "s8", categoryId: "1", name: "Cream of Mushroom", price: 100 },
    { _id: "s9", categoryId: "1", name: "Cream of Tomato", price: 100 },
    {
      _id: "s10",
      categoryId: "1",
      name: "Dragon Soup",
      price: "100/130",
      variants: "Veg/Non-Veg",
    },
    {
      _id: "s11",
      categoryId: "1",
      name: "Lemon Coriander Soup",
      price: "100/130",
      variants: "Veg/Non-Veg",
    },
    { _id: "s12", categoryId: "1", name: "Lung Fung", price: 120 },
    { _id: "s13", categoryId: "1", name: "Sea Food Soup", price: 130 },

    // SALADS
    {
      _id: "sal1",
      categoryId: "2",
      name: "Hummus",
      price: "50/130/200",
      variants: "Small/Medium/Large",
    },
    {
      _id: "sal2",
      categoryId: "2",
      name: "Thoum (Garlic Mayo)",
      price: "30/70/130",
      variants: "Small/Medium/Large",
    },
    { _id: "sal3", categoryId: "2", name: "Mixed Raitha", price: 50 },
    { _id: "sal4", categoryId: "2", name: "Plain Curd", price: 50 },
    { _id: "sal5", categoryId: "2", name: "Green Salad", price: 80 },
    { _id: "sal6", categoryId: "2", name: "Darjeeling Salad", price: 140 },
    { _id: "sal7", categoryId: "2", name: "Russian Salad", price: 140 },
    { _id: "sal8", categoryId: "2", name: "Castle Spl. Salad", price: 150 },
    { _id: "sal9", categoryId: "2", name: "Huwain Chicken Salad", price: 160 },
    { _id: "sal10", categoryId: "2", name: "Chicken Tikka Salad", price: 170 },

    // SHAWARMA
    { _id: "sh1", categoryId: "3", name: "Chicken Shawarma Roll", price: 70 },
    { _id: "sh2", categoryId: "3", name: "Egg Omlette Roll", price: 60 },
    { _id: "sh3", categoryId: "3", name: "Falafel Roll Veg", price: 60 },
    { _id: "sh4", categoryId: "3", name: "Veg Tawa Roll", price: 60 },
    { _id: "sh5", categoryId: "3", name: "Mexican Shawarma Roll", price: 90 },
    {
      _id: "sh6",
      categoryId: "3",
      name: "Chicken Shawarma Rumali Roll",
      price: 90,
    },
    {
      _id: "sh7",
      categoryId: "3",
      name: "Special Shawarma Roll (Whole Meat)",
      price: 110,
    },
    {
      _id: "sh8",
      categoryId: "3",
      name: "Chicken Cheese Shawarma Roll",
      price: 130,
    },
    {
      _id: "sh9",
      categoryId: "3",
      name: "Jumbo Shawarma Roll (Rumali)",
      price: 110,
    },
    { _id: "sh10", categoryId: "3", name: "Tawa Chicken Roll", price: 100 },
    { _id: "sh11", categoryId: "3", name: "Hummus Falafel Plate", price: 140 },
    {
      _id: "sh12",
      categoryId: "3",
      name: "Chicken Shawarma Plate",
      price: 140,
    },
    {
      _id: "sh13",
      categoryId: "3",
      name: "Mexican Shawarma Plate",
      price: 150,
    },
    {
      _id: "sh14",
      categoryId: "3",
      name: "Special Shawarma Plate (Whole Meat)",
      price: 160,
    },
    { _id: "sh15", categoryId: "3", name: "Hummus Shawarma Plate", price: 170 },

    // ARABIC SIZZLERS
    { _id: "as1", categoryId: "4", name: "Veg Sizzler", price: 250 },
    { _id: "as2", categoryId: "4", name: "Dajaj Kebab Sizzler", price: 300 },
    { _id: "as3", categoryId: "4", name: "Samak Meshwi Sizzler", price: 350 },
    { _id: "as4", categoryId: "4", name: "Laham Meshwi Sizzler", price: 400 },
    { _id: "as5", categoryId: "4", name: "Rubiyan Meshwi Sizzler", price: 400 },

    // ANDHRA STARTERS
    {
      _id: "ast1",
      categoryId: "5",
      name: "Guntur Chicken Dry (B/L)",
      price: 300,
    },
    {
      _id: "ast2",
      categoryId: "5",
      name: "Andhra Pepper Chicken Dry (B/L)",
      price: 290,
    },
    {
      _id: "ast3",
      categoryId: "5",
      name: "Butterfly Chicken (B/L)",
      price: 330,
      isChefSpecial: true,
    },
    {
      _id: "ast4",
      categoryId: "5",
      name: "Saute Chicken Dry (B/L)",
      price: 280,
    },
    { _id: "ast5", categoryId: "5", name: "Bhuna Chicken", price: 280 },
    {
      _id: "ast6",
      categoryId: "5",
      name: "Andhra Style Lemon Chicken (B/L)",
      price: 270,
    },
    { _id: "ast7", categoryId: "5", name: "Pepper Paneer Dry", price: 190 },
    { _id: "ast8", categoryId: "5", name: "Guntur Mushroom", price: 210 },
    { _id: "ast9", categoryId: "5", name: "Pepper Mushroom Dry", price: 190 },
    { _id: "ast10", categoryId: "5", name: "Saute Mushroom Dry", price: 180 },
    { _id: "ast11", categoryId: "5", name: "Saute Gobi Dry", price: 170 },

    // CASTLE SPECIAL PLATTER
    { _id: "csp1", categoryId: "6", name: "Roti Basket", price: 349 },
    {
      _id: "csp2",
      categoryId: "6",
      name: "Castle Spl Chicken Masala",
      price: 360,
    },
    { _id: "csp3", categoryId: "6", name: "Tandoori Veg Platter", price: 699 },
    { _id: "csp4", categoryId: "6", name: "Dajaj Tikki Platter", price: 799 },
    {
      _id: "csp5",
      categoryId: "6",
      name: "Tawa Mushakkal Mini Platter",
      price: 899,
    },
    { _id: "csp6", categoryId: "6", name: "Barbeque Mini Platter", price: 899 },
    {
      _id: "csp7",
      categoryId: "6",
      name: "Chinese Non Veg Platter",
      price: 999,
    },
    {
      _id: "csp8",
      categoryId: "6",
      name: "Arabian Mini Sea Food Special Platter",
      price: 1099,
    },
    {
      _id: "csp9",
      categoryId: "6",
      name: "Tandoori Non Veg Platter",
      price: 1199,
    },
    {
      _id: "csp10",
      categoryId: "6",
      name: "Castle Spl Family Biriyani Combo",
      price: 1249,
    },
    {
      _id: "csp11",
      categoryId: "6",
      name: "Barbeque Family Platter",
      price: 1499,
    },
    {
      _id: "csp12",
      categoryId: "6",
      name: "Tawa Mushakkal Platter",
      price: 1599,
      isChefSpecial: true,
    },
    {
      _id: "csp13",
      categoryId: "6",
      name: "Arabian Sea Food Special Platter",
      price: 1799,
    },

    // INDIAN STARTERS
    {
      _id: "is1",
      categoryId: "7",
      name: "Chicken Kebab 12/6",
      price: "330/170",
    },
    { _id: "is2", categoryId: "7", name: "Boild Egg", price: 40 },
    { _id: "is3", categoryId: "7", name: "Egg Omlette", price: 60 },
    { _id: "is4", categoryId: "7", name: "Egg Bhurji", price: 70 },
    { _id: "is5", categoryId: "7", name: "Egg Pepper Fry", price: 100 },
    { _id: "is6", categoryId: "7", name: "Egg Roast", price: 110 },
    { _id: "is7", categoryId: "7", name: "Egg Chilly Dry", price: 120 },
    { _id: "is8", categoryId: "7", name: "Chicken Pepper Fry", price: 260 },
    { _id: "is9", categoryId: "7", name: "Mutton Pepper Fry", price: 380 },
    { _id: "is10", categoryId: "7", name: "Chicken 65", price: "350/190" },

    // GRILLS & BARBEQUES
    { _id: "gb1", categoryId: "8", name: "Fish Barbeque", price: 340 },
    { _id: "gb2", categoryId: "8", name: "Grilled Chicken", price: "400/200" },
    {
      _id: "gb3",
      categoryId: "8",
      name: "Masala Shaway",
      price: "460/240/125",
    },
    {
      _id: "gb4",
      categoryId: "8",
      name: "Green Chilly Shaway",
      price: "480/250/130",
    },
    {
      _id: "gb14",
      categoryId: "8",
      name: "Green Chilly BBQ Chicken",
      price: "480/250/130",
    },
    {
      _id: "gb15",
      categoryId: "8",
      name: "Badami BBQ Chicken",
      price: "480/260/140",
    },
    {
      _id: "gb16",
      categoryId: "8",
      name: "Castle Spl Barbeque Chicken",
      price: "480/240/140",
      isChefSpecial: true,
    },
    {
      _id: "gb17",
      categoryId: "8",
      name: "Peri Peri Barbeque Chicken",
      price: "490/260/140",
    },
    {
      _id: "gb18",
      categoryId: "8",
      name: "Morocan BBQ Chicken",
      price: "500/270/140",
      isChefSpecial: true,
    },
    { _id: "gb19", categoryId: "8", name: "Mutton Chops", price: 499 },
    {
      _id: "gb20",
      categoryId: "8",
      name: "Barbeque Pomfret",
      price: "AS PER SIZE",
    },
    {
      _id: "gb21",
      categoryId: "8",
      name: "Barbeque King Fish",
      price: "AS PER SIZE",
    },
    { _id: "gb22", categoryId: "8", name: "Barbeque Tiger Prawns", price: 450 },

    // TANDOORI HUT NONVEG
    { _id: "th1", categoryId: "9", name: "Chicken Tikka", price: 290 },
    { _id: "th2", categoryId: "9", name: "Hariyali Kebab", price: 290 },
    { _id: "th3", categoryId: "9", name: "Tangadi Kebab (2PC)", price: 300 },
    { _id: "th4", categoryId: "9", name: "Lasooni Kebab", price: 300 },
    { _id: "th5", categoryId: "9", name: "Chicken Achari Tikka", price: 310 },
    { _id: "th6", categoryId: "9", name: "Malai Kebab", price: 320 },
    { _id: "th7", categoryId: "9", name: "Reshmi Kebab", price: 320 },
    { _id: "th8", categoryId: "9", name: "Chicken Sheek Kebab", price: 330 },
    { _id: "th9", categoryId: "9", name: "Mutton Sheek Kebab", price: 420 },
    { _id: "th10", categoryId: "9", name: "Mutton Tikka", price: 420 },
    {
      _id: "th11",
      categoryId: "9",
      name: "Tandoori Chicken",
      price: "380/190",
      variants: "Full/Half",
    },

    // TANDOORI HUT SEA FOOD
    { _id: "ths1", categoryId: "10", name: "Fish Tikka", price: 340 },
    { _id: "ths2", categoryId: "10", name: "Fish Ajwaini Tikka", price: 350 },
    {
      _id: "ths3",
      categoryId: "10",
      name: "Tandoori Pomfret",
      price: "AS PER SIZE",
    },
    { _id: "ths4", categoryId: "10", name: "Tandoori Prawns", price: 400 },

    // TANDOORI HUT VEG
    { _id: "thv1", categoryId: "11", name: "Tandoori Aloo", price: 150 },
    { _id: "thv2", categoryId: "11", name: "Tandoori Baby Corn", price: 160 },
    { _id: "thv3", categoryId: "11", name: "Tandoori Mushroom", price: 180 },
    { _id: "thv4", categoryId: "11", name: "Veg Sheek Kebab", price: 180 },
    { _id: "thv5", categoryId: "11", name: "Hara Bara Kebab", price: 180 },
    { _id: "thv6", categoryId: "11", name: "Paneer Tikka", price: 240 },
    { _id: "thv7", categoryId: "11", name: "Paneer Achari Tikka", price: 240 },
    { _id: "thv8", categoryId: "11", name: "Panner Malai Tikka", price: 250 },

    // ARABIAN TAWA NONVEG
    { _id: "atn1", categoryId: "12", name: "Dajaj Faa", price: 340 },
    {
      _id: "atn2",
      categoryId: "12",
      name: "Clope Meshwi",
      price: 340,
      isChefSpecial: true,
    },
    { _id: "atn3", categoryId: "12", name: "Mexican Dajaj Meshwi", price: 340 },
    { _id: "atn4", categoryId: "12", name: "Dajaj Honey Kebab", price: 360 },
    {
      _id: "atn5",
      categoryId: "12",
      name: "Green Chilli Kebab",
      price: 360,
      isChefSpecial: true,
    },
    {
      _id: "atn6",
      categoryId: "12",
      name: "Iffa Dajaj",
      price: 360,
      isChefSpecial: true,
    },
    {
      _id: "atn7",
      categoryId: "12",
      name: "Lebanese Dajaj Meshwi",
      price: 380,
    },
    { _id: "atn8", categoryId: "12", name: "Hummus Bell Dajaj", price: 380 },
    { _id: "atn9", categoryId: "12", name: "Dajaj Meshwi", price: 380 },
    { _id: "atn10", categoryId: "12", name: "Bell Dajaj", price: 380 },
    { _id: "atn11", categoryId: "12", name: "Laham Meshwi", price: 420 },
    { _id: "atn12", categoryId: "12", name: "Laham Irani Tikka", price: 450 },
    { _id: "atn13", categoryId: "12", name: "Laham Kebab", price: 490 },

    // ARABIAN TAWA SEA FOOD
    { _id: "ats1", categoryId: "13", name: "Samak Meshwi", price: 300 },
    { _id: "ats2", categoryId: "13", name: "Tawa Fish", price: 340 },
    { _id: "ats3", categoryId: "13", name: "Squid Tawa Fry", price: 400 },
    { _id: "ats4", categoryId: "13", name: "Rubiyan Meshwi", price: 450 },
    { _id: "ats5", categoryId: "13", name: "Rubiyan Faa", price: 470 },
    { _id: "ats6", categoryId: "13", name: "Tawa Rubiyan", price: 470 },
    { _id: "ats7", categoryId: "13", name: "Rainbow Rubiyan", price: 480 },
    {
      _id: "ats8",
      categoryId: "13",
      name: "Stuffed Tawa Prawns",
      price: 700,
      isChefSpecial: true,
    },

    // ARABIAN TAWA VEG
    { _id: "atv1", categoryId: "14", name: "Grilleg Mushroom", price: 260 },
    { _id: "atv2", categoryId: "14", name: "Grilled Mix Veg", price: 260 },
    { _id: "atv3", categoryId: "14", name: "Grilled Paneer", price: 280 },

    // MANDI & ARABIC RICE
    {
      _id: "mar1",
      categoryId: "15",
      name: "Chicken Mandi",
      price: "740/380/200",
    },
    { _id: "mar2", categoryId: "15", name: "Mandi Rice", price: 100 },
    { _id: "mar3", categoryId: "15", name: "Kozi Rice", price: 100 },
    {
      _id: "mar4",
      categoryId: "15",
      name: "Arabic Shawaya Mandi",
      price: "780/400/200",
    },
    {
      _id: "mar5",
      categoryId: "15",
      name: "Green Chilly Shaway Mandi",
      price: "800/420/220",
    },
    {
      _id: "mar6",
      categoryId: "15",
      name: "Mutton Mandi",
      price: "1300/660/340",
    },

    // INDIAN BIRIYANI & RICE
    {
      _id: "ibr1",
      categoryId: "16",
      name: "Hyderabadi Family Chicken Biriyani",
      price: "370/560/750",
    },
    {
      _id: "ibr2",
      categoryId: "16",
      name: "Malabar Family Chicken Biriyani",
      price: "330/500/670",
    },
    {
      _id: "ibr3",
      categoryId: "16",
      name: "Hyderabadi Family Mutton Biriyani",
      price: "550/830/1100",
    },
    {
      _id: "ibr4",
      categoryId: "16",
      name: "Malabar Family Mutton Biriyani",
      price: "530/800/1050",
    },

    // CHINESE NON VEG
    {
      _id: "cnv1",
      categoryId: "17",
      name: "Chicken Manchurian",
      price: "220/240",
      variants: "Dry/Gravy",
    },
    {
      _id: "cnv2",
      categoryId: "17",
      name: "Chilly Chicken",
      price: "220/240",
      variants: "Dry/Gravy",
    },
    {
      _id: "cnv3",
      categoryId: "17",
      name: "Ginger Chicken",
      price: "220/240",
      variants: "Dry/Gravy",
    },
    {
      _id: "cnv4",
      categoryId: "17",
      name: "Garlic Chicken",
      price: "220/240",
      variants: "Dry/Gravy",
    },
    {
      _id: "cnv5",
      categoryId: "17",
      name: "Lemon Chicken",
      price: "220/240",
      variants: "Dry/Gravy",
    },
    {
      _id: "cnv6",
      categoryId: "17",
      name: "Schezwan Chicken",
      price: "220/240",
      variants: "Dry/Gravy",
    },
    { _id: "cnv7", categoryId: "17", name: "Pepper Chicken", price: 250 },
    { _id: "cnv8", categoryId: "17", name: "Dragon Chicken", price: 250 },
    { _id: "cnv9", categoryId: "17", name: "Chicken Lollipop", price: 250 },
    { _id: "cnv10", categoryId: "17", name: "Drums of Heaven", price: 250 },
    { _id: "cnv11", categoryId: "17", name: "Crispy Chicken", price: 250 },
    {
      _id: "cnv12",
      categoryId: "17",
      name: "Thai Chicken",
      price: 270,
      isChefSpecial: true,
    },
    {
      _id: "cnv13",
      categoryId: "17",
      name: "Spanish Chicken",
      price: 270,
      isChefSpecial: true,
    },
    {
      _id: "cnv14",
      categoryId: "17",
      name: "Peri Peri Chicken",
      price: 280,
      isChefSpecial: true,
    },
    {
      _id: "cnv15",
      categoryId: "17",
      name: "Lamb in Oyster Sauce",
      price: 320,
    },
    {
      _id: "cnv16",
      categoryId: "17",
      name: "Lamb in Butter Garlic",
      price: 340,
    },

    // SEA FOOD CHINESE
    {
      _id: "sfc1",
      categoryId: "18",
      name: "Fish Manchurian",
      price: "260/270",
      variants: "Dry/Gravy",
    },
    {
      _id: "sfc2",
      categoryId: "18",
      name: "Fish Chilly",
      price: "260/270",
      variants: "Dry/Gravy",
    },
    {
      _id: "sfc3",
      categoryId: "18",
      name: "Prawn Manchurian",
      price: "280/290",
      variants: "Dry/Gravy",
    },
    {
      _id: "sfc4",
      categoryId: "18",
      name: "Prawn Chilly",
      price: "280/290",
      variants: "Dry/Gravy",
    },
    {
      _id: "sfc5",
      categoryId: "18",
      name: "Prawn in Butter Garlic",
      price: 300,
    },
    { _id: "sfc6", categoryId: "18", name: "Fish Finger", price: 300 },
    { _id: "sfc7", categoryId: "18", name: "Golden Fried Prawn", price: 320 },
    {
      _id: "sfc8",
      categoryId: "18",
      name: "Singapore Chilly Crab",
      price: 320,
      isChefSpecial: true,
    },
    {
      _id: "sfc9",
      categoryId: "18",
      name: "Singapore Chilly Tiger Prawn",
      price: 420,
      isChefSpecial: true,
    },

    // VEG CHINESE
    { _id: "vc1", categoryId: "19", name: "French Fries", price: 110 },
    { _id: "vc2", categoryId: "19", name: "Dragon Potato", price: 130 },
    {
      _id: "vc3",
      categoryId: "19",
      name: "Mushroom Manchurian",
      price: "130/150",
      variants: "Dry/Gravy",
    },
    {
      _id: "vc4",
      categoryId: "19",
      name: "Mushroom Chilly",
      price: "130/150",
      variants: "Dry/Gravy",
    },
    {
      _id: "vc5",
      categoryId: "19",
      name: "Baby Corn Manchurian",
      price: "130/150",
      variants: "Dry/Gravy",
    },

    // BREADS
    { _id: "br1", categoryId: "20", name: "Kuboos", price: 10 },
    { _id: "br2", categoryId: "20", name: "Special Kuboos", price: 12 },
    { _id: "br3", categoryId: "20", name: "Tandoori Roti", price: 20 },
    { _id: "br4", categoryId: "20", name: "Chapathi", price: 15 },
    { _id: "br5", categoryId: "20", name: "Kerala Paratha", price: 20 },
    { _id: "br6", categoryId: "20", name: "Madduk Chapathi", price: 20 },
    { _id: "br7", categoryId: "20", name: "Butter Roti", price: 25 },
    { _id: "br8", categoryId: "20", name: "Kulcha", price: 25 },
    { _id: "br9", categoryId: "20", name: "Wheat Paratha", price: 25 },
    { _id: "br10", categoryId: "20", name: "Naan", price: 30 },
    { _id: "br11", categoryId: "20", name: "Butter Naan", price: 40 },
    { _id: "br12", categoryId: "20", name: "Garlic Naan", price: 40 },
    { _id: "br13", categoryId: "20", name: "Lacha Paratha", price: 40 },
    { _id: "br14", categoryId: "20", name: "Butter Kulcha", price: 40 },
    { _id: "br15", categoryId: "20", name: "Aloo Paratha", price: 40 },
    { _id: "br16", categoryId: "20", name: "Butter Garlic Naan", price: 50 },
    { _id: "br17", categoryId: "20", name: "Masala Kulcha", price: 50 },
    {
      _id: "br18",
      categoryId: "20",
      name: "Stuffed Paratha (Aloo/Gobi/Paneer)",
      price: 50,
    },
    { _id: "br19", categoryId: "20", name: "Kashmiri Naan", price: 60 },

    // INDIAN CURRYS VEG
    { _id: "icv1", categoryId: "21", name: "Veg Kadai", price: 160 },
    {
      _id: "icv2",
      categoryId: "21",
      name: "Veg Kolapuri",
      price: "100/150",
      variants: "Half/Full",
    },
    {
      _id: "icv3",
      categoryId: "21",
      name: "Green Peas Masala",
      price: "100/150",
      variants: "Half/Full",
    },
    {
      _id: "icv4",
      categoryId: "21",
      name: "Mixed Veg Curry",
      price: "100/150",
      variants: "Half/Full",
    },
    {
      _id: "icv5",
      categoryId: "21",
      name: "Mushroom Masala",
      price: "110/160",
      variants: "Half/Full",
    },
    { _id: "icv6", categoryId: "21", name: "Dal Fry", price: 110 },
    { _id: "icv7", categoryId: "21", name: "Dal Tadka", price: 110 },
    { _id: "icv8", categoryId: "21", name: "Dal Palak", price: 120 },
    { _id: "icv9", categoryId: "21", name: "Palak Paneer", price: 190 },
    { _id: "icv10", categoryId: "21", name: "Aloo Gobi", price: 130 },
    { _id: "icv11", categoryId: "21", name: "Bhindi Fry", price: 130 },
    {
      _id: "icv12",
      categoryId: "21",
      name: "Paneer Butter Masala",
      price: "140/200",
      variants: "Half/Full",
    },
    {
      _id: "icv13",
      categoryId: "21",
      name: "Paneer Tikka Masala",
      price: "140/200",
      variants: "Half/Full",
    },
    { _id: "icv14", categoryId: "21", name: "Kadai Paneer", price: 200 },
    { _id: "icv15", categoryId: "21", name: "Malai Kofta", price: 170 },
    {
      _id: "icv16",
      categoryId: "21",
      name: "Paneer Kurchan",
      price: 200,
      isChefSpecial: true,
    },

    // FRESH JUICES
    { _id: "fj1", categoryId: "22", name: "Fresh Lime Juice", price: 30 },
    { _id: "fj2", categoryId: "22", name: "Fresh Lime Soda", price: 40 },
    { _id: "fj3", categoryId: "22", name: "Lime Mint Cooler", price: 50 },

    // MILKSHAKES & MOJITO
    {
      _id: "mm1",
      categoryId: "23",
      name: "Milkshakes Varieties",
      price: "89-129",
      description: "Various flavors available",
    },
    {
      _id: "mm2",
      categoryId: "23",
      name: "Mojito Varieties",
      price: "130-150",
      description: "Various flavors available",
    },

    // FALOODA & ICE CREAMS
    {
      _id: "fi1",
      categoryId: "24",
      name: "Falooda Varieties",
      price: "100-250",
      description: "Various flavors available",
    },
    {
      _id: "fi2",
      categoryId: "24",
      name: "Ice Cream Varieties",
      price: "80-120",
      description: "Various flavors available",
    },

    // FRUIT WITH CREAM
    { _id: "fc1", categoryId: "25", name: "Strawberry Cream", price: 180 },
    { _id: "fc2", categoryId: "25", name: "Mixed Fruit Cream", price: 200 },
    { _id: "fc3", categoryId: "25", name: "Apple Cream", price: 200 },
    {
      _id: "fc4",
      categoryId: "25",
      name: "Dry Fruit Cream",
      price: 240,
      isChefSpecial: true,
    },
    { _id: "fc5", categoryId: "25", name: "Avacado Cream", price: 240 },
  ],
};



const MenuItem = ({ item }) => {  
  
  const handleWhatsAppClick = (name) => {
  const message = `I would like to try out ${name}`;
  const whatsappUrl = `https://wa.me/+91${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};
return(
  <motion.div 
    whileHover={{ scale: 1.03 }}
    className="min-w-[280px] md:min-w-[320px] bg-white/10 backdrop-blur rounded-xl p-4 md:p-5 flex-shrink-0 
               hover:bg-[rgb(24,112,91)]/30 transition-all border border-amber-100/20 
               shadow-lg hover:shadow-[rgb(24,112,91)]/30"
  >
    <div className="flex justify-between items-start mb-3" onClick={()=>handleWhatsAppClick(item.name)}>
      <div className="flex-1">
        <h3 className="text-lg md:text-xl font-bold text-amber-50 leading-tight">
          {item.name}
        </h3>
        {item.variants && (
          <div className="mt-2">
            <span className="text-xs font-medium text-white bg-amber-800/40
                       px-3 py-1 rounded-full">
              {item.variants}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col items-end">
        <p className="text-base md:text-lg font-bold text-amber-50 bg-[rgb(24,112,91)]/20 
                    px-3 py-1 rounded-lg whitespace-nowrap">
          ₹{item.price}
        </p>
      </div>
    </div>
    
    {item.description && (
      <p className="text-xs md:text-sm text-amber-50/90 mt-2 leading-relaxed">
        {item.description}
      </p>
    )}
    
    {item.isChefSpecial && (
      <div className="mt-3 flex items-center">
        <span className="inline-flex items-center gap-1.5 bg-gradient-to-r 
                       from-amber-700 to-amber-600 text-amber-50 text-xs 
                       px-3 py-1.5 rounded-full shadow-md">
          <Star className="w-3.5 h-3.5 text-amber-300" />
          Chef's Special
        </span>
      </div>
    )}
  </motion.div>
)
};

const CategorySection = ({ category, items }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -320 : 320;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12 md:mb-16"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 px-4 md:px-6 mb-6 md:mb-8 sticky top-0 
                    bg-gradient-to-r from-[rgb(14,72,61)]/95 to-[rgb(24,112,91)]/95 backdrop-blur 
                    py-4 md:py-5 z-10 border-b border-amber-100/20 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-amber-50">{category.name}</h2>
        {category.description && (
          <span className="text-xs md:text-sm text-amber-50/90 bg-amber-800/30 px-3 md:px-4 py-1 md:py-2 
                        rounded-full shadow-md border border-amber-700/30 whitespace-nowrap">
            {category.description}
          </span>
        )}
      </div>
      
      <div className="relative group">
        <button
          onClick={() => scroll("left")}
          className="absolute -left-2 md:-left-3 top-1/2 -translate-y-1/2 z-10 
                    bg-amber-800/80 hover:bg-amber-700 p-2 md:p-3 rounded-full 
                    opacity-0 group-hover:opacity-100 transition-all 
                    shadow-lg border border-amber-600/30"
          aria-label="Scroll left"
        >
          <ChevronLeft className="text-amber-50 w-5 h-5 md:w-6 md:h-6" />
        </button>
        
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide px-4 md:px-6 py-2 md:py-3 
                    scroll-smooth gap-4 md:gap-6 pb-2 md:pb-4"
        >
          {items.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
        
        <button
          onClick={() => scroll("right")}
          className="absolute -right-2 md:-right-3 top-1/2 -translate-y-1/2 z-10 
                   bg-amber-800/80 hover:bg-amber-700 p-2 md:p-3 rounded-full 
                   opacity-0 group-hover:opacity-100 transition-all 
                   shadow-lg border border-amber-600/30"
          aria-label="Scroll right"
        >
          <ChevronRight className="text-amber-50 w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </motion.div>
  );
};

// Add a simple navigation component for menu categories
const MenuNav = ({ categories, activeCategory, setActiveCategory }) => {
  const navRef = useRef(null);
  
  const scrollToCategory = (categoryId) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="bg-[rgb(14,72,61)]/90 backdrop-blur sticky top-0 z-20 border-b border-amber-700/30 shadow-lg overflow-x-auto scrollbar-hide">
      <div ref={navRef} className="flex items-center gap-2 px-4 py-3 md:py-4 md:container md:mx-auto">
        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() => scrollToCategory(category._id)}
            className={`whitespace-nowrap text-xs md:text-sm px-3 md:px-4 py-2 rounded-full transition-all ${
              activeCategory === category._id
                ? "bg-amber-700 text-amber-50 shadow-md"
                : "bg-[rgb(24,112,91)]/30 text-amber-50/80 hover:bg-[rgb(24,112,91)]/50"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = React.useState(menuData.categories[0]?._id);
    
  const handleWhatsAppClick = () => {
    const message = `I would like to order form your restaurant`;
    const whatsappUrl = `https://wa.me/+91${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-[rgb(14,72,61)] via-[rgb(24,112,91)] to-[rgb(14,72,61)] text-amber-50">
      {/* Your Header Component Goes Here */}
      <Header/>
      
      {/* Hero Section */}
      <div className="bg-[url('/hero-bg.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(14,72,61)]/90 to-[rgb(24,112,91)]/70"></div>
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-amber-50 mb-4 md:mb-6 leading-tight">
              Castle Restaurant Menu
            </h1>
            <p className="text-lg md:text-xl text-amber-50/90 mb-6 md:mb-8 leading-relaxed max-w-2xl">
              Discover our wide range of delicious dishes, from traditional
              favorites to chef's special creations.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <span className="inline-flex items-center gap-2 bg-amber-800/40 text-amber-50 
                             px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg text-sm md:text-base border border-amber-700/30">
                <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-amber-300" />
                Multiple Cuisines
              </span>
              <span className="inline-flex items-center gap-2 bg-amber-800/40 text-amber-50 
                             px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg text-sm md:text-base border border-amber-700/30">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-amber-300" />
                Dine-in & Takeaway
              </span>
              <span className="inline-flex items-center gap-2 bg-amber-800/40 text-amber-50 
                             px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg text-sm md:text-base border border-amber-700/30">
                <Car className="w-4 h-4 md:w-5 md:h-5 text-amber-300" />
                Car Parking Available
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Navigation */}
      <MenuNav 
        categories={menuData.categories} 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Categories */}
      <div className="container mx-auto py-8 md:py-12">
        {menuData.categories.map((category) => {
          const categoryItems = menuData.items.filter(
            (item) => item.categoryId === category._id
          );
          if (categoryItems.length === 0) return null;
          return (
            <div id={`category-${category._id}`} key={category._id}>
              <CategorySection
                category={category}
                items={categoryItems}
              />
            </div>
          );
        })}
      </div>
      
      {/* Call to Action */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-amber-800/30 to-[rgb(24,112,91)]/40 rounded-2xl p-6 md:p-10 text-center border border-amber-700/20 shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-amber-50 mb-4">Ready to Order?</h2>
          <p className="text-sm md:text-base text-amber-50/90 mb-6 max-w-2xl mx-auto">
            Call us or visit our restaurant to enjoy these delicious dishes.
            We also offer takeaway and home delivery services.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button
                 onClick={()=>{
                  window.location.href = `tel:+91${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`;
              }}
            className="px-6 md:px-8 py-3 md:py-4 bg-[rgb(24,112,91)] hover:bg-[rgb(24,112,91)]/80 text-amber-50 rounded-full text-sm md:text-base font-medium transition-all shadow-lg">
              Call Now
            </button>
            <button
             onClick={handleWhatsAppClick}
             className="px-6 md:px-8 py-3 md:py-4 bg-amber-700 hover:bg-amber-700/90 text-amber-50 rounded-full text-sm md:text-base font-medium transition-all shadow-lg">
              Order Online
            </button>
          </div>
        </motion.div>
      </div>
      
        <Footer/>
    </div>
  );
}