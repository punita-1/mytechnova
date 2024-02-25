import React from 'react';

const Card = ({ image, title, description, handleRegisterClick }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <button
                    className="btn btn-primary"
                    onClick={handleRegisterClick}
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default Card;