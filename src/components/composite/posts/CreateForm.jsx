import PropTypes from "prop-types";
import { useIntl } from "react-intl";
import React, { forwardRef, useImperativeHandle, useState } from "react";

import Input from "../../core/input";

const CreateForm = forwardRef(({ onSubmit }, ref) => {
	const [ text, setText ] = useState("");
	const { formatMessage } = useIntl();

	const handleSubmit = (e) => {
		e?.preventDefault();
		onSubmit({
			text,
		});
		setText("");
	};

	useImperativeHandle(ref, () => ({
		handleSubmit,
	}));

	return (
		<form onSubmit={handleSubmit} ref={ref}>
			<Input
				value={text}
				placeholder={formatMessage({ id: "input.placeholder.new.post" })}
				onChange={(e) => setText(e.target.value)}
			/>
		</form>
	);
});

CreateForm.displayName = "CreateForm";

CreateForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default CreateForm;
