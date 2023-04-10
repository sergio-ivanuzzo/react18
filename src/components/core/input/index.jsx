import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { ThemeProperty } from "../../theme";

const StyledInput = styled.input`
    padding: 10px;
    border: none;
    box-shadow: 0 0 3px 0 ${({ theme }) => theme.hexToRGBA(theme[ThemeProperty.PRIMARY].main, 0.8)};
    border-radius: 5px;
    outline: none;
`;

const Input = ({ type, placeholder, shouldFocus }) => {
	return (
		<StyledInput type={type} placeholder={placeholder} autoFocus={shouldFocus} />
	);
};

Input.propTypes = {
	type: PropTypes.string,
	placeholder: PropTypes.string,
	shouldFocus: PropTypes.bool,
};

Input.defaultProps = {
	type: "text",
	placeholder: "",
	shouldFocus: true
};

export default Input;
