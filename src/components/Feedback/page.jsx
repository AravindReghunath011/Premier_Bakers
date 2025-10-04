import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import img from "../../../public/default-avatar.svg";

const reviews = [
  {
    id: 1,
    username: "Aby Avirachan",
    rating: 5,
    message:
      "Premier Bakers Food Court in Ramapuram is a great place for fresh snacks and bakery items. We had fresh lime and pineapple juice—both were really good and refreshing. The snacks like vada, puffs, and cutlets were also tasty and freshly prepared. The bakery offers a wide variety of items, and everything we tried was of good quality. The place is clean, the service is quick, and the staff are polite. A reliable spot for a quick bite or to pick up fresh baked goods. Highly recommended if you’re in the area!",
    link: "https://share.google/mcwfOczo2CXb1r9nW",
    date: "a month ago",
    imageUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjW1u2-wmRw0WE4tbX9hhzv6CCbDpON-nxyGugCZxXkTvKb1enXFAg=w90-h90-p-rp-mo-ba5-br100",
  },
  {
    id: 2,
    username: "Greshma Clement",
    rating: 5,
    message:
      "Great place to have evening snacks. I had tea and egg roll from here. And those were really delicious. The coustomer dealings of this bakery are good and the entire ambience of the shop is perfect for a relaxed mini dining. Good job!",
    link: "https://share.google/z0SF9taBt7oxWwOLM",
    date: "1 month ago",
    imageUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjWBfeZwkYcu2xxMHJu66jMtyngdlHGioaxRjKeOW4Cjni34GBTUsg=w90-h90-p-rp-mo-ba6-br100",
  },
  {
    id: 3,
    username: "Manu KR",
    rating: 5,
    message:
      `Fairly well maintained bakey with multiple options in terms of items in snacks and sweets.
Good seating available for an evening bite with some snacks and a coffee, juice etc
Also offers some dine in items like shawarma, alfahm etc on selective days
Have tried the shawarma, like it 3/5.
Gives u a fairly premium feel as the name goes`,
    link: "https://share.google/kWjDg16O3ytoCiWCw",
    date: "3 months ago",
    imageUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjWCfsgG1SK6mKg66mdsaTnBJsO9NGBIexxrWPSI-NX941M_OKCy=w90-h90-p-rp-mo-ba4-br100",
  },
  // {
  //   id: 4,
  //   username: "Crystal Snow",
  //   rating: 5,
  //   message:
  //     "One of the nice restuarants I've visited. The ambience as well as the staff behavior was good😊 We ordered Corn ginger and garlic, Mushroom manchurian, Paneer Tikka masala, Naan, Laccha paratha and Veg schezwan fried rice. All of them were delicious except Laccha paratha, which was much oily. Overall good experience😎would visit again!",
  //   link: "https://maps.app.goo.gl/N5zw1Z4nHPTHHAG17",
  //   date: "6 months ago",
  //   imageUrl:
  //     "https://lh3.googleusercontent.com/a-/ALV-UjVas9uRf71SCqnb9ig9irjY0x-5vmd_RD3hycODhFk_w9-y1jqLuw=w72-h72-p-rp-mo-ba5-br100",
  // },
  // {
  //   id: 5,
  //   username: "Ann Das",
  //   rating: 5,
  //   message:
  //     "5/5 Stars I had the pleasure of lunch at Castle Restaurant today, and I must say, it was an exceptional experience! The dish I ordered, was cooked to perfection and presented beautifully The flavors were outstanding, and the portion size was generous But what truly made my experience stand out was the exceptional service provided by Manager Charlie… He was attentive, friendly, and made sure that every guest felt welcome and valued His professionalism and kindness are a testament to the high standards of this restaurant…",
  //   link: "https://maps.app.goo.gl/GmXr6hGmRWyphjUJ7",
  //   date: "a month ago",
  //   imageUrl:
  //     "https://lh3.googleusercontent.com/a/ACg8ocIN3h9M_a4UhXRmz5A0D_-zvHNqKnybAmi48GYNQuRovGebRw=w72-h72-p-rp-mo-br100",
  // },
  // {
  //   id: 6,
  //   username: "Nilesh Qfie ",
  //   rating: 5,
  //   message:
  //     "I have been visiting this fantastic hotel in BTM Layout, Bangalore, for the past year, and it has never failed to impress me. The food here is consistently delightful, offering a perfect blend of taste and quality. The staff is well-trained and always ensures a pleasant dining experience. ",
  //   link: "https://maps.app.goo.gl/Si59zsbZDxkccGCm9",
  //   date: "2 months ago",
  //   imageUrl:
  //     "https://lh3.googleusercontent.com/a-/ALV-UjU8b44QKzrLXO0smj4Cr4P5IfOhfdHNRkcVnthZzRJyY2FbUwAg=w72-h72-p-rp-mo-br100",
  // },
];

