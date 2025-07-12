import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('login'); // ✅ fixed
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'signup') { // ✅ fixed
        const response = await axios.post(backendUrl + '/api/user/register', {
          name,
          email,
          password
        });
       if(response.data.success){
        setToken(response.data.token)
        localStorage.setItem('token',response.data.token)
       }else{
        toast.error(response.data.message)
       }
      } else {
        const response = await axios.post(backendUrl +'/api/user/login',{email,password})
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
          
        }else{
          toast.error(response.data.message)

        }
        
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)

    }
  }
  useEffect(()=>{
    if (token) {
      navigate('/')
      
    }


  },[token])

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-slate-200'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState === 'signup' ? 'Sign Up' : 'Login'}</p>
        <hr className='border-none h-[1.5px] w-8 bg-slate-50' />
      </div>

      {currentState === 'login' ? null : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className='w-full px-3 py-2 border border-gray-300 text-slate-900'
          placeholder='Name'
          required
        />
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className='w-full px-3 py-2 border border-gray-300  text-slate-900'
        placeholder='Email'
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className='w-full px-3 py-2 border border-gray-300  text-slate-900'
        placeholder='Password'
        required
      />

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer text-slate-300'>Forgot your Password?</p>
        {currentState === 'login' ? (
          <p onClick={() => setCurrentState('signup')} className='cursor-pointer text-zinc-200'>
            Create account
          </p>
        ) : (
          <p onClick={() => setCurrentState('login')} className='cursor-pointer text-zinc-200'>
            Login Here
          </p>
        )}
      </div>

      <button className='bg-white text-black font-light px-8 py-2 mt-4'>
        {currentState === 'login' ? 'Sign In' : 'Sign-up'}
      </button>
    </form>
  );
};

export default Login;
