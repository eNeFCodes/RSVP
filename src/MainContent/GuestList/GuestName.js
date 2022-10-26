import React from "react";
import PropTypes from 'prop-types';

const GuestName = (props) => {
    const {
        isEditing,
        children,
        handleSetName
    } = props;

    if (isEditing) {
        return (
            <input
                type="text"
                value={children}
                onChange={handleSetName}
            />
        );
    }

    return (
        <span>{children}</span>
    );
};
export default GuestName;

GuestName.propTypes = {
    isEditing: PropTypes.bool.isRequired,
    handleSetName: PropTypes.func.isRequired
};
