import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { AppContext } from '../context';

import GuestList from './GuestList';
import Counter from './Counter';
import AttendeesFilter from "./Filter";

const MainContent = (props) => {
    const {
        inviteName
    } = props;
    const {
        appState,
        handlers
    } = useContext(AppContext);

    const {
        isFiltered,
        guests
    } = appState;
    const {
        toggleGuestConfirmationWithId,
        toggleEditingGuestWithId,
        updateGuestNameWithId,
        toggleFilter,
        handleRemoveGuestWithId,
        getTotalInvited,
        getAttendingGuests,
        getUnconfirmedGuests
    } = handlers;

    return (
        <div className="main">
            <AttendeesFilter
                isFiltered={isFiltered}
                toggleFilter={toggleFilter}
            />
            <Counter
                attending={getAttendingGuests()}
                unconfirmed={getUnconfirmedGuests()}
                total={getTotalInvited()}
            />
            <GuestList
                pendingGuest={inviteName}
                guests={guests}
                toggleGuestConfirmationWithId={toggleGuestConfirmationWithId}
                toggleEditingGuestWithId={toggleEditingGuestWithId}
                updateGuestNameWithId={updateGuestNameWithId}
                isFiltered={isFiltered}
                handleRemoveGuestWithId={handleRemoveGuestWithId}
            />
        </div>
    );
};
export default MainContent;

MainContent.propTypes = {
    inviteName: PropTypes.string.isRequired
};