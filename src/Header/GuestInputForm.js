import React from "react";
import PropTypes from 'prop-types';

const GuestInputForm = (props) => {
    const {
        handleFormSubmit,
        inviteName,
        setInviteName,
    } = props;

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text"
                value={inviteName}
                placeholder="Invite Someone"
                onChange={e => setInviteName(e.target.value)} />
            <button type="submit" name="submit" value="submit">Submit</button>
        </form>
    );
};
export default GuestInputForm;

GuestInputForm.propTypes = {
    handleFormSubmit: PropTypes.func.isRequired,
    inviteName: PropTypes.string.isRequired,
    setInviteName: PropTypes.func.isRequired,
};
