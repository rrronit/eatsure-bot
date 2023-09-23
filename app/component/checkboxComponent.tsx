"use client"

import { Checkbox } from '../../components/ui/checkbox'
type props={
   
    index:string,
    used:boolean,
    toggle:(index:string,used:boolean)=>void,
    setUsed:React.Dispatch<React.SetStateAction<boolean>>
}

const CheckboxComponent = ({index,used,toggle,setUsed}:props) => {
 
 
  return (
    <Checkbox
    defaultChecked={used}
    onClick={e=>toggle(index,used)}
    id={`code-${index}`}
    className="h-6 w-6 text-indigo-400 focus:ring-indigo-500"
  />
  )
}

export default CheckboxComponent