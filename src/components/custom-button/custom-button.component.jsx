import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...othersProps }) => (
    <button className={`${inverted ? 'inverted' : ""} ${isGoogleSignIn ? 'google-sign-in' : ""} custom-button`}{...othersProps}>{children}</button>
);

export default CustomButton;