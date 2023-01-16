import React from "react";
import Article from "./Article";

function ArticleList(props) {
    return(
        <main>
            {props.posts.map((post)=>
            <Article
            key={post.id}
            title={post.title}
            Date={post.date}
            preview={post.preview}
            minutes={post.minutes}/>
            )}
        </main>
    )
}
export default ArticleList;