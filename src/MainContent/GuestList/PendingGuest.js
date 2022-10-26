import React from "react";
import PropTypes from 'prop-types';

const PendingGuest = (props) => {
    const {
        name,
    } = props;

    if (name) {
        return (
            <li className="pending">
                <span>
                    {name}
                </span>
            </li>
        );
    }

    return null;
};
export default PendingGuest;

PendingGuest.propTypes = {
    name: PropTypes.string.isRequired,
};
