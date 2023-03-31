// import React, { useState, useEffect } from 'react';
// import Review from './Review';

// function Reviews() {
//   const [reviews, setReviews] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetch('/reviews')
//       .then(response => response.json())
//       .then(data => {
//         setReviews(data);
//         setIsLoading(false);
//       })
//       .catch(error => console.error('Error fetching reviews:', error));
//   }, []);

//   const handleDelete = reviewId => {
//     setReviews(prevReviews => prevReviews.filter(review => review.id !== reviewId));
//   };

//   const handleUpdate = updatedReview => {
//     setReviews(prevReviews => prevReviews.map(review => {
//       if (review.id === updatedReview.id) {
//         return updatedReview;
//       } else {
//         return review;
//       }
//     }));
//   };

//   return (
//     <div>
//     <h1>Reviews</h1>
//     <ul>
//     {reviews.map((review) => (
//     <li key={review.id}>
//     <p>{review.comment}</p>
//     <p>Rating: {review.rating}</p>
//     <p>Author: {review.user.username}</p>
//     <button onClick={() => handleDelete(review.id)}>Delete</button>
//     </li>
//     ))}
//     </ul>
//     <h2>Add a review:</h2>
//     <form onSubmit={handleSubmit}>
//     <div>
//     <label htmlFor="comment">Comment:</label>
//     <textarea
//              id="comment"
//              name="comment"
//              value={newReview.comment}
//              onChange={handleChange}
//            />
//     </div>
//     <div>
//     <label htmlFor="rating">Rating:</label>
//     <input
//              type="number"
//              id="rating"
//              name="rating"
//              min="1"
//              max="5"
//              value={newReview.rating}
//              onChange={handleChange}
//            />
//     </div>
//     <button type="submit">Submit</button>
//     </form>
//     </div>
//     );
//     }
    
//     export default Reviews;


import React, { useState, useEffect } from 'react';
import Review from './Review';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newReview, setNewReview] = useState({
    comment: "",
    rating: ""
  });

  useEffect(() => {
    fetch('/reviews')
      .then(response => response.json())
      .then(data => {
        setReviews(data);
        setIsLoading(false);
      })
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  const handleDelete = reviewId => {
    fetch(`/reviews/${reviewId}`, {
      method: 'DELETE'
    })
      .then(() => {
        setReviews(prevReviews => prevReviews.filter(review => review.id !== reviewId));
      })
      .catch(error => console.error('Error deleting review:', error));
  };

  const handleUpdate = updatedReview => {
    fetch(`/reviews/${updatedReview.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedReview)
    })
      .then(() => {
        setReviews(prevReviews => prevReviews.map(review => {
          if (review.id === updatedReview.id) {
            return updatedReview;
          } else {
            return review;
          }
        }));
      })
      .catch(error => console.error('Error updating review:', error));
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setNewReview(prevReview => ({
      ...prevReview,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetch('/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReview)
    })
      .then(response => response.json())
      .then(data => {
        setReviews(prevReviews => [...prevReviews, data]);
        setNewReview({
          comment: "",
          rating: ""
        });
      })
      .catch(error => console.error('Error adding review:', error));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Reviews</h1>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.comment}</p>
            <p>Rating: {review.rating}</p>
            <p>Author: {review.user.name}</p>
            <Review review={review} onDelete={handleDelete} onUpdate={handleUpdate} />
          </li>
        ))}
      </ul>
      <h2>Add a review:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            name="comment"
            value={newReview.comment}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            value={newReview.rating}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Reviews;
