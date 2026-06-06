import React, { useState } from 'react';

const users = [
  {
    id: 1,
    name: "ABC",
    email: "abc@gmail.com",
    password: "12"
  },
  {
    id: 2,
    name: "DEF",
    email: "def@gmail.com",
    password: "1234"
  },
  {
    id: 3,
    name: "GHI",
    email: "ghi@gmail.com",
    password: "123456"
  }
];

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setUserError('');
    setPasswordError('');

    setTimeout(() => {
      const user = users.find((u) => u.email === email);

      if (!user) {
        console.log("User not found");
        setUserError("User not found");
      } else if (user.password !== password) {
        console.log("Password Incorrect");
        setPasswordError("Password Incorrect");
      } else {
        console.log(user);
      }
    }, 3000);
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="input-email">Email:</label><br />
          <input
            id="input-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
          <div id="user-error" style={{ color: 'red', fontSize: '14px', minHeight: '20px' }}>
            {userError}
          </div>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="input-password">Password:</label><br />
          <input
            id="input-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
          <div id="password-error" style={{ color: 'red', fontSize: '14px', minHeight: '20px' }}>
            {passwordError}
          </div>
        </div>

        <button id="submit-form-btn" type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default App;