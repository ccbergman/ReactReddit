import data from '../RedditData';

const INITIAL_STATE = {
	posts: data
}

export default function(state=INITIAL_STATE) {
	return state;
}