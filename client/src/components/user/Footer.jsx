// import React from 'react'

// const Footer = () => {
//   return (
//     <footer className="bg-black text-gray-300 py-10 mt-auto">
//       <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

//         {/* Brand */}
//         <div>
//           <h2 className="text-3xl font-extrabold text-orange-500 mb-3">
//             my<span className="text-white">G</span>
//           </h2>
//           <p className="text-sm leading-6">
//             Your trusted tech partner — bringing gadgets, style, and performance together.
//           </p>
//         </div>

//         {/* Services */}
//         <div>
//           <h3 className="text-white font-semibold mb-3">Services</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:text-orange-500">Smartphones</a></li>
//             <li><a href="#" className="hover:text-orange-500">Laptops</a></li>
//             <li><a href="#" className="hover:text-orange-500">Accessories</a></li>
//             <li><a href="#" className="hover:text-orange-500">Repairs</a></li>
//           </ul>
//         </div>

//         {/* Company */}
//         <div>
//           <h3 className="text-white font-semibold mb-3">Company</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:text-orange-500">About Us</a></li>
//             <li><a href="#" className="hover:text-orange-500">Stores</a></li>
//             <li><a href="#" className="hover:text-orange-500">Careers</a></li>
//             <li><a href="#" className="hover:text-orange-500">Contact</a></li>
//           </ul>
//         </div>

//         {/* Support */}
//         <div>
//           <h3 className="text-white font-semibold mb-3">Support</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:text-orange-500">FAQs</a></li>
//             <li><a href="#" className="hover:text-orange-500">Terms & Conditions</a></li>
//             <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
//             <li><a href="#" className="hover:text-orange-500">Return Policy</a></li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom line */}
//       <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
//         <p>
//           © {new Date().getFullYear()}{" "}
//           <span className="text-orange-500 font-semibold">my</span>
//           <span className="text-white font-semibold">G</span>. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   )
// }

// export default Footer






import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10 mt-auto transition-colors duration-300">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
         
          <p className="text-sm leading-6 opacity-80">
            Your trusted tech partner — bringing gadgets, style, and performance together.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary">Smartphones</a></li>
            <li><a href="#" className="hover:text-primary">Laptops</a></li>
            <li><a href="#" className="hover:text-primary">Accessories</a></li>
            <li><a href="#" className="hover:text-primary">Repairs</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary">About Us</a></li>
            <li><a href="#" className="hover:text-primary">Stores</a></li>
            <li><a href="#" className="hover:text-primary">Careers</a></li>
            <li><a href="#" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary">FAQs</a></li>
            <li><a href="#" className="hover:text-primary">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary">Return Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-base-300 mt-10 pt-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-primary font-semibold">my</span>
          <span className="font-semibold">G</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
