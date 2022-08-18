import axios from "axios"
import { useEffect, useState } from "react"

export type ArticleType = {
	title: string,
	description: string,
	url: string,
	urlToImage: string
}

export function useArticles() {
	const [isLoading, setIsloading] = useState(true)
	const [articles, setArticles] = useState<ArticleType[]>([])
	async function loadArticles() {
		const { data } = await axios.get("https://newsapi.org/v2/everything?q=nanny&searchIn=title&pageSize=3&apiKey=68ce9c0cabc04b548b2a4f4078bd0a07")
		setArticles(data.articles)
		setIsloading(false);
	}

	useEffect(() => {
		loadArticles();
	}, [])

	return { isLoading, articles }
}
