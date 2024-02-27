import React from 'react';

const Card = ({ image, title, description, handleRegisterClick }) => {
    return (
        <div className="col-12 col-md-6 col-lg-3 my-5 card shadow mx-2 p-0">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h3 className="card-title mt-2">{title}</h3>
                <p className="card-text">{description}</p>
                <button
                    className="btn btn-primary btn-lg"
                    onClick={handleRegisterClick}
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default Card;