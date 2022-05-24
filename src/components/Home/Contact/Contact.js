import React from 'react';
import contact from '../../../assets/images/contact.png'

const Contact = () => {
    return (
        <div
            style={{

                background: `url(${contact})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <h2 className='text-center text-white font-bold uppercase text-4xl mt-6'>Contact Us!</h2>
            <div class="hero min-h-screen bg-base">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Contact Us!</h1>
                        <p class="py-6">Please Contact Us!! your any products and your any problem. </p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-neutral">
                        <div class="card-body">
                            <div>
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Subject</span>
                                </label>
                                <input type="text" placeholder="Subject" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Massage</span>
                                </label>
                                <input type="text-filed" placeholder="Your massage" class="input input-bordered" />
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;