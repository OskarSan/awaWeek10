import React, { useEffect, useState } from 'react';


interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}



const About: React.FC = () => {
    
    const [data, setData] = useState<Post[] | null>(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));


    }, []);
    
    
    
    return (
        <div>
            {
                data ? (
                    data.map((post: Post) => (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
            )}
        </div>
    );
}

export default About;