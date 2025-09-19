// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import { useSelector } from "react-redux";
// import type { RootState } from "./Store";

import Timetable from "./Calender"


// // Components
// import Login from "./Auth/Login";
// import SignUp from "./Auth/Sign Up";
// import ProductList from "./Pages/Productlist";
// import Cart from "./Pages/Cart";
// import AdminDashboard from "./Pages/Admin";
// import PrivateRoute from "./PrivateRoute";

// // Layout Components
// const Navigation: React.FC = () => {
//   const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);
//   const cartItems = useSelector((state: RootState) => state.cart.items);

//   return (
//     <nav className=" text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <a href="/" className="text-xl font-bold text-black">
//           Shopping Mall
//         </a>
//         <div className="flex items-center space-x-4 text-black">
//           <a href="/" className="hover:underline">
//             Products
//           </a>
//           <a href="/cart" className="hover:underline flex items-center">
//             Cart
//             {cartItems.length > 0 && (
//               <span className="ml-1 bg-white text-indigo-600 rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                 {cartItems.reduce((total, item) => total + item.quantity, 0)}
//               </span>
//             )}
//           </a>
//           {isLoggedIn ? (
//             <>
//               {user?.role === "admin" && (
//                 <a href="/admin" className="hover:underline">
//                   Admin
//                 </a>
//               )}
//               <a href="/logout" className="hover:underline">
//                 Logout
//               </a>
//             </>
//           ) : (
//             <>
//               <a href="/login" className="hover:underline">
//                 Login
//               </a>
//               <a href="/signup" className="hover:underline">
//                 Sign Up
//               </a>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// const App: React.FC = () => {
//   const { isLoggedIn } = useSelector((state: RootState) => state.auth);

//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100">
//         <Navigation />
//         <Routes>
//           <Route path="/" element={<ProductList />} />
//           <Route
//             path="/login"
//             element={isLoggedIn ? <Navigate to="/" /> : <Login />}
//           />
//           <Route
//             path="/signup"
//             element={isLoggedIn ? <Navigate to="/" /> : <SignUp />}
//           />
//           <Route
//             path="/cart"
//             element={
//               <PrivateRoute>
//                 <Cart />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/admin"
//             element={
//               <PrivateRoute adminOnly={true}>
//                 <AdminDashboard />
//               </PrivateRoute>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

const App: React.FC = () => {
  return (
    <>
    <Timetable/>
    </>
  )
}

export default App