
import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
    const {strTeam,strTeamLogo,strAlternate,idTeam} = props.team;
    return (
        <div  className="d-xl-inline-flex m-5 p-2 justify-content-xxl-center">
                        <Card className='card' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={strTeamLogo} />
  <Card.Body>
    <Card.Title>{strTeam}</Card.Title>
    <Card.Text>
     {strAlternate}
    </Card.Text>
    <Link to = {`/details/${idTeam}`}>
    <Button variant="primary">Explore</Button>
    </Link>
    
  </Card.Body>
</Card>
        </div>

    );
};

export default Cart;