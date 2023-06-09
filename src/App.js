import { useState, useEffect } from 'react';
import { supabase } from './client';
import './App.css';
import { Update } from './pages/Update';

function App() {
  const [posts, setPosts] = useState([]); 
  const [post, setPost] = useState({
    charName: '',
    race: '',
    strength: '',
    dexterity: '',
    constitution: '',
    intelligence: '',
    wisdom: '',
    charisma: '',
  }); 


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

// async function createPost(){
//   await supabase 
//   .from('posts')
//   .insert([
//     {title, content}
//   ])
//   .single()
//   setPost({title:"", content:""})
//   fetchPosts()
// }

async function deletePost(id){

const { data} = await supabase
.from('posts')
.delete() 
.eq('id', id )
console.log('the id was:', id)
fetchPosts()
}








  return (
    <div className='App m-8 '>
      <div className=' text-center font-bold  text-3xl text-white'>D&D Share</div>
      <div className=' flex flex-row  gap-3 justify-center '>
        {posts.map((post) => (
          <div
            key={post.id}
            className='Card text-center text-white border-2 border-sky-300 shadow-md shadow-sky-300 hover:border-green-300 hover:shadow-green-300 py-2 px-2'>
            <p> Id Num: {post.id}</p>
            <p>
              <a className=' font-semibold'>Name:</a>
              {'   '}
              {post.charName}
            </p>
            <p>
              <a className=' font-semibold'>Race:</a>
              {'   '}
              {post.race}
            </p>
            <p>
              <a className=' font-semibold'>strength:</a>
              {'   '}
              {post.strength}
            </p>
            <p>
              <a className=' font-semibold'>dexterity:</a>
              {'   '}
              {post.dexterity}
            </p>
            <p>
              <a className=' font-semibold'>constitution:</a>
              {'   '}
              {post.constitution}
            </p>
            <p>
              <a className=' font-semibold'>wisdom:</a>
              {'   '}
              {post.wisdom}
            </p>
            <p>
              <a className=' font-semibold'>charisma:</a>
              {'   '}
              {post.charisma}
            </p>
            <div className='  '>
            <button
              className='rounded-lg bg-sky-300 text-slate-900 hover:bg-green-300  py-1 px-1'
              onClick={(e) => deletePost(post.id)}>
              {' '}
              Delete{' '}
            </button>
            {'   '}
            <a
              href='/Update'
              className='rounded-lg bg-sky-300 text-slate-900 hover:bg-green-300  py-1 px-1 '
              >
              {' '}
              Update{' '}
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
