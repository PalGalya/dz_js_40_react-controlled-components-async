import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const AsyncDataComponent = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data.slice(0, 3)); 
    } catch (error) {
      console.error("Помилка:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="form-container async-data">
      <h3>Дані з сервера (useEffect)</h3>
      <button onClick={fetchUsers} disabled={loading} className="refresh-btn">
        {loading ? "Завантаження..." : "Оновити"}
      </button>

      <div className="users-list">
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <strong>{user.name}</strong> - {user.email}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AsyncDataComponent;