const ReviewCard = ({ review }) => {
  const stars = Array(5).fill(0);

  return (
    <motion.a
      href={review.link}
      target="_blank"
      className="bg-white rounded-lg shadow-lg p-6 mb-6 min-w-[300px] md:min-w-[350px] block"
      whileHover={{
        y: -10,
        transition: { duration: 0.2 },
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
            <img
              src={review.imageUrl}
              alt="/default-avatar.svg"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "/default-avatar.svg";
                e.target.onerror = null;
              }}
            />
          </div>
          <div className="ml-3">
            <h3 className="font-semibold text-gray-800">{review.username}</h3>
            <motion.div
              className="flex items-center"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {stars.map((_, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                >
                  <Star
                    size={16}
                    className={`${
                      index < review.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 mb-2"
      >
        {review.message}
      </motion.p>
      <span className="text-sm text-gray-400">{review.date}</span>
    </motion.a>
  );
};

const ReviewSection = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });
  const [scrollX, setScrollX] = React.useState(0);
  const [maxScroll, setMaxScroll] = React.useState(0);

  React.useEffect(() => {
    if (containerRef.current) {
      setMaxScroll(
        containerRef.current.scrollWidth - containerRef.current.clientWidth
      );
    }
  }, []);

  const scroll = (direction) => {
    if (containerRef.current) {
      const newScrollX =
        direction === "left"
          ? Math.max(scrollX - 400, 0)
          : Math.min(scrollX + 400, maxScroll);

      containerRef.current.scrollTo({
        left: newScrollX,
        behavior: "smooth",
      });
      setScrollX(newScrollX);
    }
  };

  return (
    <div className="py-16 px-4 bg-gray-50 overflow-hidden">
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12 relative"
      >
        <h2 className="text-4xl font-bold text-[#C44347] mb-4">
          What Our Guests Say
        </h2>
        <p className="text-gray-600 text-lg">
          Read reviews from our valued customers
        </p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll("left")}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg ${
            scrollX === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
          disabled={scrollX === 0}
        >
          <ChevronLeft size={24} className="text-[#024548]" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll("right")}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg ${
            scrollX >= maxScroll
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100"
          }`}
          disabled={scrollX >= maxScroll}
        >
          <ChevronRight size={24} className="text-[#024548]" />
        </motion.button>

        <motion.div
          ref={containerRef}
          className="overflow-x-scroll scrollbar-hide flex gap-6 px-12"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </motion.div>
        <div className="flex justify-center my-5">
          <Link
            href={
              "https://www.google.com/maps/place/Castle+Multi+Cuisine+Restaurant/@12.9226241,77.6118294,17z/data=!4m8!3m7!1s0x3bae15b65bce4843:0x5c372af0696e6537!8m2!3d12.9226241!4d77.6144043!9m1!1b1!16s%2Fg%2F11t6lhd7kf?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
            }
          >
            <button className="group inline-flex items-center gap-2 bg-[#C44347] text-white px-6 py-3 rounded-full hover:bg-[#C92127] transition-colors">
              Give Your Feedback
              <ArrowUpRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
