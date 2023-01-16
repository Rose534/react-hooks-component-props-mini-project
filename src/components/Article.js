import React from "react"

function Article(props) {
    let minutesEmoji = ''
    if(props.minutes<30){
        const min = Math.ceil(props.minutes/5)
        for(let i=0;i<min;i++){
            minutesEmoji += ':coffee:️'
        }
        minutesEmoji += ' ' + props.minutes + ' min read'
    }else {
        const min = Math.ceil(props.minutes/10)
        for(let i=0;i<min;i++){
            minutesEmoji += ':bento:'
        }
        minutesEmoji += ' ' + props.minutes + ' min read'
    }
    return (
    <article>
      <h3>{props.title}</h3>
      <small>{props.date || "January 1, 1970"}</small>
      <p>{props.preview}</p>
      <span>{minutesEmoji}</span>
    </article>
  );
  }
  export default Article;

