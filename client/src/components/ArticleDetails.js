

import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate} from 'react-router-dom';



function ArticleDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState({
    img_url: "",
    genre: "",
    name: "",
    rating: "",
    user: "",
    reviews: ""
  });
    
    const navigate = useNavigate();

  useEffect(() => {
    fetch(`/articles/${id}`)
      .then(response => response.json())
      .then(data => {
        setArticle(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  function handleDelete(id) {
    fetch(`/articles/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => document.location.reload())
      .catch(error => {
        console.error(error);
      });
  }

  function handleUpdate(id) {
    fetch(`/articles/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(article)
    })
      .then(res => res.json())
      .then(data => document.location.reload())
      .catch(error => {
        console.error(error);
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setArticle(prevArticle => ({
      ...prevArticle,
      [name]: value
    }));
  }

  return (
    <div>
      <Link to="/"><span>&#8592;</span>Go Back</Link>
      <div className='article-wrap'>
        <header>
          <p>Published {article.name}</p>
          <h1>{article.genre}</h1>
        </header>
        <img src={article.img_url} alt={article.name} />
        <p>Rating: {article.rating}</p>
        <button onClick={() => handleDelete(article.id)}>Delete</button>
        <button onClick={() => navigate(`/article/${article.id}/edit`)}>Edit</button>
      </div>
    </div>
  )
}

export default ArticleDetails;

