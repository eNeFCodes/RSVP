import React from "react";
import PropTypes from 'prop-types';

const Counter = (props) => {
    const {
        attending,
        unconfirmed,
        total
    } = props;

    return (
        <table className="counter">
            <tbody>
                <tr>
                    <td>Attending:</td>
                    <td>{attending}</td>
                </tr>
                <tr>
                    <td>Unconfirmed:</td>
                    <td>{unconfirmed}</td>
                </tr>
                <tr>
                    <td>Total:</td>
                    <td>{total}</td>
                </tr>
            </tbody>
        </table>
    );
};
export default Counter;

Counter.propTypes = {
    attending: PropTypes.number.isRequired,
    unconfirmed: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
};