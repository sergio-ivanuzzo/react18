import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Post = ({ onAddComment }) => {
	return (
		<Container onClick={onAddComment}></Container>
	);
};

Post.propTypes = {
	onAddComment: PropTypes.func.isRequired,
};

export default Post;
