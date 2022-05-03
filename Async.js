import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";


const Async = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response.data);
        setData(response.data)

    };

    const addPost = async()=>{
        const post ={name:"New name", email:"abc@infosys.com"}
        await axios.post("https://jsonplaceholder.typicode.com/users",post);
        setData([ ...data,post]);
    }

    const handleDelete = async post =>{
        await axios.delete ("https://jsonplaceholder.typicode.com/users" +"/"+post.id +post)
        setData(data.filter(p => p.id !== post.id))
    }


    const handleUpdate = async (post) =>{
        console.log(post);
         post.name = "Updated Title";
         await axios.put("https://jsonplaceholder.typicode.com/users" + "/" + post.id);
        const postsClone = [...data];
        const index = postsClone.indexOf(data);
        console.log(index);
        postsClone[index] = {...post};
        console.log(postsClone[index]);
        setData(postsClone);
    }

    console.log(data);
    return <>
    <button className="btn btn-primary" onClick={addPost} >Add post</button>
            <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((obj) => {
                            return <tr key={obj.id}>
                                <td>{obj.name}</td>
                                <td>{obj.email}</td>
                                <td><button className="btn btn-info btn-sm" onClick={()=>handleUpdate(obj)}  >Update</button></td>
                                <td><button className="btn btn-danger btn-sm"  onClick={()=>{handleDelete(obj)}}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table></>
}
export default Async;
