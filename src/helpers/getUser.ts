import { UserAPI } from "../models"

const URL:string = 'https://jsonplaceholder.typicode.com/users/'

const getUser:()=>Promise<UserAPI> = async()=>{
    const userId = Math.floor(Math.random()*10)+1
    const res = await fetch(URL+userId)
    const user:UserAPI = await res.json()
    return user
}

export default getUser;