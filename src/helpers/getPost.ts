import { Post } from "../models"

const URL = 'https://jsonplaceholder.typicode.com/posts/1'

const getPost:()=>Promise<Post> = async()=>{
    const res = await fetch(URL)
    const data:Post = await res.json()
    return data
}

export default getPost