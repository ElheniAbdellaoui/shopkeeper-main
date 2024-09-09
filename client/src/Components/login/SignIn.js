import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/actions/userActions';
import './login.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({email, password}));
  };

  return (
    <div className="form">
      <h1>Sign In</h1>
      <form onSubmit={handleLogin} className="sign-in">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="example@gmail.com..."
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="enter password..."
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
