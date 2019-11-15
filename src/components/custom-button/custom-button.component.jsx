import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...othersProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ""} custom-button`}{...othersProps}>{children}</button>
);

export default CustomButton;