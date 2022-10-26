import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import Guest from './Guest';
import PendingGuest from "./PendingGuest";

const GuestList = (props) => {
    const {
        isFiltered,
        guests = [],
        toggleGuestConfirmationWithId,
        toggleEditingGuestWithId,
        updateGuestNameWithId,
        handleRemoveGuestWithId,
        pendingGuest
    } = props;

    const renderGuests = (guests) => {
        return guests
            .filter(guest => {
                return !isFiltered || guest.isConfirmed;
            })
            .map((guest) => {
                return <Guest key={guest.id}
                    {...guest}
                    handleConfirmation={() => toggleGuestConfirmationWithId(guest.id)}
                    handleEditing={() => toggleEditingGuestWithId(guest.id)}
                    handleSetName={e => updateGuestNameWithId(guest.id, e.target.value)}
                    handleRemove={e => handleRemoveGuestWithId(guest.id)}
                />
            });
    }

    return (
        <ul>
            <PendingGuest name={pendingGuest} />
            {renderGuests(guests)}
        </ul>
    );
};
export default GuestList;

GuestList.propTypes = {
    isFiltered: PropTypes.bool.isRequired,
    guests: PropTypes.array.isRequired,
    toggleGuestConfirmationWithId: PropTypes.func.isRequired,
    toggleEditingGuestWithId: PropTypes.func.isRequired,
    updateGuestNameWithId: PropTypes.func.isRequired,
    handleRemoveGuestWithId: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string
};
