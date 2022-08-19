import { ArticleType } from "../../../hooks/useArticles"
import Article from "./Article"
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
				<Article article={article} key={`${article.title}-${index}`} />
			))}

		</section>
	)
}
export default Articles
