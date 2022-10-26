import React from "react";
import PropTypes from 'prop-types';

const AttendeesFilter = (props) => {
    const {
        isFiltered,
        toggleFilter
    } = props;

    return (
        <div>
            <h2>Invitees</h2>
            <label>
                <input type="checkbox"
                    checked={isFiltered}
                    onChange={toggleFilter}
                /> Hide those who haven't responded
            </label>
        </div>
    );
};
export default AttendeesFilter;

AttendeesFilter.propTypes = {
    isFiltered: PropTypes.bool.isRequired,
    toggleFilter: PropTypes.func.isRequired
};