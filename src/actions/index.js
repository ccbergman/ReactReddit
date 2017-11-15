import $ from 'jquery-ajax';

export function fetchPosts() {

    return function (dispatch) {
        dispatch(requestPosts());
        $.get("https://www.reddit.com/r/aww.json", function (data) {

            const posts = data.data.children;
            dispatch(receivePosts(posts));
        });
    }
}

function requestPosts() {
    return {
        type: "REQUEST_POSTS"
    }
}

function receivePosts(posts) {
    return {
        type: "RECEIVE_POSTS",
        posts
    }
}
