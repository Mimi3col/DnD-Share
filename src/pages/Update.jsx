import { useState, useEffect } from "react";
import { supabase } from "../client";

export const Update = () =>{
    const[id, setIdNum]=useState('')
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

const [updatePostList, setUpdatePost] = useState({
  charName: '',
  race: '',
  strength: '',
  dexterity: '',
  constitution: '',
  intelligence: '',
  wisdom: '',
  charisma: '',
});


const { charName, race, strength, dexterity, constitution, intelligence, wisdom, charisma } = post;

// useEffect(() => {
//   fetchPosts();
// }, []);

// async function fetchPosts(id) {
//   const { data } = await supabase
//   .from('posts')
//   .select();
//     setPost(data)
//   .eq('id', id ); // Correct
// }



// async function updatePost(id) {
//     console.log(id); 
//   const { data } = await supabase
//   .from('posts')
//   .update({ charName: 'sam' })
//   .eq('id', id);
// }



return (
  <div className=' m-8 '>
    <div className='text-center  text-white'>
      <p className='font-bold  text-3xl'>D&D Share: Update Player</p>
      <p>Update the Specified player</p>
    </div>
    <div className='  justify-center'>
      <input
        className='placeholder:italic placeholder:text-slate-500 block bg-white border-2 border-sky-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-300 focus:ring-green-300 focus:ring-1 sm:text-sm h-10'
        placeholder='Id Num'
        value={id}
        onChange={(e) => setIdNum(e.target.value)}
      />
      <div className=' InputList flex flex-col gap-3  '>
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
          //onClick={(e) => updatePost(post.id)}>
          >{' '}
          update post{' '}
        </button>
      </div>
    </div>
  </div>
);

}