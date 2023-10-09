import ArticleList from '../Components/ArticleList'
import articles from './article-datasource'


function ArticleListScreen(){

    return(
        <>
            <h3>Articles</h3>
            <br/>
            <ArticleList articles={articles} />
        </>
    )
}
export default ArticleListScreen;
