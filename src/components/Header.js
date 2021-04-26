import React, { useState } from 'react';
import './Header.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
        if(click==true){
            document.getElementById("change-text").innerHTML = "Dark Mode";
            document.body.style.backgroundColor = 'hsl(230, 17%, 14%)';
            document.querySelector(".title h1").style.color = 'hsl(0, 0%, 100%)';

            const card = document.querySelectorAll(".card");
            for(var i=0; i<card.length; i++){
                card[i].style.backgroundColor = 'hsl(230, 17%, 14%)';
            } 

            const card_h1 = document.querySelectorAll(".card h1");
            for(var j=0; j<card_h1.length; j++){
                card_h1[j].style.color = 'hsl(0, 0%, 100%)';
            } 

            const overview_text = document.querySelectorAll(".card-body-footer h3");
            for(var x=0; x<overview_text.length; x++){
                overview_text[x].style.color = 'hsl(0, 0%, 100%)';
            } 
        }else{
            document.getElementById("change-text").innerHTML = "Light Mode";
            document.body.style.backgroundColor = 'hsl(0, 0%, 100%)';
            document.querySelector(".title h1").style.color = 'hsl(230, 17%, 14%)';

            const card = document.querySelectorAll(".card");
            for(var i=0; i<card.length; i++){
                card[i].style.backgroundColor = 'hsl(0, 0%, 100%)';
            } 

            const card_h1 = document.querySelectorAll(".card h1");
            for(var j=0; j<card_h1.length; j++){
                card_h1[j].style.color = 'hsl(230, 17%, 14%)';
            } 

            const overview_text = document.querySelectorAll(".card-body-footer h3");
            for(var x=0; x<overview_text.length; x++){
                overview_text[x].style.color = 'hsl(230, 17%, 14%)';
            } 
        }
    };
    return(
        <>
            <div className={click ? 'container-fluid d-flex justify-content-between align-items-center active' : 'container-fluid d-flex justify-content-between align-items-center hero'}>
                <div className="title-header">
                    <h1>Social Media Dashboard</h1>
                    <p>Total Followers: 23,004</p>
                </div>
                <div className="checkbox">
                    <span id="change-text">Dark Mode</span>
                    <span>
                        <label className="switch">
                            <input type="checkbox" onClick={handleClick}></input>
                            <span className="slider"></span>
                        </label>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Header;