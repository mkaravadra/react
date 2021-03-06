import React from "react";

class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { spans: 0 };
		this.imageRef = React.createRef();
	}

	render() {
		const { description, urls } = this.props.image;
		return (
			<div style={{ gridRow: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} alt={description} src={urls.regular}></img>
			</div>
		);
	}

	componentDidMount() {
		this.imageRef.current.addEventListener("load", this.setSpans);
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 10);

		this.setState({ spans });
	};
}

export default ImageCard;
