import React, { useState } from 'react';

function Contact() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const requestOptions = {
      method: 'POST',
      body: data,
    };

    fetch('/', requestOptions)
      .then((response) => {
        if (response.ok) {
          setFormStatus('Thank you for reaching out! We will get back to you soon.');
        } else {
          setFormStatus('Oops! Something went wrong. Please try again.');
        }
      })
      .catch((error) => {
        setFormStatus('Oops! Something went wrong. Please try again.');
      });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-6">
      <div className="max-w-lg bg-white rounded-xl shadow-lg p-5 md:p-8 w-full m-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h1>
        <form
          name="contact"
          method="POST"
          netlify="true"
          onSubmit={handleSubmit}
          data-netlify="true"
          className="space-y-6"
        >
          {/* Hidden Netlify Form Name */}
          <input type="hidden" name="form-name" value="contact" />
          
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 focus:ring-2 focus:ring-teal-500"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Form status message */}
        {formStatus && (
          <div
            className={`mt-6 p-4 text-center text-white rounded-md ${
              formStatus.includes('Oops') ? 'bg-red-500' : 'bg-teal-500'
            }`}
          >
            {formStatus}
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
