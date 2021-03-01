import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const Player = (props) => {
   const {id, name, salury, image, Born, Role} = props.detail;
   const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className='card-style shadow-lg p-3 mb-5 bg-body rounded'>
            <div className='card'>
                <img className='Image-size' src={image} alt=""/>
            </div>
            <div className='card card2'>
                <h3> ID: {id}</h3>
                <h2> Name: {name}</h2>
                <h4> <FontAwesomeIcon icon={faCheckCircle} /> Salary: ${salury}</h4>
                
            </div>
            <div className='card card2'>
                <h4>Born: {Born}</h4>
                <h4> Role in Team: {Role}</h4>
                <button onClick={() => handleAddPlayer(props.detail)}><FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
            </div>
            
        </div>
    );
};

export default Player;