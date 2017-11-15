import React, { Component } from 'react';
import { connect } from 'react-redux';

class GridView extends Component {
	render() {
		return (
			<div className="PostInGrid">
				<img className="PhotoGrid" src={this.props.post.data.thumbnail} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)(GridView);