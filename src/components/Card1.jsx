import React from 'react';
import '../style-sheets/Card1.css';

const styles = {
    img: {
      boxShadow: "0 0 24px rgb(247, 208, 109)" 
    }
  }

function Card1 ({name, number, cromo}) {
    return (
        <div className="card-info-container">
            
            <p>Character: <b>{name}</b></p>
            <p className="figurine">Figurine Number: &nbsp;&nbsp;&nbsp; <b>{number}</b></p>
            <div className="cromo">
            <small>{cromo ? "⭐ Is cromo " : "❌ Isn't cromo"}</small>
            <small>{cromo ? style={styles.img} : "❌ Isn't cromo"}</small>
            </div>
        </div>
    )
}

export default Card1;