import React from "react";
import '../App.css';
const Card =(props)=>{
    return(
      <div className="container">
        <div className="card">
            <img src= {props.avatar} alt="user profile"/>
            <h1>{props.userName} {props.userLast}</h1>
            <p>{props.userEmail}</p>
        </div>
      </div>
    );
}
export default Card;