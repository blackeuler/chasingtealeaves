import React from 'react';
import * as Markdown from 'react-markdown';
export const Story = (props) =>{
    const storyNum = props.story;
    const Story = props.posts[storyNum];
        let title = ''; 
        let content = '';
        let img = '';
    if(Story){
         title = Story.title; 
         content = Story.content;
         img = Story.cover.fields.file.url;
    }
    return(
        <article className="pa3 pa5-ns items-center flex flex-column ">
            
            <h1 className="f2">{title}</h1>
            <img src={img} className="w-100 f5 measure" alt=""/>
            <Markdown className='measure lh-copy'source={content}/>
        </article>
    )
};