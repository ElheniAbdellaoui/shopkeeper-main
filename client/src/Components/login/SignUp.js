import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../../redux/actions/userActions';
import {Redirect} from 'react-router-dom';
import './login.css';

const SignUp = () => {
  const {loading, users} = useSelector((state) => state.userReducer);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  // registering users
  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      phone,
      address,
      password,
    };
    dispatch(register(newUser));
  };
  return (
    <div>
      {users ? (
        <Redirect to="/SignIn" />
      ) : (
        <div className="form">
          <h1>Sign Up</h1>
          <form onSubmit={handleRegister}>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Please fill in your full name..."
            />
            <label>Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              placeholder="example@gmail.com..."
            />
            <label>Phone</label>
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
              placeholder="Please fill in your phone number..."
            />
            <label>Address</label>
            <input
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              required
              placeholder="Please fill in your address..."
            />
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              placeholder="Please fill in your address..."
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUp;
