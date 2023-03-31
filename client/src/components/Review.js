import React, { useState } from 'react';

function Review({ review, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedReview, setUpdatedReview] = useState(review);

  const handleDelete = () => {
    fetch(`/reviews/${review.id}`, {
      method: 'DELETE'
    })
      .then(() => onDelete(review.id))
      .catch(error => console.error('Error deleting review:', error));
  };

  const handleUpdate = () => {
    fetch(`/reviews/${review.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedReview)
    })
      .then(() => {
        setIsEditing(false);
        onUpdate(updatedReview);
      })
      .catch(error => console.error('Error updating review:', error));
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUpdatedReview(prevReview => ({
      ...prevReview,
      [name]: value
    }));
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" name="content" value={updatedReview.content} onChange={handleChange} />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <p>{review.content}</p>
          <p>By: {review.user.name}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default Review;
