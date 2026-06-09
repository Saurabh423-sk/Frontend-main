






const Table_head = ({content,heading})=>{

    return(

        <div className=" flex flex-1 shrink-0 h-full rounded-4xl  shadow-2xl  shadow-gray-300 ">
    
    
    <div className=" w-full flex flex-col bg-white rounded-4xl shadow-2xl h-[85vh]  shadow-gray-300 ">

        <div className="w-full flex justify-around items-center rounded-t-4xl bg-linear-to-br from-blue-600 to-black/80 shrink-0 px-1 py-1   gap-5  pr-2 text-white text-2xl font-semibold ">
        
<span className="pr-15 pl-6">{heading[0]}</span>
<span>{heading[1]}</span>
<span>{heading[2]}</span>
<span>{heading[3]}</span>
<span>{heading[4]}</span>
<span>{heading[6]}</span>
<span>{heading[5]}</span>
<span>{heading[7]}</span>

        
        </div>



<div className="flex flex-1 flex-col h-full   justify-start gap-2 items-start rounded-b-4xl p-3 pr-7 bg-blue-200 overflow-y-auto custom-scroll ">
    
 
   
 {content}
    

    </div>





    </div>
  
    
    
    
    
    </div>
    )
}

export default Table_head