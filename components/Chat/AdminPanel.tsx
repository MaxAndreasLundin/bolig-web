import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const AdminPanel: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${process.env.NEXT_PUBLIC_JAVA_BACKEND}/api/v1/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    setUsers(result);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (userId: number) => {
    const doWork = async () => {
      console.log('click');
      const token = localStorage.getItem('token');

      await fetch(`${process.env.NEXT_PUBLIC_JAVA_BACKEND}/api/v1/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'DELETE',
      });
      fetchUsers();
    };
    doWork();
  };

  return (
    <div className="container mx-auto">
      <h1 className="mb-4 text-2xl">User Management</h1>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="bg-gray-900">
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="flex flex-col items-center border px-4 py-2">
                <button
                  className="bg-blue-600 text-white rounded-full p-2"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
