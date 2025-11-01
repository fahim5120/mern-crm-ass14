import React from "react"

const Aboutpage = () => {
  return (
    <section
      className="hero min-h-screen bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url(https://www.mygenie.in/wp-content/uploads/2023/07/myg-store-banner.jpg)",
      }}
    >
      {/* overlay */}
      <div className="hero-overlay bg-black bg-opacity-60"></div>

      {/* content */}
      <div className="hero-content text-center text-neutral-content px-6">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-5xl font-extrabold text-orange-500 drop-shadow-lg">
            About <span className="text-white">my</span>G
          </h1>

          <p className="mb-6 text-lg leading-relaxed text-gray-200">
            myG has been your trusted destination for the latest gadgets,
            electronics, and accessories. From smartphones to laptops and
            everything in between, we bring technology closer to you with
            unbeatable prices and exceptional customer support.
          </p>

          <p className="mb-8 text-gray-300">
            Founded in Kerala, myG continues to grow as one of India’s most
            loved tech retailers — blending innovation, reliability, and
            style into every purchase experience.
          </p>

          <button className="btn bg-orange-500 hover:bg-orange-600 border-none text-white font-semibold rounded-full px-8 shadow-lg transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Aboutpage
