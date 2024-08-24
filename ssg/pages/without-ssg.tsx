import React, {useState, useEffect} from 'react'

interface Iposts{
  userId: number,
  id: number,
  title: string,
  body: string,
}

function Posts() {
  const [posts, setPosts] = useState<null | Iposts[]>(null)

  async function f(){
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(url);
    const data = await res.json();    
    setPosts(data);
  }

  useEffect(() => {
    f();
  }, [])

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
export default Posts