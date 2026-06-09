import Heading from "../../../components/admin/haeding.jsx"
import Admin_nav from "../../../components/admin/admin-nav.jsx"
import Detail_box from "../../../components/admin/detail-box.jsx"
import {ClipboardList,ShieldCheck,Hourglass} from  "lucide-react"
import Table_head from "../../../components/admin/table_head.jsx"
import Table_cnt from "../../../components/admin/table-cnt.jsx"
import get_book_thunk from "../../../redux-toolkit/Admin/get_books.js"
import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
const Admin_Books= ()=>{
const data = useSelector((state)=>state.book.data)
const dispatch = useDispatch()
console.log(data)
useEffect(()=>{
 dispatch(get_book_thunk())
},[])

    return(
<div className="flex h-screen w-screen adminbg  backdrop-blur-2xl">


<Admin_nav />

<div className="flex flex-1 flex-col ">

       <Heading heading={"Books Management"} />
<div className="flex flex-1 h-full shrink-0 bh-gray-700 px-5 pb-3  ">




    



<Table_head

content={data?.books?.map((e,i)=>{
return(
    <Table_cnt
    key={i}
first={[e.title,`${e.edition} Edition`]}
sec={e.call_no}
third={[e.course]}
four={[e.shelf]}
five={[e.condition]}
six={e.status}
s_no={i+1}
/>
)

})}

heading={[ "Title ","Call_No.","Course","Shelf","Condition","Status"]}

/>








<div className="w-[25%] h-full p-2 gap-3  flex flex-col justify-center items-center"><Detail_box icon={<ClipboardList color="#60A5FA" /> } title={"Total Books"} num={data.total_book} /> 
<Detail_box icon={<ShieldCheck color="#60A5FA" /> } title={"Available Books"} num={data.total_available_book} />
<Detail_box icon={<Hourglass color="#DC2626" /> } title={"Borrowed Books"} num={data.total_issued_book} />

</div>








</div>








</div>












</div>






    )
}

export default Admin_Books