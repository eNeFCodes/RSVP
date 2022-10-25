import React, { useState } from "react";

export const AppContext = React.createContext();

export const Provider = (props) => {
    const [appState, setAppState] = useState(() => ({
        isFiltered: false,
        guests: [
            {
                name: 'Treasure',
                isConfirmed: false,
                isEditing: false,
            },
            {
                name: 'Jin',
                isConfirmed: false,
                isEditing: false,
            },
            {
                name: 'Miu',
                isConfirmed: true,
                isEditing: false,
            },
            {
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

    const togglePropertyAt = (property, at) => {
        const guests = appState.guests.map((guest, index) => {
            if (index === at) {
                return {
                    ...guest,
                    [property]: !guest[property]
                };
            } else {
                return guest;
            }
        });
        // console.log(`toggleConfirmationAt: ${at} -- info: `, guests[at]);
        setAppState({ ...appState, guests });
    }

    const updatePropertyAt = (property, at, value) => {
        const guests = appState.guests.map((guest, index) => {
            if (index === at) {
                return {
                    ...guest,
                    [property]: value
                };
            } else {
                return guest;
            }
        });
        // console.log(`updatePropertyAt: ${at} -- info: `, guests[at]);
        setAppState({ ...appState, guests });
    }

    const toggleConfirmationAt = (index) => {
        togglePropertyAt('isConfirmed', index);
    }

    const toggleEditingAt = (index) => {
        togglePropertyAt('isEditing', index);
    }

    const updateNameAt = (index, value) => {
        updatePropertyAt('name', index, value);
    }

    const toggleFilter = () => {
        setAppState({ ...appState, isFiltered: !appState.isFiltered });
    }

    const handleInvite = (name) => {
        const pendingGuest = {
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

    const handleRemoveAt = (index) => {
        const guests = appState.guests.splice(index, 1);
        setAppState({
            ...appState,
            ...guests
        });
    }

    const handlers = {
        getTotalInvited,
        getAttendingGuests,
        getUnconfirmedGuests,
        toggleConfirmationAt,
        toggleEditingAt,
        updateNameAt,
        toggleFilter,
        handleInvite,
        handleRemoveAt,
    };

    return (
        <AppContext.Provider value={{ appState, handlers }}>
            {props.children}
        </AppContext.Provider>
    );
};