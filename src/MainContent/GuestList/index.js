import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import Guest from './Guest';
import PendingGuest from "./PendingGuest";

const GuestList = (props) => {
    const {
        isFiltered,
        guests = [],
        toggleConfirmationAt,
        toggleEditingAt,
        updateNameAt,
        handleRemoveAt,
        pendingGuest
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
            <PendingGuest name={pendingGuest}/>
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
    pendingGuest: PropTypes.string
};
