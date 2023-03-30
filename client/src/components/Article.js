import React from 'react'
import './article.css';
import {Link} from "react-router-dom";
import ReactMarkdown from "react-markdown";


function Article({ articles }) {
  return (
    <div>
      <div className="article-container">
        <div className="article-row">
          {articles.map((item, index) => {
            const words = item.name.split(' ');

            const shortDescription = words.slice(0, 15).join(' ');

            return (
              <div className="article-box" key={index}>
                <img src={item.img_url} alt="loading..." />
                <h1>{item.genre}</h1>
                <div className="article-content">
                  <ReactMarkdown>{shortDescription}</ReactMarkdown>
                  <small>
                    <p>By: {item.user.username}</p>
                  </small>
                </div>
                <button className="article-button "><Link to={`/article/${item.id}`}>see more...</Link></button>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}

export default Article;




/////// SECOND PART


// import React, { useEffect, useState } from 'react';
// import { useParams } from "react-router-dom";
// import ReactMarkdown from "react-markdown";
// import './article.css';


// const initialState = {
//   article: null,
//   error: null,
//   status: "pending",
// };

// function Category() {
//   const [{ article, error, status }, setState] = useState(initialState);
//   const { id } = useParams()

//   useEffect(() => {
//     setState(initialState);
//     fetch(`/articles/${id}`).then((r) => {
//       if (r.ok) {
//         r.json().then((article) =>
//           setState({ article, error: null, status: "resolved" }));
//       } else {
//         r.json().then((message) => setState({ article: null, error: message.error, status: "rejected" }));
//       }
//     })
//   }, [id]);

//   if (status === "pending") return <h1>Loading....</h1>;
//   if (status === "accepted" && article) {
//     const {  name, img_url, genre, rating } = article;
//     return (
//       <div className="category-container">
//         <div className="category-row">
//           <div className="category-box">
//             <img src={img_url} alt="loading..." />
//             <h1>{genre}</h1>
//             <div className="category-content">
//               <ReactMarkdown>{name}</ReactMarkdown>
//               <small>
//                 <p>{rating}</p>
//               </small>
//             </div>
//             <div className="category-description">
//               Description1
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }




//   // if (status === "rejected") {
//   //   return <h1>Login to view content</h1>;
//   // } else {
//   //   return <h1>{error}</h1>;
//   // }
// }

// export default Category;











