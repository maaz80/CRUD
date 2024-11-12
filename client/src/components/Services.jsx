import React from 'react';

function Services() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto text-center mt-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h1>
        <p className="text-lg text-gray-600 mb-12">
          We provide top-notch solutions to manage user data efficiently. Our platform allows for easy user creation, updating, and deletion, all while offering a user-friendly interface.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">User Management</h3>
            <p className="text-gray-600">
              Effortlessly create, update, and delete users with our simple, intuitive interface. Manage user information with ease and speed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">Secure Data Storage</h3>
            <p className="text-gray-600">
              All user data is stored securely using MongoDB. We ensure that your sensitive information is safe and properly managed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">Responsive Design</h3>
            <p className="text-gray-600">
              Our platform is designed to be fully responsive, ensuring that users can access and manage data across various devices without any hassle.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">Real-time Updates</h3>
            <p className="text-gray-600">
              Changes made to user data are reflected in real-time, ensuring smooth and up-to-date user management experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">Scalability</h3>
            <p className="text-gray-600">
              Our application is scalable, capable of handling large amounts of data and users, making it ideal for businesses of all sizes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">User-Friendly Interface</h3>
            <p className="text-gray-600">
              Designed with simplicity in mind, our platform is easy to navigate and ensures a smooth user experience for both beginners and experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
