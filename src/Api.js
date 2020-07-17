import React, { useState } from "react";
import Tweet from "./Tweet";

function Api() {
  const [users, setUser] = useState([
    { name: "Ed", message: "hello" },
    { name: "Ed2", message: "hello2" },
    { name: "Ed3", message: "hello3" },
  ]);

  return (
    <div className="app2">
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default Api;
