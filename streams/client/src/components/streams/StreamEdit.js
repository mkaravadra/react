import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { editStream, fetchStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	render() {
		if (!this.props.stream) {
			return <div>Loading...</div>;
		}
		return (
			<div>
				<h3>Edit a Stream</h3>
				<StreamForm
					onSubmit={this.onSubmit}
					initialValues={
						this.props.stream &&
						_.pick(this.props.stream, 'title', 'description')
					}></StreamForm>
			</div>
		);
	}

	onSubmit = (formValues) => {
		this.props.editStream(this.props.match.params.id, formValues);
	};
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
	StreamEdit
);
