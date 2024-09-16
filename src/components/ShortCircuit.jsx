import { useState } from "react";

export const ShortCircuit = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState("");

  return (
    <section className="container">
      <h1>Welcome to the short circuit evaluation!</h1>

      {/* Short-circuit evaluation */}
      {isLoggedIn && <p>You are logged in!</p>}
      {user ? `Hello, ${user}!` : "You are logged in!"}

      <div className="grid-three-cols">
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          Toggle login state
        </button>
        <button onClick={() => setUser("Saumya")}>Set user</button>
        <button onClick={() => setUser("")}>Clear user</button> {/* Added functionality */}
      </div>
    </section>
  );
};
