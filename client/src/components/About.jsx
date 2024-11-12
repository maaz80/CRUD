import React from 'react';

function About() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-6">
      <div className="max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden mt-5">
        <div className="px-4 md:px-8 py-3 md:py-6">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-4">About This Application</h1>
          <p className="text-base md:text-lg text-gray-600 mb-4">
            Welcome to our User Management CRUD application. This application allows you to create, read, update, and delete user information such as name, email, and age. Built with React, Express, MongoDB, and styled using Tailwind CSS, it offers a user-friendly interface with seamless interaction.
          </p>
          
          <p className="text-lg text-gray-600 mb-4">
            Key Features:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Create a new user</li>
            <li>View user information</li>
            <li>Edit user details</li>
            <li>Delete a user</li>
          </ul>

          <p className="text-lg text-gray-600 mb-4">
            Built by a dedicated team using modern web technologies, this application serves as a perfect starting point for managing user data in web applications.
          </p>

          <div className="mt-6 text-center">
            <p className="text-xl text-gray-700 font-medium">Happy User Management!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
