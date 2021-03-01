import { useEffect, useState } from 'react';
import './App.css';
import Player from './Components/Player/Player';
import SelectedPlayer from './Components/SelectedPLayer/SelectedPlayer';
import playerData from './fakeData/fakeData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [playerDetails, setPlayerDetails] = useState([]);
  const [selectedPlayer, setSeleectedPlayer] = useState([]);

  useEffect(() =>{
    setPlayerDetails(playerData);
    
  }, [])

const handleAddPlayer = (detail) => {
  const newSelectedPlayer = [...selectedPlayer, detail];
  setSeleectedPlayer(newSelectedPlayer);
}
    

  return (
    <div>
      <div className='Selection-Card'>
           <h1 className='position-change'>Selelcted Team  <FontAwesomeIcon icon={faUsers} /></h1>
          <h2>Total Player: {playerDetails.length}</h2>
          <h3>Total Select Player: {selectedPlayer.length}</h3>
          <SelectedPlayer selectedPlayer={selectedPlayer} ></SelectedPlayer>
      </div>
        {
          playerDetails.map(detail => <Player detail={detail} handleAddPlayer={handleAddPlayer} key={detail.id}></Player>)
        }
    </div>
  );
}

export default App;
