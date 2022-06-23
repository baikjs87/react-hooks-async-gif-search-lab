import React, { useEffect, useState } from "react"
import GifList from "./GifList"
import GifSearch from "./GifSearch"

function GifListContainer() {
	const [gifs, setGifs] = useState([])
	const [APIData, setAPIData] = useState("")

	useEffect(() => {
		fetch(
			`https://api.giphy.com/v1/gifs/search?q=${APIData}&api_key=FiViJjbw3LsSfz6T2XpFYFo1sLy5mdct&rating=g`
		)
			.then((r) => r.json())
			.then((gifs) => {
				const randomNum = Math.floor(
					Math.random() * (gifs.data.length - 3)
				)
				setGifs(gifs.data.slice(randomNum, randomNum + 3))
			})
	}, [APIData])

	function handleSubmit(e) {
		setAPIData(e)
	}

	return (
		<div className="container">
			<div className="row">
                <div className="col">
				{gifs.map((gif) => (
					<GifList gifs={gif} key={gif.id} />
				))}
                </div>
			<GifSearch handleSubmit={handleSubmit} />
			</div>
		</div>
	)
}

export default GifListContainer
