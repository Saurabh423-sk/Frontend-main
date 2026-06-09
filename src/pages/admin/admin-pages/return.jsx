import Heading from "../../../components/admin/haeding.jsx"
import Admin_nav from "../../../components/admin/admin-nav.jsx"
import Detail_box from "../../../components/admin/detail-box.jsx"
import {ClipboardList,ShieldCheck,Hourglass} from  "lucide-react"
import Table_head from "../../../components/admin/table_head.jsx"
import Table_cnt from "../../../components/admin/table-cnt.jsx"
import get_borrow_return_thunk from "../../../redux-toolkit/Admin/get_borrow_return.js"
import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import  borrow_return_status_thunk from "../../../redux-toolkit/Admin/approve_borrow_return.js"
const Admin_Return = ()=>{
const info = useSelector((state)=>state.book.data)
    const dispatch = useDispatch()

    const status_handler=(id)=>{
    dispatch(borrow_return_status_thunk(id))
    dispatch(get_borrow_return_thunk())
}
const rawdata = useSelector((state)=>state.borrow_return.data);
    useEffect(()=>{
    
    dispatch(get_borrow_return_thunk())


},[])

    const returndata= rawdata?.response?.filter((e)=>e.action == "return")


{
    console.log(returndata)
}


      return(
<div className="flex h-screen w-screen adminbg  backdrop-blur-2xl">


<Admin_nav />

<div className="flex flex-1 flex-col ">

       <Heading heading={"Returned Books Details "} />
<div className="flex flex-1 h-full shrink-0 bh-gray-700 px-5 pb-3  ">










    
    
    <div className="h-full w-full bg-white rounded-4xl">

        

<Table_head

content={returndata?.map((e,i)=>(

    <Table_cnt
    key={i}
    s_no={i+1}
first={[e.title,e.edition+"Edition"]}
sec={e.call_no}
third={[e.fullname,e.roll]}
four={e.course+"/"+e.sem}

five={[e.date,e.status?"True":"False"]}
six={e.status?"disapprove":"Approve"}
seven={"5"}
handle_status={()=>{status_handler(e.id)}}

/>
))}

heading={[ "Title ","Call_No.","Name/Roll","Course/Sem","D-O-R","Approved"]}

/>
    </div>
  
    
    
    
    
   








<div className="w-[25%] h-full p-2 gap-3  flex flex-col justify-center items-center"><Detail_box icon={<ClipboardList color="#60A5FA" /> } title={"Total Books"} num={info.total_book} /> 
<Detail_box icon={<ShieldCheck color="#60A5FA" /> } title={"Available Books"} num={info.total_available_book} />
<Detail_box icon={<Hourglass color="#DC2626" /> } title={"Borrowed Books"} num={info.total_issued_book} />

</div>








</div>








</div>












</div>






    )
}

export default Admin_Return