import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function User() {
    const [users, setUsers] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get('http://localhost:3001')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err));
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteUser/${id}`)
            .then(() => {
                setUsers(prevUsers => prevUsers.filter(user => user._id !== id));
                setIsDeleted(true);
                setTimeout(() => setIsDeleted(false), 3000); 
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="flex h-screen justify-center items-center bg-gray-100">
            {isDeleted && (
                <div className="fixed top-96 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
                    User deleted successfully
                </div>
            )}
            <div className="w-[99%] md:w-[70%] bg-white rounded-lg shadow-lg p-5">
                <Link to='/create' className="px-4 py-1 text-white bg-teal-500 rounded-md hover:bg-teal-600 transition mb-4 inline-block">
                    Add User
                </Link>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto text-[13px] md:text-base">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="p-3 text-left border-b">Name</th>
                                <th className="p-3 text-left border-b">Email</th>
                                <th className="p-3 text-left border-b">Age</th>
                                <th className="p-3 text-left border-b">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id} className="hover:bg-gray-100 transition-colors">
                                    <td className="p-3 border-b">{user.name}</td>
                                    <td className="p-3 border-b max-w-[110px] md:max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">{user.email}</td>
                                    <td className="p-3 border-b">{user.age}</td>
                                    <td className="p-3 border-b">
                                        <div className="flex gap-0 md:gap-2 flex-wrap justify-start">
                                            <Link
                                                to={`/update/${user._id}`}
                                                className="w-16 md:w-24 h-7 md:h-8 flex justify-center items-center text-white bg-teal-500 rounded-md hover:bg-teal-600 transition mb-2 sm:mb-0"
                                            >
                                                Update
                                            </Link>
                                            <button
                                                className="w-16 md:w-24 h-7 md:h-8 flex justify-center items-center text-white bg-red-500 rounded-md hover:bg-red-600 transition"
                                                onClick={() => handleDelete(user._id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default User;
