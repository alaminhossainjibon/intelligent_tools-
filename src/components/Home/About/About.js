import React from 'react';
import profile from '../../../assets/images/profile/profile.png'

const About = () => {
    return (
        <div className="hero min-h-screen bg-neutral m-12 rounded-lg shadow-lg mx-auto w-1/2">
            <div className="p-6">
                <img className="mask mask-circle w-60" src={profile} />
                <div>
                    <h1 className="text-5xl font-bold text-purple-600">@ My About!</h1>
                    <p className="py-6">My name is Al-amin hossain, I'm from Bangladesh, I live in Rangpur. My goal and dreams full stack web developer. I learn programming and web development in programming-hero website.I love learning new technologies every day</p>
                    <br />
                    <h1 className="text-2xl font-bold text-purple-600">@ Everything I learned:</h1>
                    <br />
                    <p>
                        # 1. HTML.
                        <br />
                        # 2. CSS
                        <br />
                        # 2. JavaScript
                        <br />
                        # 3. Node js
                        <br />
                        # 4. Database
                        <br />
                        -----------Framework-----------
                        <br />
                        # 1. Bootstrap
                        <br />
                        # 2. tailwindcss
                        <br />
                        <h1 className="text-2xl font-bold text-purple-600">My Learning Research!</h1>
                        Programming Hero..
                        www.programming-hero.com
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;