


const CreateNewAccount = (props) => {
    return (
        <div className="container">
            <div className='loginBox'>
                <div className='loginTitle'>Create a New Account</div>
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
                            Already have an Account?
                        </span>
                        <span  className="changeForm" onClick={() => props.switchForm('login')}>
                            Login
                        </span> 
                        
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default CreateNewAccount;