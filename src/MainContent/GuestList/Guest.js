import React from "react";
import PropTypes from 'prop-types';
import GuestName from "./GuestName";

const Guest = (props) => {
    const {
        name,
        isConfirmed,
        isEditing,
        handleConfirmation,
        handleEditing,
        handleSetName,
        handleRemove
    } = props;

    return (
        <li className="responded">
            <GuestName isEditing={isEditing}
                handleSetName={handleSetName}>
                {name}
            </GuestName>
            <label>
                <input type="checkbox"
                    checked={isConfirmed}
                    onChange={handleConfirmation}
                />Confirmed
            </label>
            <button onClick={handleEditing}>
                {isEditing ? 'save' : 'edit'}
            </button>
            <button onClick={handleRemove}>remove</button>
        </li>
    );
};
export default Guest;

Guest.propTypes = {
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    handleConfirmation: PropTypes.func.isRequired,
    handleEditing: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired,
};
