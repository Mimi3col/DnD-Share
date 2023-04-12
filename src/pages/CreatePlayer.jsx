import { useState, useEffect } from "react"
import { supabase } from "../client"


export const CreatePlayer = () =>{
const [posts, setPosts] = useState([]); 
  const [post, setPost] = useState({
    charName:'',
    race:'',
    strength:'',
    dexterity:'',
    constitution:'',
    intelligence:'',
    wisdom:'',
    charisma:'',
  }); 

const {charName, race, strength, dexterity, constitution, intelligence, wisdom,charisma} = post

// useEffect( () =>{
//   fetchPosts()
// },[])


// async function fetchPosts(){
//   const {data} = await supabase
//   .from('posts')
//   .select()
//   setPosts(data)
//   console.log('data: ',data)
// }

async function createPost(){
  await supabase
    .from('posts')
    .insert({
        charName,
        race,
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
    })
    .single();
  setPost({ charName:'',race:'',strength:'',dexterity:'',constitution:'',intelligence:'',wisdom:'',charisma:'' })
  //fetchPosts()
  console.log(post) 
}




  return (
    <div className=' m-8 '>
      <div className='text-center  text-white'>
        <p className='font-bold  text-3xl'>D&D Share: Create Player</p>
        <p>Track the Players ability Score</p>
      </div>

      <div className=' flex flex-col gap-3  justify-center'>
        <input
          className='placeholder:italic placeholder:text-slate-500 block bg-white border-2 border-sky-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-300 focus:ring-green-300 focus:ring-1 sm:text-sm h-10'
          placeholder='Name'
          value={charName}
          onChange={(e) => setPost({ ...post, charName: e.target.value })}
        />
        <input
          className='placeholder:italic placeholder:text-slate-500 block bg-white border-2 border-sky-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-300 focus:ring-green-300 focus:ring-1 sm:text-sm h-10 '
          placeholder='Race'
          value={race}
          onChange={(e) => setPost({ ...post, race: e.target.value })}
        />
        <input
          className='placeholder:italic placeholder:text-slate-500 block bg-white border-2 border-sky-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-300 focus:ring-green-300 focus:ring-1 sm:text-sm h-10'
          placeholder='strength'
          value={strength}
          onChange={(e) => setPost({ ...post, strength: e.target.value })}
        />
        <input
          className='placeholder:italic placeholder:text-slate-500 block bg-white border-2 border-sky-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-300 focus:ring-green-300 focus:ring-1 sm:text-sm h-10 '
          placeholder='dexterity'
          value={dexterity}
          onChange={(e) => setPost({ ...post, dexterity: e.target.value })}
        />
        <input
          className='placeholder:italic placeholder:text-slate-500 block bg-white border-2 border-sky-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-300 focus:ring-green-300 focus:ring-1 sm:text-sm h-10'
          placeholder='constitution'
          value={constitution}
          onChange={(e) => setPost({ ...post, constitution: e.target.value })}
        />
        <input
          className='placeholder:italic placeholder:text-slate-500 block bg-white border-2 border-sky-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-300 focus:ring-green-300 focus:ring-1 sm:text-sm h-10 '
          placeholder='intelligence'
          value={intelligence}
          onChange={(e) => setPost({ ...post, intelligence: e.target.value })}
        />
        <input
          className='placeholder:italic placeholder:text-slate-500 block bg-white border-2 border-sky-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-300 focus:ring-green-300 focus:ring-1 sm:text-sm h-10'
          placeholder='wisdom'
          value={wisdom}
          onChange={(e) => setPost({ ...post, wisdom: e.target.value })}
        />
        <input
          className='placeholder:italic placeholder:text-slate-500 block bg-white border-2 border-sky-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-300 focus:ring-green-300 focus:ring-1 sm:text-sm h-10 '
          placeholder='charisma'
          value={charisma}
          onChange={(e) => setPost({ ...post, charisma: e.target.value })}
        />
        <button
          className='rounded-lg bg-sky-300 text-slate-900 hover:bg-green-300  py-1 px-1 h-10'
          onClick={createPost}>
          {' '}
          create post{' '}
        </button>
      </div>
    </div>
  );
}
