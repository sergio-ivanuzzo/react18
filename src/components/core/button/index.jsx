import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { ThemeProperty } from "../../theme";

const StyledButton = styled.button`
    background: ${({ theme, variant }) => theme.getColorByVariant(variant)};
    border: transparent;
    padding: 10px;
`;

const Button = ({ children, ...props }) => {
	return (
		<StyledButton {...props}>{children}</StyledButton>
	);
};

Button.propTypes = {
	onClick: PropTypes.func,
	variant: PropTypes.oneOf(Object.values(ThemeProperty)).isRequired,
	children: PropTypes.object.isRequired,
};

Button.defaultProps = {
	onClick: () => {},
};

export default Button;
