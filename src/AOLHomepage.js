import React from 'react';
import Typical from 'react-typical'

export default function Profile() {
    return(
        <div className= "profile-details">
        
        <div className="profile-details-name">
            <span className="primary-text">
                {" "}
                Hello, I'm <span className="highlighted-text">SACOYA</span>
            </span>
        </div>
        <div className='profile-details-role'>
            <span className="primary-text">
                {" "}
                <h1>
                    <Typical 
                    loop={Infinity}
                    steps={[
                        "Ethusiastic Dev ",
                        1000,
                        "Full Stack Deeveloper",
                        1000,
                        "Bussiness Analyst",
                        1000,
                        "MERN STACK DEV",
                        1000,
                    ]}
                    />

                </h1>
                <span className='profile-role-tagline'>
                    knack of building applications with front and back end operations

                </span>
            </span>
        </div>
        </div>
    )
}
