import { atom } from "recoil";

export const postsState = atom({
    key: "Posts",
    default: [],
});

export const commentsState = atom({
    key: "Comments",
    default: [],
});
