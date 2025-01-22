import React, { useEffect, useState } from 'react';
import "../styles/About.css";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}



const About: React.FC = () => {
    
    const [data, setData] = useState<Post[] | null>(null);
    const [visibleItems, setVisibleItems] = useState<number>(12);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));


    }, []);
    
    const showMoreItems = () => {
        setVisibleItems(visibleItems + 12);
    }
    
    return (
        <div>
            <div className="grid-container">
            {
                data ? (
                    data.slice(0, visibleItems).map((post: Post) => (
                        <div key={post.id} className="grid-item">
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
            )}
            </div>
            {data && visibleItems < data.length && (
                <button onClick={showMoreItems}>Show more</button>
            )}
        </div>
    );
}

export default About;