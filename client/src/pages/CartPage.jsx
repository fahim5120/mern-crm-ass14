// import React, { useEffect, useState } from 'react';
// import CartCard from '../components/user/CartCard';
// import { getCartItems } from '../services/userServices';

// const CartPage = () => {
//   const [cartItems,setCartItems]=useState([])
//   const [total,setTotal]=useState(0)
//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const res = await getCartItems();
//         console.log(res.data);
        
//      setCartItems(res.data.products)
//      setTotal(res.data.totalPrice)
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchCart();
//   }, []);


//   const updateCartFromChild=(id,totalPrice)=>{
//     console.log(id,totalPrice,"data from child");
    
//        setCartItems((prev)=> prev.filter(item=>item.productId !== id))
//        setTotal(totalPrice)
//   }


//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-6 sm:px-16">
//       <h1 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-orange-500 pl-3">
//         🛒 My Cart
//       </h1>
// {cartItems && <>
// {
//   cartItems.map((item) => (
//     <CartCard 
//       key={item.productId._id || item._id} 
//       item={item} 
//       updateCartFromChild={updateCartFromChild}
//     />
//   ))
// }
// <div className="space-y-6">
       
//       </div>

//       <div className="text-right mt-10 border-t border-gray-200 pt-6">
//         <p className="text-xl font-semibold text-gray-800 mb-4">
//           Total Amount: <span className="text-orange-500">{total}</span>
//         </p>
//         <button className="bg-green-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300">
//           Proceed to Checkout
//         </button>
//       </div></>}
      
//     </div>
//   );
// };

// export default CartPage;

import React, { useEffect, useState } from 'react';
import CartCard from '../components/user/CartCard';
import { getCartItems } from '../services/userServices';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await getCartItems();
        console.log(res.data);

        setCartItems(res.data.products);
        setTotal(res.data.totalPrice);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCart();
  }, []);

  const updateCartFromChild = (id, totalPrice) => {
    console.log(id, totalPrice, 'data from child');

    const updatedItems = cartItems.filter(
      (item) => item.productId._id !== id
    );

    setCartItems(updatedItems);
    setTotal(totalPrice);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 sm:px-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-orange-500 pl-3">
        🛒 My Cart
      </h1>

      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <CartCard
              key={item.productId._id || item._id}
              item={item}
              updateCartFromChild={updateCartFromChild}
            />
          ))}

          <div className="text-right mt-10 border-t border-gray-200 pt-6">
            <p className="text-xl font-semibold text-gray-800 mb-4">
              Total Amount:{' '}
              <span className="text-orange-500">₹{total}</span>
            </p>
            <button className="bg-green-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300">
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold text-gray-700">
            🛍️ Your cart is empty!
          </h2>
          <p className="text-gray-500 mt-2">
            Looks like you haven’t added anything yet.
          </p>
          <button
            className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-medium transition-all"
            onClick={() => window.location.href = '/products'}
          >
            Go Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;

