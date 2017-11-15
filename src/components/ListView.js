import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListView extends Component {
	render() {
		return (
			<article>
				<section>
					<div className="PostInList">
						<img src={this.props.post.data.thumbnail} alt={this.props.post.data.thumbnail} />
						<div className="PostData">
							<p className="PostTitle">{this.props.post.data.title}</p>
							<a className="PostLink" href={this.props.post.data.url}>Click here!</a>
						</div>
					</div>
				</section>
			</article>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)(ListView);