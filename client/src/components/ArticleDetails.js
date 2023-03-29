import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


function ArticleDetails() {
    
    let { article_id } = useParams();
    const [article, setArtice] = useState({
        
    });

    return (
        <div>

        </div>
    )
}
 export default ArticleDetails;