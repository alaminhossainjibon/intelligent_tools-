import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../assets/images/google.png'

const Login = () => {
    return (
        <div className='flex items-center'>
            <div class="mockup-phone mx-50">
                <div class="display">
                    <div class="artboard artboard-demo phone-1">
                        <from>
                            <h2 className='text-white text-center text-5xl font-bold my-4'>Log In</h2>
                            <label class="label">
                                <span class="label-text">Your Email</span>
                            </label>
                            <label class="input-group">
                                <input type="text" placeholder="Your Email" class="input input-bordered required" />
                            </label>
                            <label class="label">
                                <span class="label-text">Your Password</span>
                            </label>
                            <label class="input-group">
                                <input type="password" placeholder="Your Password" class="input input-bordered required" />
                            </label>
                            <a href="#" class="label-text-alt link link-hover text-blue-400">Forgot password?</a>
                            <br />
                            <Link to='/register' className='label-text-alt link link-hover text-blue-400'><small>You are new user? please Register Now</small></Link>

                            {/* {signInError} */}
                            <input className="btn btn-primary w-full max-w-xs text-white" type="submit" value="Login" />
                        </from>
                        <div className="divider">OR</div>
                        <button
                            className="btn btn-primary text-white"
                        // onClick={() => signInWithGoogle()}
                        > <img src={google} alt="" /> CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;