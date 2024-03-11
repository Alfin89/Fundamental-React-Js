import { useState, useEffect } from 'react'
import { Link, useLoaderData } from 'react-router-dom';

function Blog() {
    const posts = useLoaderData()
    // const [posts, setPosts] =  useState([]);
    

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(json => setPosts(json))
    // }, []);

    return (
        <>
            <h1>My Blog</h1>
            {posts.map((item, index) => (
                <div key={index}>
                    <Link to={`/blog/${item.id}`}> - {item.title}</Link>
                </div>
            ))}
        </>
    )
}

export default Blog;