import React, { useEffect, useState } from "react";
import { v1 as uuidv1 } from 'uuid';

export const AppContext = React.createContext();

export const Provider = (props) => {
    const [appState, setAppState] = useState(() => ({
        isFiltered: false,
        guests: [
            {
                id: uuidv1(),
                name: 'Treasure',
                isConfirmed: false,
                isEditing: false,
            },
            {
                id: uuidv1(),
                name: 'Jin',
                isConfirmed: false,
                isEditing: false,
            },
            {
                id: uuidv1(),
                name: 'Miu',
                isConfirmed: true,
                isEditing: false,
            },
            {
                id: uuidv1(),
                name: 'Asuka',
                isConfirmed: true,
                isEditing: false,
            }
        ]
    }));

    const getTotalInvited = () => {
        return appState.guests.length || 0;
    }

    const getAttendingGuests = () => {
        return appState.guests.filter(guest => guest.isConfirmed).length || 0;
    }

    const getUnconfirmedGuests = () => {
        return appState.guests.filter(guest => !guest.isConfirmed).length || 0;
    }

    const togglePropertyWithId = (property, guestId) => {
        const guests = appState.guests.map(guest => {
            if (guest.id === guestId) {
                return {
                    ...guest,
                    [property]: !guest[property]
                };
            } else {
                return guest;
            }
        });
        setAppState({ ...appState, guests });
    }

    const updatePropertyAt = (property, guestId, value) => {
        const guests = appState.guests.map(guest => {
            if (guest.id === guestId) {
                return {
                    ...guest,
                    [property]: value
                };
            } else {
                return guest;
            }
        });
        setAppState({ ...appState, guests });
    }

    const toggleGuestConfirmationWithId = (guestId) => {
        togglePropertyWithId('isConfirmed', guestId);
    }

    const toggleEditingGuestWithId = (guestId) => {
        togglePropertyWithId('isEditing', guestId);
    }

    const updateGuestNameWithId = (guestId, value) => {
        updatePropertyAt('name', guestId, value);
    }

    const toggleFilter = () => {
        setAppState({ ...appState, isFiltered: !appState.isFiltered });
    }

    const handleInvite = (name) => {
        const pendingGuest = {
            id: uuidv1(),
            name: name,
            isConfirmed: false,
            isEditing: false,
        };

        setAppState({
            ...appState,
            guests: [
                pendingGuest,
                ...appState.guests
            ]
        });
    }

    const handleRemoveGuestWithId = (guestId) => {
        const guests = appState.guests.filter(guest => guest.id !== guestId);
        setAppState({
            ...appState,
            ...guests
        });
    }

    const handlers = {
        getTotalInvited,
        getAttendingGuests,
        getUnconfirmedGuests,
        toggleGuestConfirmationWithId,
        toggleEditingGuestWithId,
        updateGuestNameWithId,
        toggleFilter,
        handleInvite,
        handleRemoveGuestWithId,
    };

    useEffect(() => {
        console.log('Guest Lists: ', appState.guests);
    });

    return (
        <AppContext.Provider value={{ appState, handlers }}>
            {props.children}
        </AppContext.Provider>
    );
};
