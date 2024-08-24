
/* 
What is Server-Side Rendering (SSR)?
Unlike static site generation, server-side rendering focuses on or renders a page in real-time. In this scenario, when you visit a website, the computer that hosts the website creates the page for you, like a chef preparing a dish as you order it at a restaurant.

SSR is great for web pages that need to show real-time information, updates, or content that frequently changes. In the same way, a restaurant can customize an order to your specific preference; that’s the same way a server-side rendered website prepares the page you want to visit as soon as you hit ‘Enter’.

You can see your realtime updated data in: view-source:http://localhost:3000/ssr
*/

import React from 'react'
interface Iposts{
    userId: number,
    id: number,
    title: string,
    body: string,
  }
function Ssr({posts}: {posts: Iposts[]}) {
  return (
    <div className={`flex min-h-screen flex-col items-center justify-between`}>
        <h1>hello</h1>
        <ul>
        {posts && posts.map((post: Iposts) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}


export async function getServerSideProps(){
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(url);
    const data = await res.json();

    return {
        props: {
            posts: data
        }
    }
}

export default Ssr