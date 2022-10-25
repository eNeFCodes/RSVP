import React from "react";
import PropTypes from 'prop-types';

const Guest = ({ name, isConfirmed }) => {

    const renderGuest = () => {
        if (isConfirmed) {
            return (
                <li className="responded">
                    <span>{name}</span>
                    <label>
                        <input type="checkbox" checked={isConfirmed} /> Confirmed
                    </label>
                    <button>edit</button>
                    <button>remove</button>
                </li>
            );
        } else {
            return <li className="pending"><span>{name}</span></li>
        }
    };

    return (
        <ul>
            {renderGuest()}
        </ul>
    );
};
export default Guest;

Guest.propTypes = {
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired
};
