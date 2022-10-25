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
        return appState.length;
    }

    const getAttendingGuests = () => {
        console.log('getAttendingGuests:', appState.guests);
    }

    const getUnconfirmedGuests = () => {
        console.log('getUnconfirmedGuests:', appState.guests);
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
        console.log(`toggleConfirmationAt: ${at} -- info: `, guests[at]);
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
        console.log(`updatePropertyAt: ${at} -- info: `, guests[at]);
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
    };

    const handlers = {
        getTotalInvited,
        getAttendingGuests,
        getUnconfirmedGuests,
        toggleConfirmationAt,
        toggleEditingAt,
        updateNameAt,
        toggleFilter
    };

    return (
        <AppContext.Provider value={{ appState, handlers }}>
            {props.children}
        </AppContext.Provider>
    );
};
