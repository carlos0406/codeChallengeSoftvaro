import axios from "axios"
import { useEffect, useState } from "react"
import styles from '../../styles/components/articles.module.scss'

type Article = {
	title: string,
	description: string,
	url: string,
	urlToImage: string
}

function Articles() {
	const [articles, setArticles] = useState<Article[]>([])
	async function populateArticles() {
		const { data } = await axios.get("https://newsapi.org/v2/everything?q=nanny&searchIn=title&pageSize=3&apiKey=68ce9c0cabc04b548b2a4f4078bd0a07")
		setArticles(data.articles)
	}
	useEffect(() => {
		populateArticles()
	}, [])
	return (
		<section className={styles.article}>
			<h2>News</h2>
			{articles.map((article, index) => (
				<div key={index} className={styles['article-content']}>
					<h3>
						{article.title}
					</h3>
					<p>{article.description}</p>
					<a href={article.url} target="_blank" rel="noreferrer" >
						<img src={article.urlToImage} alt="Imagem do artigo" />
					</a>
					<p className={styles.divider} />
				</div>

			))}

		</section>
	)
}
export default Articles
