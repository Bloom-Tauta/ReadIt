// import React from 'react'
// import './article.css';
// import {Link} from "react-router-dom";
// import ReactMarkdown from "react-markdown";


// function Article({ articles }) {
//   return (
//     <div>
//       <div className="article-container">
//         <div className="article-row">
//           {articles.map((item, index) => {
//             const words = item.name.split(' ');

//             const shortDescription = words.slice(0, 15).join(' ');

//             return (
//               <div className="article-box" key={index}>
//                 <img src={item.img_url} alt="loading..." />
//                 <h1>{item.genre}</h1>
//                 <div className="article-content">
//                   <ReactMarkdown>{shortDescription}</ReactMarkdown>
//                   <small>
//                     <p>By: {item.user.username}</p>
//                     <p>Category {item.category.content}</p>

//                   </small>
//                 </div>
//                 <button className="article-button"><Link to={`/articles/${item.id}`}>see more...</Link></button>
//               </div>
//             );
//           })}

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Article;


import React from 'react';
import './article.css';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

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
                    <p>Category {item.category.content}</p>
                  </small>
                </div>
                <button className="article-button">
                  <Link to={`/articles/${item.id}`}>see more...</Link>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Article;


