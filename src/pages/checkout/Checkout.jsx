import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Agar foydalanuvchi to'g'ridan-to'g'ri Checkout sahifasiga kelsa, uni Cart sahifasiga yo'naltiramiz.
    const cartItems = JSON.parse(localStorage.getItem("checkout")) || [];
    if (!cartItems.length) {
      navigate("/checkout");
    }
  }, [navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Bu yerda formani jo'natish yoki backend bilan ishlash mumkin
    console.log("Checkout information submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
        <form onSubmit={handleSubmit}>
          {/* Contact Information */}
          <div>
            <label htmlFor="contact_email_phone" className="block text-gray-700 font-medium mb-2">
              Contact
            </label>
            <input
              type="text"
              id="contact_email_phone"
              name="contact_email_phone"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email or mobile phone number"
              required
            />
            <div className="flex items-center mt-2">
              <input type="checkbox" id="newsletter" name="newsletter" className="mr-2" />
              <label htmlFor="newsletter" className="text-gray-600">
                Subscribe to newsletter for a 10% discount
              </label>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Shipping Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                id="first_name"
                name="first_name"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Last Name"
                required
              />
            </div>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full border border-gray-300 rounded-md p-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Address and Number"
              required
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <input
                type="text"
                id="city"
                name="city"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="City"
                required
              />
              <input
                type="text"
                id="postal_code"
                name="postal_code"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Postal Code"
                required
              />
              <select
                id="province"
                name="province"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Province</option>
                <option value="province1">Province 1</option>
                <option value="province2">Province 2</option>
              </select>
            </div>
            <select
              id="country_region"
              name="country_region"
              className="w-full border border-gray-300 rounded-md p-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="italy">Italy</option>
              <option value="usa">USA</option>
              <option value="uzbekistan">Uzbekistan</option>
            </select>
            <div className="flex items-center mt-4">
              <input type="checkbox" id="save_info" name="save_info" className="mr-2" />
              <label htmlFor="save_info" className="text-gray-600">
                Save this information for future checkout
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={() => navigate("/cart")}
              className="text-blue-600 hover:underline"
            >
              Back to cart
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Go to Shipping
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
