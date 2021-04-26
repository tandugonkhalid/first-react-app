import React from 'react';
import './Socialmedia.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Socialmedia(){
    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-item-center flex-wrap social-media">
                <div className="card">
                    <div className="card-header facebook">
                    </div>
                    <div className="card-body">
                        <div className="card-body-top"> 
                            <img src="images/icon-facebook.svg" alt="Facebook icon"></img> 
                            <p>@KhalidTandugon</p>
                        </div>
                        <div className="card-body-middle"> 
                            <h1>1987</h1>
                            <p className="text-uppercase">Followers</p>
                        </div>
                    </div>
                    <div className="card-footer">
                            <img src="images/icon-up.svg" alt="increase"></img>
                            <p>12 Today</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header facebook">
                    </div>
                    <div className="card-body">
                        <div className="card-body-top"> 
                            <img src="images/icon-twitter.svg" alt="Facebook icon"></img> 
                            <p>@KhalidT__</p>
                        </div>
                        <div className="card-body-middle"> 
                            <h1>1004</h1>
                            <p className="text-uppercase">Followers</p>
                        </div>
                    </div>
                    <div className="card-footer">
                            <img src="images/icon-up.svg" alt="increase"></img>
                            <p>99 Today</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header instagram">
                    </div>
                    <div className="card-body">
                        <div className="card-body-top"> 
                            <img src="images/icon-instagram.svg" alt="Facebook icon"></img> 
                            <p>@khalidtandugon</p>
                        </div>
                        <div className="card-body-middle"> 
                            <h1>11k</h1>
                            <p className="text-uppercase">Followers</p>
                        </div>
                    </div>
                    <div className="card-footer">
                            <img src="images/icon-up.svg" alt="increase"></img>
                            <p>1099 Today</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header youtube">
                    </div>
                    <div className="card-body">
                        <div className="card-body-top"> 
                            <img src="images/icon-youtube.svg" alt="Facebook icon"></img> 
                            <p>Khalid Tandugon</p>
                        </div>
                        <div className="card-body-middle"> 
                            <h1>8239</h1>
                            <p className="text-uppercase">Followers</p>
                        </div>
                    </div>
                    <div className="card-footer decrease">
                            <img src="images/icon-down.svg" alt="decrease"></img>
                            <p> 144 Today</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Socialmedia