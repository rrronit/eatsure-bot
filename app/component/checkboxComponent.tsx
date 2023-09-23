"use client"

import { Checkbox } from '../../components/ui/checkbox'
type props={
   
    index:string,
    used:boolean,
    setUsed:React.Dispatch<React.SetStateAction<boolean>>
}

const CheckboxComponent = ({index,used,setUsed}:props) => {
 
  const handleChange = async(index: string) => {
    setUsed(prev=>!prev)
    await fetch(`/api/codes`,{
          method:"put",
          headers:{
            "Content-Type":"aplication/json"
          },
          body:JSON.stringify(index)
      })
     };

     
  return (
    <Checkbox checked={used}
    onClick={()=>handleChange(index)}
    id={`code-${index}`}
    className="h-6 w-6 text-indigo-400 focus:ring-indigo-500"
  />
  )
}

export default CheckboxComponent