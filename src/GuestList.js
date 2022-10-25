import React from "react";
import PropTypes from 'prop-types';
import Guest from './Guest';

const GuestList = ({ guests = [] }) => {

    const renderGuests = (guests) => {
        return guests.map((guest, index) => {
            return <Guest key={index} {...guest} />
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
    guests: PropTypes.array.isRequired
};
