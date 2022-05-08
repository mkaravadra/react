import React from 'react';
import { connect } from 'react-redux';

import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
	renderList() {
		return this.props.posts.map((post) => {
			return (
				<div className="item" key={post.id}>
					<i className="large middle aligned icon user"></i>
					<div className="content">
						<div className="decription">
							<h2>{post.title}</h2>
							<p>{post.body}</p>
						</div>
						<UserHeader userId={post.userId}></UserHeader>
					</div>
				</div>
			);
		});
	}

	render() {
		return <div className="ui relaxed divided list">{this.renderList()}</div>;
	}

	componentDidMount() {
		this.props.fetchPostsAndUsers();
	}
}

const mapStateToPosts = (state) => {
	return { posts: state.posts };
};

export default connect(mapStateToPosts, { fetchPostsAndUsers })(PostList);
