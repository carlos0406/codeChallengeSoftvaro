import { ArticleType } from "../../../hooks/useArticles"
import styles from "./styles.module.scss"

interface ArticleProps {
	articles: ArticleType[],
	isLoading: boolean
}
function Articles({ articles, isLoading }: ArticleProps) {
	if (isLoading) {
		return (
			<></>
		)
	}
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
