import React, { useState, useEffect } from "react";

import axios from "axios";

import wikipedia from "../api/wikipedia";

const Search = () => {
	const [term, setTerm] = useState("Programming");
	const [debouncedTerm, setDebouncedTerm] = useState(term);
	const [results, setResults] = useState([]);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebouncedTerm(term);
		}, 1000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [term]);

	useEffect(() => {
		const searchWikipedia = async () => {
			const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
				params: {
					action: "query",
					list: "search",
					origin: "*",
					format: "json",
					srsearch: debouncedTerm
				}
			});

			setResults(data.query.search);
		};
		searchWikipedia();
	}, [debouncedTerm]);

	/* useEffect(() => {
		//1st way
		const searchWikipedia = async () => {
			const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
				params: {
					action: "query",
					list: "search",
					origin: "*",
					format: "json",
					srsearch: term
				}
			});

			setResults(data.query.search);
		};

		if (term && !results.length) {
			searchWikipedia();
		} else {
			const timeoutId = setTimeout(() => {
				if (term) {
					searchWikipedia();
				}
			}, 500);
		}

		//2nd way
		/* (async () => {
			await wikipedia.get();
		})(); */

	//3rd way
	/* wikipedia.get().then((response) => {
			console.log(response.data);
		}); */

	/* return () => {
			clearTimeout(timeoutId);
		};
	}, [term]); */

	const renderedResults = results.map((result) => {
		return (
			<div className="item" key={result.pageid}>
				<div className="right floated content">
					<a
						className="ui button"
						href={`https://en.wikipedia.org?curid=${result.pageid}`}
					>
						Go
					</a>
				</div>
				<div className="content">
					<div className="header">{result.title}</div>
					<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="ui form container">
				<div className="field">
					<label>Enter Search Term</label>
					<input
						className="input"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</div>
			</div>
			<div className="ui celled list">{renderedResults}</div>
		</div>
	);
};

export default Search;
