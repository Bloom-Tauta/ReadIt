import React from 'react'

function Reviews() {

  const [articles, setArticles] = useState([]);
  const [filtered_articles, setFilteredArticles] = useState([]);

  useEffect(() => {
    fetch(`/articles/reviews${id}`)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
        setFilteredArticles(data);
      });
  }, []);
    
  return (
    <div>
      
    </div>
  )
}

export default Reviews
