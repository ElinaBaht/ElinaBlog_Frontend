import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: []
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducer: {},
});

export const postsReducer = postsSlice.reducer;