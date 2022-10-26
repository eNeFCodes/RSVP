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
        toggleConfirmationAt,
        toggleEditingAt,
        updateNameAt,
        toggleFilter,
        handleRemoveAt,
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
                toggleConfirmationAt={toggleConfirmationAt}
                toggleEditingAt={toggleEditingAt}
                updateNameAt={updateNameAt}
                isFiltered={isFiltered}
                handleRemoveAt={handleRemoveAt}
            />
        </div>
    );
};
export default MainContent;

MainContent.propTypes = {
    inviteName: PropTypes.string.isRequired
};