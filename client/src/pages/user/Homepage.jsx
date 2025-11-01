import React from 'react'
import { ShoppingBag, Smartphone, Laptop, Headphones } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate=useNavigate()
  return (
    <section className="hero bg-gradient-to-b from-white to-gray-100 dark:from-zinc-900 dark:to-black min-h-screen flex items-center">
      <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between px-6 md:px-12 lg:px-20">

        {/* Right side: Image / Illustration */}
        <img
          src="https://aniportalimages.s3.amazonaws.com/media/details/unnamedfsgsd211215112552das20211215121432.jpg"
          alt="myG gadgets"
          className="max-w-sm w-full rounded-2xl shadow-2xl bg-white p-4"
        />

        {/* Left side: Text content */}
        <div className="max-w-lg">
          <h1 className="text-5xl font-extrabold">
            <span className="text-orange-500">my</span>
            <span className="text-black dark:text-white">G</span>
          </h1>

          <p className="py-6 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Discover the latest in smartphones, laptops, and accessories — all at unbeatable prices.
            Experience technology with style and reliability, brought to you by your trusted partner,
            <span className="font-semibold text-orange-500"> myG</span>.
          </p>

          {/* Button */}
          <button className="btn bg-orange-500 hover:bg-orange-600 border-none text-white rounded-full px-8 font-semibold tracking-wide shadow-lg transition-all" onClick={()=>navigate("products")}>
            Shop Now
          </button>

          {/* Icons Row */}
          <div className="flex gap-6 mt-10 text-orange-500">
            <Smartphone className="w-8 h-8" />
            <Laptop className="w-8 h-8" />
            <Headphones className="w-8 h-8" />
            <ShoppingBag className="w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Homepage
