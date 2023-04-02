// import React, { useEffect, useState } from 'react';
// import { useParams, Link, useNavigate} from 'react-router-dom';
// import Reviews from './Reviews';
// import './articleDetails.css';


// function ArticleDetails() {
//   const { id } = useParams();
//   const [article, setArticle] = useState({
//     img_url: "",
//     genre: "",
//     name: "",
//     rating: "",
//     user: "",
//     reviews: []
//   });
    
//     const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`/articles/${id}`)
//       .then(response => response.json())
//       .then(data => {
//         setArticle(data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, [id]);

//   function handleDelete(id) {
//     fetch(`/articles/${id}`, {
//       method: 'DELETE',
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//       .then(res => res.json())
//       .then(data => document.location.reload())
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   function handleUpdate(id) {
//     fetch(`/articles/${id}`, {
//       method: 'PATCH',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(article)
//     })
//       .then(res => res.json())
//       .then(data => document.location.reload())
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setArticle(prevArticle => ({
//       ...prevArticle,
//       [name]: value
//     }));
//   }

//   return (
// <div className="article-details">
//   <Link to="/" className="back-link"><span>&#8592;</span>Go Back</Link>
//   <div className="article-wrap">
//     <header>
//       <p className="article-author">Published by {article.name}</p>
//       <h1 className="article-title">{article.genre}</h1>
//     </header>
//     <img src={article.img_url} alt={article.name} className="article-image" />
//     <p className="article-rating">Rating: {article.rating}</p>
//     <button className="delete-button" onClick={() => handleDelete(article.id)}>Delete</button>
//     <button className="edit-button" onClick={() => navigate(`/article/${article.id}/edit`)}>Edit</button>
//   </div>
//   <Reviews articleId={article.id} reviews={article.reviews} setReviews={setArticle.reviews} />
// </div>
//   )
// }

// export default ArticleDetails;

import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Reviews from './Reviews';
import './articleDetails.css';

function ArticleDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState({
    img_url: "",
    genre: "",
    name: "",
    rating: "",
    user: "",
    reviews: []
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

    // Check if the user is authenticated
    const token = localStorage.getItem("token");
    if (token) {
      // Validate the token on the server
      fetch("/auto_login", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setIsLoggedIn(true);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setIsLoggedIn(false);
    }
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
    <div className="article-details">
      <Link to="/" className="back-link"><span>&#8592;</span>Go Back</Link>
      <div className="article-wrap">
        <header>
          <p className="article-author">Published by {article.name}</p>
          <h1 className="article-title">{article.genre}</h1>
        </header>
        <img src={article.img_url} alt={article.name} className="article-image" />
        <p className="article-rating">Rating: {article.rating}</p>
        {isLoggedIn ? (
          <>
            <button className="delete-button" onClick={() => handleDelete(article.id)}>Delete</button>
            <button className="edit-button" onClick={() => navigate(`/article/${article.id}/edit`)}>Edit</button>
          </>
        ) : (
          <p className="login-message">Please log in first</p>
        )}
      </div>
      <Reviews articleId={article.id} reviews={article.reviews} setReviews={setArticle.reviews} />
    </div>
  );
}

export default ArticleDetails
