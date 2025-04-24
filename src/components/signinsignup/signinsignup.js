import React , {useState} from 'react';
import './signinsignup.css'; 
import user_img from '../../Asset/images/user.png';
import user_pass from '../../Asset/images/Password.jpg';
import user_email from '../../Asset/images/email.png'; 


const SignInSignUp = () => {
    const [action,setAction] = useState('Sign Up');
  return (
    <div className='bodys'>
      <div className='container'>
        <div className='login'>{action}</div>
        <div className='dash'></div>

        <div className='all-inputs'>
            {action==='Login'? <div>  </div> :  <div className='inputs'>
            <img src={user_img} alt='User' /> 
            <input type='text' placeholder='User Name' /> 
          </div>}
         
          <div className='inputs'>
            <img src={user_email} alt='Email' /> 
            <input type='email' placeholder='Email' />
          </div>
       <div className='inputs'>
            <img src={user_pass} alt='Password' /> 
            <input type='password' placeholder='Password' />
          </div>
          {action==='Sign up'? <div> </div> :  
          <div className='clear'>Forgot password <span  onClick={ () =>{setAction('Sign up')}}>clear?</span>   
          </div>}
         

        

           <div className="submit-container">
        
        <div className={action==='Login'?'submit gray' : 'submit'} onClick={ () =>{setAction('Sign up')}}> Sign up</div>
        <div className={action==='Sign up'?'submit gray': 'submit'} onClick={ () =>{setAction('Login')}}>Login</div> 

      </div>
        </div>
      </div>
    </div>
  );
}

export default SignInSignUp;