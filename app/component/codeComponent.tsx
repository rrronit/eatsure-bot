"use client"
import CheckboxComponent from './checkboxComponent'
import ButtonComponent from './buttonComponent'
import { useState } from 'react';

type codeType = {
    id:string,
    code: string,
    used: boolean,
    toggle:(index:string,used:boolean)=>void,
    handleDelete:(index:string)=>void


  };
const CodeComponent = ({id,code,used,toggle,handleDelete}:codeType) => {
  
    const [Used, setUsed] = useState(used)

  return (
    <div
    key={id}
    className="bg-gray-800 m-2 rounded-lg shadow-md p-6 hover:shadow-lg transition-transform transform "
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
       <CheckboxComponent index={id} used={Used} setUsed={setUsed} toggle={toggle} />
        <label
          htmlFor="terms"
          className={`text-lg font-medium leading-none ${
            Used ? 'line-through' : ''
          }`}>
          {code}
        </label>
      </div>
          <ButtonComponent index={id} handleDelete={handleDelete}/>
     
    </div>
  </div>
  )
}

export default CodeComponent