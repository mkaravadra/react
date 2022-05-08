import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4>Warning !</h4>
					Are you sure you want to do this?
				</div>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.avatar()}
					author="Sam"
					timeAgo="Today at 6:00PM"
					comment="Nice blog post!"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.avatar()}
					author="Alex"
					timeAgo="Today at 2:00AM"
					comment="Very Nice blog post!"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.avatar()}
					author="Jane"
					timeAgo="Yesterday at 5:00PM"
					comment="Very Very Nice blog post!"
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
