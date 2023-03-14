

const { createSlice } = require("@reduxjs/toolkit");

let initialState = {
    mode: "light",
    user: null,
    token: null,
    posts: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;//sending a user parameter from this function
            state.token = action.payload.token;//parameter -> token
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },//when you logout ,reset happens
        setFriends: (state, action) => {
            if (state.user) {
                state.user.friends = action.payload.friends; //if user already exists, then setting friends inside the state 
            } else {
                console.log("user friends non-existent :(");
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post._id === action.payload.post_id) return action.payload.post;
                return post;
            });
            state.posts = updatedPosts;
        }
    }
});
export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } = authSlice.actions;
export default authSlice.reducer;