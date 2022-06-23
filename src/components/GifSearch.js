import React, { useState } from "react"

function GifSearch({ handleSubmit }) {
	const [searchTerm, setSearchTerm] = useState("")

	function onSearchInput(e) {
		setSearchTerm(e.target.value)
	}

	function onSubmit(e) {
		e.preventDefault()
		handleSubmit(searchTerm)
	}

	return (
		<form className="form-label col" onSubmit={onSubmit}>
			<div>
				<label>
					Enter a Search Term:
					<input
						className="form-control"
						type="text"
						name="search"
						value={searchTerm}
						onChange={onSearchInput}
					/>
				</label>
			</div>
			<button className="btn btn-success" type="submit">
				Find Gifs
			</button>
		</form>
	)
}

export default GifSearch
