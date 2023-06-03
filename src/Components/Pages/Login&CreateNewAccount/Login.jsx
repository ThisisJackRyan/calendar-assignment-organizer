import './Login.css'


const Login = () => {
    return (
        <div className="container">
            <div className='loginBox'>
                <div className='loginTitle'>Login</div>
                <div className='inputsBox'>
                    <div className=' inputs'>
                        <div className='inputsTitle'>Email</div>
                        <div>
                            <input type="email" placeholder='youremail@email.com' />
                        </div>
                    </div>
                    <div className=' inputs'>
                        <div className='inputsTitle'>Password</div>
                        <div>
                            <input type="password" placeholder='password' />
                        </div>
                    </div>
                    <div className='differentAccount'>
                        <span>
                            Don't have an Account?
                        </span>
                        <a href="#">
                            Create Account
                        </a> 
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Login; 