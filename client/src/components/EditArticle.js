import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState({
    img_url: '',
    genre: '',
    name: '',
    rating: '',
    user: ''
    
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

  function handleUpdate(event) {
    event.preventDefault();
    fetch(`/articles/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(article),
    })
      .then(res => res.json())
      .then(data => navigate(`/articles/${id}`))
      .catch(error => {
        console.error(error);
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setArticle(prevArticle => ({
      ...prevArticle,
      [name]: value,
    }));
  }

  return (
    <div>
      <h1>Edit Article</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={article.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={article.genre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="img_url">Image URL</label>
          <input
            type="text"
            id="img_url"
            name="img_url"
            value={article.img_url}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <input
            type="text"
            id="rating"
            name="rating"
            value={article.rating}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditArticle;



