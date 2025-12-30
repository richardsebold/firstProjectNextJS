'use client'

import { useEffect, useState } from "react";

export default function Test() {

    const [posts, setPost] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => setPost(data.posts))
    }, [])

    return (
        <div>
            <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Posts</h1>

            <div className="flex flex-col gap-4 ">
                {posts.map((post: any) => (
                    <div key={post.id} className="bg-gray-200 p-4 rounded-md">
                        <h2 className="font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>

            
        </div>
    );
}