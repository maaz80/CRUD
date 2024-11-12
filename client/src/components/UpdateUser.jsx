import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3001/getUser/${id}`)
      .then((result) => {
        setValue("name", result.data.name);
        setValue("email", result.data.email);
        setValue("age", result.data.age);
      })
      .catch((err) => console.log(err));
  }, [id, setValue]);

  const onSubmit = (data) => {
    axios.put(`http://localhost:3001/update/${id}`, data)
      .then((result) => {
        console.log(result);
        setIsUpdated(true); // Show success popup
        setTimeout(() => {
          setIsUpdated(false);
          navigate('/');
        }, 2000); // Hide popup after 2 seconds and navigate
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      {isUpdated && (
        <div className="fixed top-96 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
          User updated successfully!
        </div>
      )}
      <div className="w-[400px] bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Update User</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
                minLength: { value: 3, message: "Name must be at least 3 characters" },
                maxLength: { value: 12, message: "Name cannot exceed 12 characters" }
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" }
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Age Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Age</label>
            <input
              type="number"
              {...register("age", {
                required: "Age is required",
                min: { value: 21, message: "Age must be above 20" }
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter age"
            />
            {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition-colors"
            >
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
