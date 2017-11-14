import data from '../RedditData';

const INITIAL_STATE = {
	posts: data
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "REQUEST_POSTS":
            return Object.assign({}, state, {
                posts: [],
                // isLoading: true
            });
        case "RECEIVE_POSTS":
            return Object.assign({}, state, {
                posts: action.posts,
                // isLoading: false
            });
        default:
            return state;
    }
}