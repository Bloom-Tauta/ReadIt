import React, {useEffect,useState} from 'react';
import Article from './Article';
import Search from '../components/Search';
import './home.css'


function Home() {

    const [articles, setArticles] = useState([])
    const [filtered_articles, setFilteredArticles] = useState([]) 
    useEffect(() => {
        fetch('/articles')
            .then(response => {
                return response.json();
            }).then(articles => {
                setArticles(articles);
                setFilteredArticles(articles);
        })
    },[])

    return (
        <div >
            <div className='home-header'>
                <h2>ReadIt</h2>
                <p>
                    Discover, learn and educate <br /> let us share our expiriences and thoughts together!
                </p>
            </div>
            <Search /> 
            <Article articles={filtered_articles} />
        </div>
    )
}
export default Home;