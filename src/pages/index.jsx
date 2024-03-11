import React from 'react'
import { useState, useEffect } from 'react'
import postData from '../posts.json'
import Article from '../components/Article'
import Search from '../components/Search'


function Homepage() {
    const [posts, setPosts] =  useState(postData);
    const [totlaPosts, setTotalPosts] = useState(0);
    const [externalPosts, setExternalPosts] = useState([]);

    const onSearchChange = (value) => {
        const filteredPosts = postData.filter(item => item.title.includes(value));
        setPosts(filteredPosts);
        setTotalPosts(filteredPosts.length);
    }



    // Multiple UseEffect
    // useEffect(() => {
    //     console.log("Ok");
    // },[])

    return (
        <>
            <h1>Halaman Blog</h1>
            <Search onSearchChange={onSearchChange} totlaPosts={totlaPosts} />
            <div>
                {posts.map((props, index) => {
                return (
                    <>
                    <Article {...props} key={index} />
                    </>
                )
            })}
            <hr />
            </div>
        </>
    )
}

export default Homepage;



            {/* <div>
            {posts.map(({ title, date, tags}, index) => {
                return (
                    <>
                        <Article {...{ title, date, tags }} key={index} />
                    </>
                )
            })}
            </div> */}

            // <div>
            //     {posts.map((blog, i) => {
            //     return (
            //         <>
            //         <Search />
            //         <Article title={blog.title} date={blog.date} tags={blog.tags} key={i} />
            //         </>
            //     )
            // })}
            // </div>