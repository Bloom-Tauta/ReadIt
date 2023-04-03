import React, {useEffect,useState} from 'react';
import Article from './Article';
import Search from '../components/Search';
import './home.css'
import { useNavigate } from 'react-router-dom';


function Home({user}) {

    const [search,setSearch] = useState('')
    const [articles, setArticles] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if(sessionStorage.getItem('jwt')) {
            fetch('/articles',{
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${sessionStorage.getItem('jwt')}`
                }
            })
            .then(response => {
                    if (response.status === 200) {
                        response.json().then(data => {
                            setArticles(data)
                        })
                    }
                    else {
                        navigate("/login")
                    }
            })
        } else {
            navigate("/login")
        }
    },[])
    
    let filtered_articles = articles.filter(article => article.genre.toLowerCase().includes(search.toLowerCase()))


    return (
        <div >
            <div className='home-header'>
                <h2>ReadIt</h2>
                <p>
                    Discover, learn and be educated <br /> Let us share our experiences and thoughts together!
                </p>
            </div>
            <Search search={search} setSearch={setSearch} /> 
            <Article articles={filtered_articles} />
        </div>
    )
}
export default Home;