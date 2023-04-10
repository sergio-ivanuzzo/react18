import PropTypes from "prop-types";
import styled from "styled-components";
import { FormattedMessage, useIntl } from "react-intl";
import React, { useCallback, useState } from "react";

import Button from "../../core/button";
import CreateForm from "./CreateForm";
import Modal from "../../core/modal";
import Post from "./Post";
import { ThemeProperty } from "../../theme";

const Container = styled.div``;

const Posts = ({ onAddPost, onAddComment, posts }) => {
	const [ isModalOpened, setModalOpened ] = useState(false);
	const { formatMessage } = useIntl();

	const openModal = useCallback(() => setModalOpened(true), []);
	const closeModal = useCallback(() => setModalOpened(false), []);

	return (
		<Container>
			{posts.map((post) => (
				<Post key={post.id} onAddComment={onAddComment} />
			))}
			<Button variant={ThemeProperty.PRIMARY} onClick={openModal}>
				<FormattedMessage id="button.text.newPost" />
			</Button>
			{isModalOpened && (
				<Modal withOverlay title={formatMessage({ id: "modal.new.post.title.text" })} close={closeModal}>
					{(ref) => <CreateForm onSubmit={onAddPost} ref={ref} />}
				</Modal>
			)}
		</Container>
	);
};

Posts.propTypes = {
	onAddPost: PropTypes.func.isRequired,
	onAddComment: PropTypes.func.isRequired,
	posts: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string,
		text: PropTypes.string,
	}))
};

Posts.defaultProps = {
	posts: [],
};

export default Posts;
