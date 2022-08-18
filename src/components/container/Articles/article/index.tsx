import { ArticleType } from "../../../../hooks/useArticles"
import styles from "../styles.module.scss"

interface ArticleProps {
	article: ArticleType
}
function Article({ article }: ArticleProps) {
	return (
		<div className={styles['article-content']}>
			<h3>
				{article.title}
			</h3>
			<p>{article.description}</p>
			<a href={article.url} target="_blank" rel="noreferrer" >
				<img src={article.urlToImage} alt="Imagem do artigo" />
			</a>
			<p className={styles.divider} />
		</div>
	)
}

export default Article
