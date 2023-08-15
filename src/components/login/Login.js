import {Link} from 'react-router-dom';

import "./Login.css";

const Login = (props) => {

    return (
        <div className="container-fluid">
            <div className='d-xl-flex flex-row justify-content-between custom-margin-top-large pb-4'>
                <div className='flex-grow-1'>
                    <h1 className='domain domain-name-space'>
                        Space
                    </h1>
                </div>

                <div>
                    <div className='custom-pad-self-left form-space'>
                        <h1 className='description'>Happening now</h1>
                        <form className='py-5 px-0 form-width'>
                            <h5 className="text-left fw-bold" style={{color:'#000'}}>log in to Continue.</h5>
                            <input type="text" className="form-control mt-4" placeholder="phone number, username or email"/>
                            <input type="password" className="form-control mt-3" placeholder="password" />
                            <button className="btn btn-primary w-100 mt-3">Log in</button>
                            <div className='container-fluid text-center mt-2'>
                                <Link to="/" className="link-App smaller-font-size-App">forgot password?</Link>
                            </div>
                            <div className="mt-2 w-100 row">
                                <div className="col-5"><hr /></div>
                                <div className="col-2 text-center">or</div>
                                <div className="col-5"><hr /></div>
                            </div>
                            <div className='container-fluid text-center mt-2'>
                                <Link to='/' className="link-App fw-bold">Continue as a guest</Link>
                            </div>
                        </form>
                        <div className='mt-2 form-width'>
                            <p className='my-0 fw-bold'>Don't have an account?</p>
                            <button className="btn btn-outline-primary w-100 mt-3">
                                sign up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;