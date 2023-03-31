// import React, { useState, useEffect } from 'react';


// function NewArticle() {
//   const [categories, setCategories] = useState([]);
//   const [article, setArticle] = useState({
//     name: '',
//     genre: '',
//     rating: '',
//     img_url: '',
//     user_id: '',
//     category_id: '',
//   });

//   useEffect(() => {
//     fetch('/categories')
//       .then(response => response.json())
//       .then(data => {
//         setCategories(data);
//       })
//       .catch(error => console.error('Error fetching categories:', error));
//   }, []);

//   function addNewArticle(newArticle) {
//     setArticle({
//       name: '',
//       genre: '',
//       rating: '',
//       img_url: '',
//       user_id: '',
//       category_id: '',
//     });
//   }

//   const handleChange = event => {
//     const { name, value } = event.target;
//     setArticle(prevArticle => ({
//       ...prevArticle,
//       [name]: value
//     }));
//   };
  
//   const handleSubmit = event => {
//     event.preventDefault();

    
//     fetch('/articles', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(article)
//     })
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error('Network response was not ok');
//         }
//       })
//       .then(data => {
//         addNewArticle(data);
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   };
//   return (
//     <div>
//     <h1>New Article</h1>
//     <form onSubmit={handleSubmit}>
//     <div>
//     <label htmlFor="name">Name:</label>
//     <input
//              type="text"
//              id="name"
//              name="name"
//              value={article.name}
//              onChange={handleChange}
//            />
//     </div>
//     <div>
//     <label htmlFor="genre">Genre:</label>
//     <input
//              type="text"
//              id="genre"
//              name="genre"
//              value={article.genre}
//              onChange={handleChange}
//            />
//     </div>
//     <div>
//     <label htmlFor="rating">Rating:</label>
//     <input
//              type="number"
//              id="rating"
//              name="rating"
//              value={article.rating}
//              onChange={handleChange}
//            />
//     </div>
//     <div>
//     <label htmlFor="img_url">Image URL:</label>
//     <input
//              type="text"
//              id="img_url"
//              name="img_url"
//              value={article.img_url}
//              onChange={handleChange}
//            />
//     </div>
//     <div>
//     <label htmlFor="user_id">User_id:</label>
//     <input
//              type="text"
//              id="user_id"
//              name="user_id"
//              value={article.user_id}
//             onChange={handleChange}
//             disabled
//            />
//     </div>
//     <div>
//     <label htmlFor="category_id">Category</label>
//     <select
//              id="category_id"
//              name="category_id"
//              value={article.category}
//              onChange={handleChange}
//            >
//     <option value="">--Select a category--</option>
//     {categories.map(category => (
//     <option key={category.id} value={category.id}>
//     {category.content}
//     </option>
//     ))}
//     </select>
//     </div>
//     <button type="submit">Create Article</button>
//     </form>
//     </div>
//     );
//     }
    
//     export default NewArticle;

import React, { useState, useEffect } from 'react';

function NewArticle() {
  const [categories, setCategories] = useState([]);
  const [article, setArticle] = useState({
    name: '',
    genre: '',
    rating: '',
    img_url: '',
    user_id: '',
    category_id: '',
  });
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.token;
    if (typeof token !== 'undefined' && token.length > 1 && token !== 'undefined') {
      fetch('/auto_login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })
        .then((r) => r.json())
        .then((user) => setCurrentUser(user));
    } else {
      console.log('No token found, try logging in!');
    }

    fetch('/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  function addNewArticle(newArticle) {
    setArticle({
      name: '',
      genre: '',
      rating: '',
      img_url: '',
      user_id: '',
      category_id: '',
    });
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setArticle(prevArticle => ({
      ...prevArticle,
      [name]: value
    }));
  };
  
  const handleSubmit = event => {
    event.preventDefault();

    setArticle(prevArticle => ({
      ...prevArticle,
      user_id: currentUser.id,
    }));

    fetch('/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(article)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then(data => {
        addNewArticle(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };
  return (
    <div>
    <h1>New Article</h1>
    <form onSubmit={handleSubmit}>
    <div>
    <label htmlFor="name">Name:</label>
    <input
             type="text"
             id="name"
             name="name"
             value={article.name}
             onChange={handleChange}
           />
    </div>
    <div>
    <label htmlFor="genre">Genre:</label>
    <input
             type="text"
             id="genre"
             name="genre"
             value={article.genre}
             onChange={handleChange}
           />
    </div>
    <div>
    <label htmlFor="rating">Rating:</label>
    <input
             type="number"
             id="rating"
             name="rating"
             value={article.rating}
             onChange={handleChange}
           />
    </div>
    <div>
    <label htmlFor="img_url">Image URL:</label>
    <input
             type="text"
             id="img_url"
             name="img_url"
             value={article.img_url}
             onChange={handleChange}
           />
    </div>
    <div>
    <label htmlFor="user_id">Username:</label>
    <input
    type="text"
    id="user_id"
    name="user_id"
    value={currentUser?.username || ""}
    onChange={handleChange}
    disabled
    />
    </div>
    <div>
    <label htmlFor="category_id">Category</label>
    <select
             id="category_id"
             name="category_id"
             value={article.category_id}
             onChange={handleChange}
           >
    <option value="">--Select a category--</option>
    {categories.map(category => (
    <option key={category.id} value={category.id}>
    {category.content}
    </option>
    ))}
    </select>
    </div>
    <button type="submit">Create Article</button>
    </form>
    </div>
    );
    }
    
    export default NewArticle;

