import React from "react";
import PropTypes from 'prop-types';
import GuestInputForm from "./GuestInputForm";

const Header = (props) => {
    const {
        handleFormSubmit,
        inviteName,
        setInviteName,
    } = props;

    return (
        <header>
            <h1>RSVP</h1>
            <p>A Treehouse App</p>
            <GuestInputForm
                handleFormSubmit={handleFormSubmit}
                inviteName={inviteName}
                setInviteName={setInviteName}
            />
        </header>
    );
};
export default Header;

Header.propTypes = {
    handleFormSubmit: PropTypes.func.isRequired,
    inviteName: PropTypes.string.isRequired,
    setInviteName: PropTypes.func.isRequired,
};
