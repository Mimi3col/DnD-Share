import { useState, useEffect } from 'react';
import { supabase } from './client';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]); 
  const [post,setPost] = useState({
    title:'',
    content:''
}) 

const {title, content} = post

useEffect( () =>{
  fetchPosts()
},[])


async function fetchPosts(){
  const {data} = await supabase
  .from('posts')
  .select()
  setPosts(data)
  console.log('data: ',data)
}

async function createPost(){
  await supabase 
  .from('posts')
  .insert([
    {title, content}
  ])
  .single()
  setPost({title:"", content:""})
  fetchPosts()
}




  return (
    <div className='App m-8 '>
      <div className=' '>
        <div className=' flex flex-row gap-3  justify-center'>
          <input
            className='placeholder:italic placeholder:text-slate-500 block bg-white border-2 border-sky-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-300 focus:ring-green-300 focus:ring-1 sm:text-sm h-10'
            placeholder='title'
            value={title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
          <input
            className='placeholder:italic placeholder:text-slate-500 block bg-white border-2 border-sky-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-300 focus:ring-green-300 focus:ring-1 sm:text-sm h-10 '
            placeholder='content'
            value={content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
          />
          <button
            className='rounded-lg bg-sky-300 text-slate-900 hover:bg-green-300  py-1 px-1 h-10'
            onClick={createPost}>
            {' '}
            create post{' '}
          </button>
        </div>
      </div>
      {posts.map((post) => (
        <div
          key={post.id}
          className=' text-center'>
          <h1 className=' text-white  text-2xl font-bold'> {post.title} </h1>
          <p className=' text-md text-white'> {post.content} </p>
        </div>
      ))}
    </div>
  );
}

export default App;
