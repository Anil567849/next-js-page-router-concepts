/*
What is Static Site Generation (SSG)?
Static Site generation renders a page at build time. This means that for SSG, the process of creating the web page occurs before the site is launched and is accessed by users. Look at it this way: the HTML and content for each web page are pre-rendered or pre-generated, so they are ready and static (unchanging) when the website is deployed to a web server.

When a user visits a page on your site, the pre-rendered or pre-generated static HTML is delivered immediately to their browser, with no additional processing at the time of the user’s request.

You can see your static data in: view-source:http://localhost:3000/with-ssg
*/

import React, {useState, useEffect} from 'react'

interface Iposts{
  userId: number,
  id: number,
  title: string,
  body: string,
}

function Posts({posts}: {posts: Iposts[]}) {

  return (
    <div className={`flex min-h-screen flex-col items-center justify-between`}>
      <h1>Blog Posts</h1>
      <ul>
        {posts && posts.map((post: Iposts) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(url);
    const data = await res.json();

    return {
        props: {
            posts: data,
        }
    }
}

export default Posts