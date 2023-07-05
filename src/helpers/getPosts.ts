import { UserPost } from "../models"

const URL:string = 'https://jsonplaceholder.typicode.com/posts?userId='

const getPosts:(userId:number)=>Promise<UserPost[]> = async(userId:number)=>{
    const res = await fetch(URL+userId)
    const posts:UserPost[] = await res.json()
    return posts
}

export default getPosts;