import React from 'react';
import './SelectedPlayer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const SelectedPlayer = (props) => {
    const selectedPlayer = props.selectedPlayer;
    const totalSalary = selectedPlayer.reduce( (sum, detail) => sum + detail.salury, 0);
    // const allName = selectedPlayer.reduce( (sum, detail) => sum + detail.name, 0)
    return (
        <div>
            <div className='Palyer-name'>
            <h3>Player Name And Salary:</h3>
            <ul>
                    {
                    selectedPlayer.map(detail => <li><FontAwesomeIcon icon={faCheckCircle} /> Name:{detail.name},  <FontAwesomeIcon icon={faCheckCircle} /> Salary: ${detail.salury}</li>)
                    } 
                </ul>
            </div>
            <h2>Total Player Salary: ${totalSalary}</h2>
            
        </div>
    );
};

export default SelectedPlayer;