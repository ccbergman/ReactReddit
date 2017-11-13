import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListView extends Component {
	render() {
		return (
			<article>
				<section>
					<div className="PostInList">
						<img src={this.props.post.thumbnail} alt={this.props.post.thumbnail} />
						<div className="PostData">
							<p className="PostTitle">{this.props.post.title}</p>
							<a className="PostLink" href={this.props.post.url}>Click here!</a>
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