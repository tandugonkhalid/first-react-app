import React from 'react';
import './Overview.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Overview(){
    return(
        <>
            <div className="container d-flex justify-content-center align-item-center flex-column overview">
                <div className="title">
                    <h1>Overview - Today</h1>
                </div>
                <div className="container d-flex justify-content-center align-item-center flex-wrap">
                    <div className="card card-overview">
                        <div className="card-body">
                            <div className="card-body-top justify-content-between"> 
                                <p>Page views</p>
                                <img src="images/icon-facebook.svg" alt="Facebook icon"></img> 
                            </div>
                            <div className="card-body-footer justify-content-between"> 
                                <h3>87</h3>
                                <span className="d-flex justify-content-center align-items-center">
                                    <img src="images/icon-up.svg" alt="increase"></img>
                                    <p>3%</p>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="card card-overview">
                        <div className="card-body">
                            <div className="card-body-top justify-content-between"> 
                                <p>Likes</p>
                                <img src="images/icon-facebook.svg" alt="Facebook icon"></img> 
                            </div>
                            <div className="card-body-footer justify-content-between"> 
                                <h3>52</h3>
                                <span className="d-flex justify-content-center align-items-center decrease">
                                    <img src="images/icon-down.svg" alt="decrease"></img>
                                    <p>3%</p>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="card card-overview">
                        <div className="card-body">
                            <div className="card-body-top justify-content-between"> 
                                <p>Likes</p>
                                <img src="images/icon-instagram.svg" alt="Instagram icon"></img> 
                            </div>
                            <div className="card-body-footer justify-content-between"> 
                                <h3>5462</h3>
                                <span className="d-flex justify-content-center align-items-center">
                                    <img src="images/icon-up.svg" alt="increase"></img>
                                    <p>2257%</p>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="card card-overview">
                        <div className="card-body">
                            <div className="card-body-top justify-content-between"> 
                                <p>Profile Views</p>
                                <img src="images/icon-instagram.svg" alt="Instagram icon"></img> 
                            </div>
                            <div className="card-body-footer justify-content-between"> 
                                <h3>52k</h3>
                                <span className="d-flex justify-content-center align-items-center">
                                    <img src="images/icon-up.svg" alt="increase"></img>
                                    <p>1375%</p>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="card card-overview">
                        <div className="card-body">
                            <div className="card-body-top justify-content-between"> 
                                <p>Retweets</p>
                                <img src="images/icon-twitter.svg" alt="Twitter icon"></img> 
                            </div>
                            <div className="card-body-footer justify-content-between"> 
                                <h3>117</h3>
                                <span className="d-flex justify-content-center align-items-center">
                                    <img src="images/icon-up.svg" alt="increase"></img>
                                    <p>303%</p>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="card card-overview">
                        <div className="card-body">
                            <div className="card-body-top justify-content-between"> 
                                <p>Likes</p>
                                <img src="images/icon-twitter.svg" alt="Twitter icon"></img> 
                            </div>
                            <div className="card-body-footer justify-content-between"> 
                                <h3>507</h3>
                                <span className="d-flex justify-content-center align-items-center">
                                    <img src="images/icon-up.svg" alt="increase"></img>
                                    <p>553%</p>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="card card-overview">
                        <div className="card-body">
                            <div className="card-body-top justify-content-between"> 
                                <p>Likes</p>
                                <img src="images/icon-youtube.svg" alt="Youtube icon"></img> 
                            </div>
                            <div className="card-body-footer justify-content-between"> 
                                <h3>107</h3>
                                <span className="d-flex justify-content-center align-items-center decrease">
                                    <img src="images/icon-down.svg" alt="decrease"></img>
                                    <p>19%</p>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="card card-overview">
                        <div className="card-body">
                            <div className="card-body-top justify-content-between"> 
                                <p>Total views</p>
                                <img src="images/icon-youtube.svg" alt="Youtube icon"></img> 
                            </div>
                            <div className="card-body-footer justify-content-between"> 
                                <h3>1407</h3>
                                <span className="d-flex justify-content-center align-items-center decrease">
                                    <img src="images/icon-down.svg" alt="decrease"></img>
                                    <p>3%</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overview