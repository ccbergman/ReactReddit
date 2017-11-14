import $ from 'jquery-ajax';

// trigger the process, make the request, and call the other two actions
export function fetchPosts() {
    // when using async actions and thunk, instead of returning the action object,
    // we return a callback function. This has a `dispatch` parameter that we
    // can use to dispatch other actions whenever we want.
    return function(dispatch) {
        dispatch(requestPosts());
        $.get("https://www.reddit.com/r/aww.json", function(data) {
            // Here is where we dig into the response JSON to find the data we actually need.
            const posts = data.results;
            dispatch(receivePosts(posts));
        });
    }
}

// Allow the reducer to update the state when the request starts loading.
function requestPosts() {
    return {
        type: "REQUEST_POSTS"
    }
}

// Allow the reducer to update the state when the request finishes and brings back data.
function receivePosts(posts) {
    return {
        type: "RECEIVE_POSTS",
        posts
    }
}
