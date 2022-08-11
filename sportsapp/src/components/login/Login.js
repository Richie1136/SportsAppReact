import { useState } from 'react'
import { auth } from '../../firebase'
import { NavLink, useNavigate } from 'react-router-dom'
import './Login.css'

// const Login = () => {

//   const navigate = useNavigate()
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const onEmailChange = (event) => {
//     setEmail(event.target.value)
//   }

//   const onPasswordChange = (event) => {
//     setPassword(event.target.value)
//   }

//   const signin = (event) => {
//     event.preventDefault()
//     auth.signInWithEmailAndPassword(email, password)
//       .then((auth) => {
//         if (auth) {
//           navigate("/")
//         }
//       }).catch(error => alert(error.message))
//   }

//   const signup = (event) => {
//     event.preventDefault()
//     auth.createUserWithEmailAndPassword(email, password)
//       .then((auth) => {
//         if (auth) {
//           navigate("/")
//         }
//       }).catch(error => alert(error.message))
//   }

//   return (
//     <div className='login'>
//       <div className='login-container'>
//         <h1>Sign in</h1>
//         <form>
//           <h5>E-mail</h5>
//           <input type="text" onChange={onEmailChange} vakue={email} />
//           <h5>Password</h5>
//           <input type="password" onChange={onPasswordChange} value={password} />
//           <button type='submit' onClick={signin} className='signin'>Sign In</button>
//         </form>
//         <button onClick={signup} type='submit' className='signup'>Create Account</button>
//       </div>
//     </div>
//   )
// }

// export default Login




const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const signin = (event) => {
    event.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate('/')
        }
      }).catch(error => alert(error.message))
  }

  const signup = (event) => {
    event.preventDefault()
    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate('/')
        }
      }).catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <NavLink to='/'>
        <img className='login-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='amazon' />
      </NavLink>
      <div className='login-container'>
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type='text' onChange={onEmailChange} value={email} />
          <h5>Password</h5>
          <input type='password' onChange={onPasswordChange} value={password} />
          <button type='submit' onClick={signin} className='signin'>Sign In</button>
        </form>
        <p>
          By signing-in you agree to Amazing Fake Clone Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={signup} type='submit' className='signup'>Create Account</button>
      </div>
    </div>
  )
};

export default Login;