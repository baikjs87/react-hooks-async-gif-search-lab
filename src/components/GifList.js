import React from "react"

function GifList({ gifs }) {
	const url = gifs.images.original.url
	return (
		<ul>
			<li>
				<img height="200px" src={url} alt="gif" />
			</li>
		</ul>
	)
}

export default GifList
