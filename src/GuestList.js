import React from "react";
import PropTypes from 'prop-types';
import Guest from './Guest';

const GuestList = (props) => {
    const {
        isFiltered,
        guests = [],
        toggleConfirmationAt,
        toggleEditingAt,
        updateNameAt,
        handleRemoveAt
    } = props;

    const renderGuests = (guests) => {
        return guests
            .filter(guest => {
                return !isFiltered || guest.isConfirmed;
            })
            .map((guest, index) => {
                return <Guest key={index}
                    {...guest}
                    handleConfirmation={() => toggleConfirmationAt(index)}
                    handleEditing={() => toggleEditingAt(index)}
                    handleSetName={e => updateNameAt(index, e.target.value)}
                    handleRemove={e => handleRemoveAt(index)}
                />
            });
    }

    return (
        <ul>
            {renderGuests(guests)}
        </ul>
    );
};
export default GuestList;

GuestList.propTypes = {
    isFiltered: PropTypes.bool.isRequired,
    guests: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    updateNameAt: PropTypes.func.isRequired,
    handleRemoveAt: PropTypes.func.isRequired,
};
