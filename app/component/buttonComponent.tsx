"use client"

import { useRouter } from 'next/navigation';
import { Button } from '../../components/ui/button'


const ButtonComponent = ({index,handleDelete}:{index:string,handleDelete:(index:string)=>void}) => {
  const router=useRouter()

const handleClientDelete = async(index: string) => {
  handleDelete(index)
  setTimeout(() => {
    router.refresh()
  }, 500);
  




}; 

  return (
    <Button variant="destructive" onClick={()=>handleClientDelete(index)}>Delete</Button>
  )
}

export default ButtonComponent