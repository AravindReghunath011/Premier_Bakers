import React from 'react';
import { Instagram, Heart, MessageCircle, Share2 } from 'lucide-react';

const SocialMediaShowcase = () => {
  const posts = [
    // {
    //   id: 1,
    //   image: 'p1.png',
    //   likes: '1.2K',
    //   comments: '84',
    //   shares: '32',
    //   caption: 'Experience a taste of royalty with every bite of this signature Castle Hyderabadi dum chicken biriyani. 🍖✨',
    //   href: "https://www.instagram.com/castlerestaurant.blr/p/DCRGPV8Phds/?hl=en"
    // },
    {
      id: 2,
      image: '/posts/post1.heic',
      likes: '956',
      comments: '67',
      shares: '28',
      caption: 'Crispy 🍟, cheesy 🧀, and full of flavor our signature Loaded Fries only at Premier Bakers.',
      href:"https://www.instagram.com/p/DFDPAIvPnmu/?img_index=1"
    },
    {
      id: 3,
      image: '/posts/post2.heic',
      likes: '845',
      comments: '45',
      shares: '19',
      caption: 'Soft, spicy, and straight from the steamer 🥟 dive into the flavor of our signature Momos at Premier Bakers.',
      href:"https://www.instagram.com/p/DCwMO8LPAKQ/",
    },
    {
      id: 4,
      image: '/posts/post3.heic',
      likes: '1.5K',
      comments: '92',
      shares: '45',
      caption: 'Sweet, soft, and utterly irresistible 🎂 celebrate every moment with our delicious cakes from Premier Bakers.',
      href:"https://www.instagram.com/p/DAvT6OoSyns/?img_index=1",
    },
    {
      id: 5,
      image: '/posts/post4.heic',
      likes: '1.5K',
      comments: '92',
      shares: '45',
      caption: 'Fragrant, flavorful, and perfectly spiced 🍛  savor every bite of our signature Biryani at Premier Bakers',
      href:"https://www.instagram.com/p/DFFAO7Kv_Ks/?img_index=1",
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#C92127] mb-4">Follow Us on Instagram</h2>
          <div className="w-24 h-1 bg-[#C92127] mx-auto mb-6"></div>
          <p className="text-gray-600">@premier_bakers_</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <a href={post.href} key={post.id}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer">
              <div className="relative">
                <img 
                  src={post.image}
                  alt="Social Media Post"
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center space-x-6 text-white">
                    <div className="flex items-center">
                      <Heart className="w-6 h-6 mr-2" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-6 h-6 mr-2" />
                      <span>{post.comments}</span>
                    </div>
                    <div className="flex items-center">
                      <Share2 className="w-6 h-6 mr-2" />
                      <span>{post.shares}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-sm">{post.caption}</p>
              </div>
            </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/premier_bakers_/"
            target="_blank"
            className="inline-flex items-center space-x-2 text-[#C44347] hover:text-[#C92127] font-medium"
          >
            <Instagram className="w-5 h-5" />
            <span>View More on Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaShowcase;