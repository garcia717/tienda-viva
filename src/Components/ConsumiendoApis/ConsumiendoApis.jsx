import { useEffect, useState } from "react";

const ConsumiendoApis = () => {
// const [posts, setPosts] =useState([])
    
//   useEffect(() => {
//     const getData = fetch("https://jsonplaceholder.typicode.com/posts");
//     getData
//            .then((res)=> res.json())
//            .then((res)=> console.log("then", res))
//            .catch((err)=> console.log("catch", err))
           
//   }, []);



//   console.log(posts)
const [isCreated, setIsCreated] = useState(false);
const createPost =()=>{
    const createData = fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        headers: {"Content-tipe": "application/json"},

    body: JSON.stringify({
    title: "Esta es una del front",
    userId:2,
    body:"Probando POST",
}),       
},
createPost.then((res) => setIsCreated(true)),  
);

  return 
  <div>
    <button onClick={createPost}>Crear post</button>
  </div>
  ;
}};

export default ConsumiendoApis;
