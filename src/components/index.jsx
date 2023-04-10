import React from "react";
import { useSetRecoilState } from "recoil";

import Posts from "./composite/posts";
import { commentsState, postsState } from "../store/state";

const App = () => {
	const setPosts = useSetRecoilState(postsState);
	const addPost = (post) => setPosts((prevPosts) => [
		...prevPosts,
		post,
	]);

	const setComments = useSetRecoilState(commentsState);
	const addComment = (comment) => setComments((prevComments) => [
		...prevComments,
		comment,
	]);

	return (
		<Posts onAddPost={addPost} onAddComment={addComment}/>
	);
};

export default App;
