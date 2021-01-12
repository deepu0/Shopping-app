import React,{ useState} from 'react';
import FormInput from '../form-input/form-input.component'

import './sign-in.styles.scss'
import CustomButton from '../custom-buton/custom-button.component.jsx'

import { signInWithGoogle } from '../../firebase/firebase.utils';
const SignIn = () => {

  const [email,setEmail] =useState('')
  const [password,setPassword]=useState('')

  const handleSubmit= (e) =>{
    e.preventDefault();
    setEmail('');
    setPassword('');
  }
  return(
    <div className='sign-in'>
       <h2>I already have an account</h2>
       <span>Sign in with your email and password </span>
       <form onSubmit={handleSubmit}>
       <FormInput name="email"
       type='email'
        value={email}
        label='email' 
       onChange={(e)=> setEmail(e.target.value)} 
       required />
       <FormInput name="password"
       type="password" 
       label='password'
       handleChange={(e)=> setPassword(e.target.value)} value={password} required />
       <div className='buttons'>
       <CustomButton type="submit" >Sign in</CustomButton>
      <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in With Google</CustomButton>
           </div>
        </form>
    </div>
  )
}

export default SignIn;

