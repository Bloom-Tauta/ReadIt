import React, { useState, useEffect } from 'react';
import './reviews.css'
import { useParams } from 'react-router';

// function Reviews({ articleId, reviews = [], setReviews }) {
//   const [newReview, setNewReview] = useState({
//     user: "",
//     comment: ""
//   });
  
//   const [currentUser, setCurrentUser] = useState(null);
//   let { id } = useParams();
    
//   useEffect(() => {
//     const token = localStorage.token;
//     if (typeof token !== 'undefined' && token.length > 1 && token !== 'undefined') {
//       fetch('/auto_login', {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ token }),
//       })
//         .then((r) => r.json())
//         .then((user) => setCurrentUser(user));
//     } else {
//       console.log('No token found, try logging in!');
//     }
//   }, []);

//   function handleAddReview(event, articleId) {
//     event.preventDefault();
//     fetch(`/reviews?id=${id}`, {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ ...newReview, user: currentUser.username })
//     })
//       .then(res => res.json())
//       .then(data => {
//         setReviews([...reviews, data]);
//         setNewReview({
//           user: "",
//           comment: ""
//         });
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   function handleDeleteReview(reviewId) {
//     fetch(`/reviews/${reviewId}`, {
//       method: 'DELETE',
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//       .then(res => res.json())
//       .then(data => {
//         const updatedReviews = reviews.filter(review => review.id !== reviewId);
//         setReviews(updatedReviews);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setNewReview(prevReview => ({
//       ...prevReview,
//       [name]: value
//     }));
//   }
//   return (
//     <div className="reviews-wrap">
//       <h2>Reviews</h2>
//       {reviews && reviews.length > 0 ? (
//         <ul>
//           {reviews.map(review => (
//             <li key={review.id}>
//               <h3>{review.user}</h3>
//               <p>{review.comment}</p>
//               <button onClick={() => handleDeleteReview(review.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No reviews yet.</p>
//       )}
//       <h3>Add a Review</h3>
//       <form onSubmit={handleAddReview}>
//         <label htmlFor="user">User:</label>
//         <input type="text" id="user" name="user" value={currentUser ? currentUser.username : ''} disabled
// />
// <label htmlFor="comment">Comment:</label>
// <textarea id="comment" name="comment" value={newReview.comment} onChange={handleChange} required></textarea>
// <button type="submit">Submit</button>
// </form>
// </div>
// );
// }

// export default Reviews;




// function Reviews({ articleId, reviews = [], setReviews }) {
//   const [newReview, setNewReview] = useState({
//     user: "",
//     comments: ""
//   });
  
//   const [currentUser, setCurrentUser] = useState(null);
    
//   useEffect(() => {
//     const token = localStorage.token;
//     if (typeof token !== 'undefined' && token.length > 1 && token !== 'undefined') {
//       fetch('/auto_login', {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ token }),
//       })
//         .then((r) => r.json())
//         .then((user) => setCurrentUser(user));
//     } else {
//       console.log('No token found, try logging in!');
//     }
//   }, []);

//   function handleAddReview(event) {
//     event.preventDefault();
//     fetch(`/reviews?id=${articleId}`, {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ ...newReview, user: currentUser.username })
//     })
//       .then(res => res.json())
//       .then(data => {
//         setReviews([...reviews, data]);
//         setNewReview({
//           user: "",
//           comments: ""
//         });
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   function handleDeleteReview(reviewId) {
//     fetch(`/reviews/${reviewId}`, {
//       method: 'DELETE',
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//       .then(res => res.json())
//       .then(data => {
//         const updatedReviews = reviews.filter(review => review.id !== reviewId);
//         setReviews(updatedReviews);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setNewReview(prevReview => ({
//       ...prevReview,
//       [name]: value
//     }));
//   }
//   return (
//     <div className="reviews-wrap">
//       <h2>Reviews</h2>
//       {reviews && reviews.length > 0 ? (
//         <ul>
//           {reviews.map(review => (
//             <li key={review.id}>
//               <h3>{review.user}</h3>
//               <p>{review.comments}</p>
//               <button onClick={() => handleDeleteReview(review.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No reviews yet.</p>
//       )}
//       <h3>Add a Review</h3>
//       <form onSubmit={handleAddReview}>
//         <label htmlFor="user">User:</label>
//         <input type="text" id="user" name="user" value={currentUser ? currentUser.username : ''} disabled
// />
//         <label htmlFor="comments">Comment:</label>
//         <textarea id="comments" name="comments" value={newReview.comments} onChange={handleChange} required></textarea>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
// export default Reviews;


function Reviews({ articleId, reviews = [], setReviews }) {
  const [newReview, setNewReview] = useState({
    comments: ""
  }); // removed the "user" property because it will be set dynamically based on the logged in user

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
  }, []);

  function handleAddReview(event) {
    event.preventDefault();
    if (!currentUser) {
      console.log('No current user found, try logging in!');
      return;
    }
    fetch(`/reviews?id=${articleId}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...newReview, user_id: currentUser.id, article_id: articleId })
    })
      .then(res => res.json())
      .then(data => {
        setReviews([...reviews, data]);
        setNewReview({
          comments: ""
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  

  function handleDeleteReview(reviewId) {
    fetch(`/reviews/${reviewId}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        const updatedReviews = reviews.filter(review => review.id !== reviewId);
        setReviews(updatedReviews);
      })
      .catch(error => {
        console.error(error);
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNewReview(prevReview => ({
      ...prevReview,
      [name]: value
    }));
  }

  return (
    <div className="reviews-wrap">
      <h2>Reviews</h2>
      {reviews && reviews.length > 0 ? (
        <ul>
{reviews.map(review => (
  <li key={review.id}>
    <h3>{review.username}</h3>
    <p>{review.comments}</p>
    <button onClick={() => handleDeleteReview(review.id)}>Delete</button>
  </li>
))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
      <h3>Add a Review</h3>
      <form onSubmit={handleAddReview}>
        <label htmlFor="comments">Comment:</label>
        <textarea id="comments" name="comments" value={newReview.comments} onChange={handleChange} required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Reviews;
