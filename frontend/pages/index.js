// frontend/pages/index.js
import { useEffect, useState } from "react";

export default function Home() {
  const [backendMessage, setBackendMessage] = useState("Loading...");

  useEffect(() => {
    // Adjust URL based on how docker compose exposes your backend
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setBackendMessage(data.message))
      .catch((err) => {
        console.error("Failed to fetch backend:", err);
        setBackendMessage("Failed to connect to backend");
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-purple-600">
          Welcome to LearnLog 🚀
        </h1>
        <p className="text-gray-700 text-lg">
          Backend says: <strong>{backendMessage}</strong>
        </p>
      </div>
    </div>
  );
}
