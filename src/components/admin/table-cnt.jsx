
const Table_cnt= ({first,sec,third,four,five,six,s_no,handle_status})=>{
  
   
    return(

          <div className="flex w-full  items-center pr-3 "> 
   <span className="flex gap-3 w-[21%] ">{s_no}.  <span className="flex flex-col text-sm w-auto  ">
        <p>{first[0]}</p>
        <p>{first[1]}</p>
        <p>{first[2]}</p>
    </span></span>
   <div className="flex flex-1 shrink-0"> 
    <span className="flex-1/4 text-center">{sec}</span>
    <span className="flex-1/4 tracking-tight text-center"><p>{third[0]}</p>
    <p>{third[1]}</p></span>
    <span className="flex-1/4 text-center flex flex-col">{four}</span>
    <span className="flex-1/4 flex flex-col text-center"><p>{five[0]}</p> <p>{five[1]}</p></span>
   
    
    </div>
   <button
   onClick={handle_status}
   className="bg-green-600 px-2 rounded-2xl py-1 active:scale-95 shadow-2xl shadow-gray-300 cursor-pointer w-[13%]">{six}</button>
   </div>
    )
}

export default Table_cnt