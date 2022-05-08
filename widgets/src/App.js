import React, { useState } from "react";

import Accordian from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
	{
		title: "What is React?",
		content: "React is a front end javascript framework"
	},
	{
		title: "Why use React?",
		content: "Because is faster to implement and very versatile"
	},
	{
		title: "How do you use React?",
		content: "You use React by creating components"
	}
];

const options = [
	{
		label: "The Color Red",
		value: "red"
	},
	{
		label: "The Color Green",
		value: "green"
	},
	{
		label: "A Shade of Blue",
		value: "blue"
	}
];

export default () => {
	const [selected, setSelected] = useState(options[0]);

	return (
		<div>
			<Header></Header>
			<Route path="/">
				<Accordian items={items}></Accordian>
			</Route>
			<Route path="/list">
				<Search></Search>
			</Route>
			<Route path="/dropdown">
				<Dropdown
					label="Select color"
					selected={selected}
					onSelectedChange={setSelected}
					options={options}
				></Dropdown>
			</Route>
			<Route path="/translate">
				<Translate></Translate>
			</Route>
		</div>
	);
};
