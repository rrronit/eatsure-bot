"use client"

import { Button } from '../../components/ui/button'


const ButtonComponent = ({index,handleDelete}:{index:string,handleDelete:(index:string)=>void}) => {

const handleClientDelete = async(index: string) => {
  handleDelete(index)
  setTimeout(() => {
    window.location.reload()
  }, 500);
  




}; 

  return (
    <Button variant="destructive" onClick={()=>handleClientDelete(index)}>Delete</Button>
  )
}

export default ButtonComponent