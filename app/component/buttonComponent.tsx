"use client"

import { revalidateTag } from 'next/cache';
import { Button } from '../../components/ui/button'


const ButtonComponent = ({index}:{index:string}) => {

const handleDelete = async(index: string) => {
  await fetch(`/api/codes`,{
   

    method:"delete",
    headers:{
      "Content-Type":"aplication/json"
    },
    body:JSON.stringify(index)
    
}).then(res=>{
  console.log(res.json())
})
location.reload();



};

  return (
    <Button variant="destructive" onClick={()=>handleDelete(index)}>Delete</Button>
  )
}

export default ButtonComponent