// Import necessary components and styles from React and react-bootstrap
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './StylePlayer.css'; // Import custom styles from StylePlayer.css
import DataPlayer from '../player.json'; // Import player data from player.json
import NamePlayer from './NamePlayer'; // Import NamePlayer component
import NatPlayer from './NatPlayer'; // Import NatPlayer component
import NumPlayer from './NumPlayer'; // Import NumPlayer component
import Age from './Age'; // Import Age component
import Team from './Team'; // Import Team component

// Define functional component PlayerList
function PlayerList() {
  return (
    <>
      <div className="Cardsss"> {/* Container for rendering player cards */}
        {DataPlayer.map((player, index) => ( // Map through player data to render individual cards
          <Card className='Cardss' style={{ width: '18rem' }} key={index}>
            <Card.Img variant="top" src={player.imagePlayer} /> {/* Display player image from player.json */}
            <Card.Body>
              <Card.Title>
                <NamePlayer name={player.name} /> {/* Pass player name as a prop to NamePlayer */}
              </Card.Title>
              <Card.Text>
                <NatPlayer nationality={player.nationalite} /> {/* Pass player nationality as a prop to NatPlayer */}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <NumPlayer number={player.jerseyNum} /> {/* Pass player jersey number as a prop to NumPlayer */}
              </ListGroup.Item>
              <ListGroup.Item>
                <Age age={player.age} /> {/* Pass player age as a prop to Age */}
              </ListGroup.Item>
              <ListGroup.Item>
                <Team team={player.teamPlayer} /> {/* Pass player team as a prop to Team */}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        ))}
      </div>
    </>
  );
}

export default PlayerList; // Export PlayerList component as the default export
