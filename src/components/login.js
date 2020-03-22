import React, {useState} from 'react';
import {login} from '../actions/auth';
import {connect} from 'react-redux';


 const Login = (props) => {

    const [user, setUser] = useState({
        email: '',
        password: ''
      });

      const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value });
      
      const handleSubmit = (e) => {
        e.preventDefault();
        props.dispatch(login(user.email, user.password));
      };
    

    return (
        <div className='form-container'>
        <h1>
          Account <span className='text-primary'>Login</span>
        </h1>
        <form onSubmit={handleSubmit} >
          <div className='form-group'>
            <label htmlFor='email'>Email Address</label>
            <input
              id='email'
              type='email'
              name='email'
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              type='password'
              name='password'
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type='submit'
            value='Login'
            className='btn btn-primary btn-block'
          />
        </form>
      </div>
    )
}
export default connect() (Login)
