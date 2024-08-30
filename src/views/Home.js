import React from 'react';

const Home = () => {
    return (
      <div>
        <div className="bg-blue-500 text-white text-center p-12">
          <h2 className="text-3xl font-bold">Welcome to Our Site!</h2>
          <p className="text-xl mt-3">Explore our features and learn more about us.</p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <div className="p-6 shadow-md rounded-lg text-center hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-lg">Feature One</h3>
            <p className="text-gray-600 mt-2">Learn more about our first great feature.</p>
          </div>
          <div className="p-6 shadow-md rounded-lg text-center hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-lg">Feature Two</h3>
            <p className="text-gray-600 mt-2">Discover how our second feature can help you.</p>
          </div>
          <div className="p-6 shadow-md rounded-lg text-center hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-lg">Feature Three</h3>
            <p className="text-gray-600 mt-2">Check out the third amazing feature here.</p>
          </div>
        </div>
  
        <div className="bg-gray-200 p-12 text-center">
          <h4 className="text-2xl font-bold">Interested in Learning More?</h4>
          <p className="text-lg text-gray-600 mt-2">Contact us for more information or sign up today!</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign Up Now
          </button>
        </div>
      </div>
    );
  };
  
  export default Home;