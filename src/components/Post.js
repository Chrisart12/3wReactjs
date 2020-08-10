import React from 'react';

const Post = () => {

    const posts = [
        {id: 16, title: "React Js"},
        {id: 11, title: "React Native"},
        {id: 100, title: "Angular"},
        {id: 7, title: "Symfony"},
        {id: 27, title: "MongoDB"},
    ]

    return (
        <div>
            <div className="text-center">
                {
                    posts.map(post => 
                        <div key={post.id} >{post.title} </div>
                    )
                }
            </div>
        </div>
    );
}

export default Post;
