import NavigateButton from "../components/NavigateButton";

const Contact = () => {
    return (
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
            </div>
            <button type="submit" className="w-full py-2 px-4 border border-transparent text-white font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Send Message
            </button>
          </form>
        </div>
  
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-bold">Contact Details</h3>
          <p className="text-gray-600 mt-2">For inquiries or assistance, feel free to reach out to us:</p>
          <ul className="mt-4 space-y-2">
            <li><strong>Phone:</strong> +1234567890</li>
            <li><strong>Email:</strong> info@example.com</li>
            <li><strong>Address:</strong> 123 Street, City, Country</li>
          </ul>
        </div>
        <NavigateButton />
      </div>
    );
  };
  
  export default Contact;