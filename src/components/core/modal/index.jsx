import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import styled from "styled-components";
import React, { useRef } from "react";

import Button from "../button";
import { ThemeProperty } from "../../theme";
import useKeyboard from "../../../hooks/useKeyboard";

const Container = styled.div`
	position: absolute;
	z-index: 2;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	box-shadow: 1px 2px 3px 1px ${({ theme }) => theme.hexToRGBA(theme[ThemeProperty.SECONDARY].main, 0.8)};
	border-radius: 10px;
	background: white;
`;

const Header = styled.div`
	background: ${({ theme }) => theme[ThemeProperty.SECONDARY].main};
	padding: 10px 20px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	font-weight: bold;
	font-size: 20px;
`;

const Body = styled.div`
	padding: 20px;
`;

const Footer = styled.div`
	padding: 10px;
	display: flex;
	justify-content: flex-end;
	
	& > * {
		margin: 5px;
	}
`;
const Overlay = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: 1;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = ({ title, children: renderChildForm, onCancel, withOverlay = false, close }) => {
	const formRef = useRef();

	const handleClose = () => {
		close();
	};

	const handleSubmit = () => {
		formRef.current?.handleSubmit();
		close();
	};

	const handleCancel = () => {
		onCancel();
		close();
	};

	const modalRef = useKeyboard({
		Escape: () => close(),
		Enter: () => handleSubmit(),
	});

	return (
		<>
			{withOverlay && (<Overlay onClick={handleClose} />)}
			<Container ref={modalRef}>
				<Header>{title}</Header>
				<Body>{renderChildForm(formRef)}</Body>
				<Footer>
					<Button variant={ThemeProperty.PRIMARY} onClick={handleSubmit}>
						<FormattedMessage id="button.text.submit" />
					</Button>
					<Button variant={ThemeProperty.SECONDARY} onClick={handleCancel}>
						<FormattedMessage id="button.text.cancel" />
					</Button>
				</Footer>
			</Container>
		</>
	);
};

Modal.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.func.isRequired,
	withOverlay: PropTypes.bool,
	onSubmit: PropTypes.func,
	onCancel: PropTypes.func,
	close: PropTypes.func,
};

Modal.defaultProps = {
	onSubmit: () => {},
	onCancel: () => {},
	close: () => {},
};

export default Modal;
