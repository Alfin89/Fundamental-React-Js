import { useState, useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'


function SinglePost() {
    const post = useLoaderData();
    // const params = useParams();
    // const [post, setPost] = useState(null)

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    //     .then(response => response.json())
    //     .then(json => setPost(json))
    // }, []);

    return (
        <>
            <h2>Post</h2>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
        </>
    )
}

export default SinglePost;