//only use it to get everything isnide this wrapper to come in the center.
import React from "react";

import "./style.scss";

const ContentWrapper = ({ children }) => {
	return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;
