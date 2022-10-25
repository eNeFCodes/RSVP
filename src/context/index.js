import React from "react";

export const AppContext = React.createContext();

export const Provider = (props) => {
    const appState = {
        guests: [
            {
                name: 'Treasure',
                isConfirmed: false
            },
            {
                name: 'Jin',
                isConfirmed: false
            },
            {
                name: 'Miu',
                isConfirmed: true
            },
            {
                name: 'Asuka',
                isConfirmed: true
            }
        ],
        getTotalInvited: function () {
            return this.guests.length;
        },
        getAttendingGuests: function () {
            console.log('getAttendingGuests:', this);
        },
        getUnconfirmedGuests: function () {
            console.log('getUnconfirmedGuests:', this);
        },
        toggleConfirmationAt: function (i) {
            this.guests = this.guests.map((guest, index) => {
                if (index === i) {
                    return { ...guest, isConfirmed: !guest.isConfirmed };
                } else {
                    return guest;
                }
            });
        }
    };

    return (
        <AppContext.Provider value={appState}>
            {props.children}
        </AppContext.Provider>
    );
};
