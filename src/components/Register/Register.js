import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex items-center'>
            <div class="mockup-phone mx-50">
                <div class="display">
                    <div class="artboard artboard-demo phone-1">
                        <form>
                            <h2 className='text-white text-center text-4xl font-bold my-4'>Register now</h2>
                            <label class="label">
                                <span class="label-text">Your Full Name</span>
                            </label>
                            <label class="input-group">
                                <input type="text" placeholder="Your Name" class="input input-bordered required" />
                            </label>

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

                            <Link to='/login' className='text-blue-400'><small>Already have an Register? Please Log in</small></Link>

                            <button class="btn btn-primary font-bold my-6 text-white flex items-center">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;