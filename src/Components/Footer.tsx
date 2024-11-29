import React from "react";

const Footer: React.FC = () => {
  return (
    <>
    <footer className="bg-white text-gray-700 py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Contact Information */}
        <div>
          <h3 className="font-medium text-xl mb-4">Contact Information</h3>
          <p className="mt-2 font-extralight text-base text-gray-400">
            <span className="block font-extralight text-base text-gray-400">Address:</span>
            356 West Side Newark, New Jersey, USA
          </p>
          <p className="mt-2 font-extralight text-base text-gray-400">
            <span className="block font-extralight text-base text-gray-400">Phone:</span>
            +1 (800) 123-45-67
          </p>
          <p className="mt-2 font-extralight text-base text-gray-400">
            <span className="block font-extralight text-base text-gray-400">Email:</span>
            admin@demolink.com
          </p>
        </div>

        {/* Custom Care */}
        <div>
          <h3 className="font-medium text-xl mb-4">Custom Care</h3>
          <ul className="space-y-4 font-extralight text-base text-gray-400">
            <li><a href="/my-account" className="hover:text-gray-900">My account</a></li>
            <li><a href="/shop" className="hover:text-gray-900">Shop</a></li>
            <li><a href="/wishlist" className="hover:text-gray-900">Wishlist</a></li>
            <li><a href="/contacts" className="hover:text-gray-900">Contacts</a></li>
            <li><a href="/terms" className="hover:text-gray-900">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-medium text-xl mb-4">Company</h3>
          <ul className="space-y-2 font-extralight text-base text-gray-400">
            <li><a href="/about-us" className="hover:text-gray-900">About us</a></li>
            <li><a href="/delivery" className="hover:text-gray-900">Delivery</a></li>
            <li><a href="/payment" className="hover:text-gray-900">Payment</a></li>
            <li><a href="/contacts" className="hover:text-gray-900">Contacts</a></li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-medium text-xl mb-4">Shop</h3>
          <ul className="space-y-2 font-extralight text-base text-gray-400">
            <li><a href="/shop/for-him" className="hover:text-gray-900">For Him</a></li>
            <li><a href="/shop/for-her" className="hover:text-gray-900">For Her</a></li>
            <li><a href="/shop/for-kids" className="hover:text-gray-900">For Kids</a></li>
            <li><a href="/shop/smart-watches" className="hover:text-gray-900">Smart Watches</a></li>
            <li><a href="/shop/rolex" className="hover:text-gray-900">Rolex</a></li>
          </ul>
        </div>

        {/* Instagram Placeholder */}
        <div>
          <h3 className="font-medium text-xl mb-4">#Instagram</h3>
          <p className="text-sm font-extralight text-gray-400">
            Error validating access token: The session has been invalidated because the user changed their password or Facebook has changed the session for security reasons.
          </p>
        </div>
      </div>

      
    </footer>
    <div className="bg-[#F7F7F7] mt-10 py-6 text-center font-extralight text-sm text-gray-500">
        <p>Zemez © . All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
