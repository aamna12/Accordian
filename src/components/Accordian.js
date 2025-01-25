import React,{useState} from 'react';
import data from "./data.js";

function Accordian() {

  const [selected,setSelected]=useState(null);
  const [enableMultiSelection,setEnableMultiSelection]=useState(false);
  const [multiSelected,setMultiSelected]=useState([]);

  const handleSingleSelection=(id)=>{
    setSelected(id===selected?null:id);
  }

  const handleMultiSelection=(id)=>{
    let cpyMutltiple=[...multiSelected];
    const findInd=cpyMutltiple.indexOf(id);
    if (findInd===-1){
      cpyMutltiple.push(id);
    }
    else{
      cpyMutltiple.splice(id,1);
    }
    setMultiSelected(cpyMutltiple);
  }

  return (
    <div className='flex flex-col gap-[20px] 100vh 100vw justify-center items-center mt-10'>
      <button className="px-[20px] py-[10px] bg-orange-800 text-white font-bold text-[20px]
      border-2 border-black" onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection</button>
      <div className='w-[500px]'>
        { data && data.length > 0 ? (
            data.map((dataItem)=>(
                <div className='bg-orange-800 mb-[10px] py-[10px] px-[20px]'>
                    <div 
                    onClick={
                      enableMultiSelection ? ()=>handleMultiSelection(dataItem.id) : 
                      ()=>handleSingleSelection(dataItem.id)
                    }
                      className='text-white flex justify-between items-center cursor-pointer'>
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                      enableMultiSelection ?
                      multiSelected.indexOf(dataItem.id)!==-1 && 
                      <div className='text-white h-auto'>
                        {dataItem.answer}
                      </div>
                      : selected===dataItem.id && <div className='text-white h-auto'>{dataItem.answer}</div>
                    }
                </div>
            ))
        ) : 
        <div> No data </div>
        }
      </div>
    </div>
  )
}

export default Accordian
