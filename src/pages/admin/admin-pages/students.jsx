import Heading from "../../../components/admin/haeding.jsx"
import Admin_nav from "../../../components/admin/admin-nav.jsx"
import Detail_box from "../../../components/admin/detail-box.jsx"
import {ClipboardList,ShieldCheck,Hourglass} from  "lucide-react"
import Table_head from "../../../components/admin/table_head.jsx"
import Table_cnt from "../../../components/admin/table-cnt.jsx"
import students_thunk from "../../../redux-toolkit/Admin/get_students.js"
import { useSelector,useDispatch } from "react-redux"
import { useEffect,useState } from "react"


import toggle_student_status_thunk from "../../../redux-toolkit/Admin/toggle_student_status.js"

  

const Admin_Students = ()=>{
  

    const status_handler=(id)=>{
    dispatch(toggle_student_status_thunk(id))
    dispatch(students_thunk())

}

const students = useSelector((state)=>state.user.data)
const dispatch = useDispatch()
console.log(students)
const student_data = students.student
useEffect( ()=>{

   dispatch(students_thunk())
   


},[])

    return(
<div className="flex h-screen w-screen   backdrop-blur-2xl adminbg">


<Admin_nav />

<div className="flex flex-1 flex-col ">

    <Heading heading={"Students Management"} />
<div className="flex flex-1 h-full shrink-0 bh-gray-700 px-5 pb-3  ">










<Table_head
  content={
    students?.student?.slice()?.reverse()?.map((e,i) => (
      <Table_cnt
      s_no={i+1}
        key={e._id}
        first={[e.fullname, e.email, e.phone_no]}
        sec={e.roll_no}
        third={[e.department]}
        four={[e.sem]}
        five={e.isactive?["True"]:["False"]}
        six={e.isactive?"DeActivate":"Activate"}
        handle_status={()=>{status_handler(e._id)}}
        
      />
    ))
  }
  heading={["Profile","Roll_No.","Course","Sem/Year","Status","Action"]}
/>

















<div className="w-[25%] h-full p-2 gap-3  flex flex-col justify-center items-center"><Detail_box icon={<ClipboardList color="#60A5FA" /> } title={"Total Student"} num={students.total} /> 
<Detail_box icon={<ShieldCheck color="#60A5FA" /> } title={"Approved Students"} num={students.active} />
<Detail_box icon={<Hourglass color="#DC2626" /> } title={"Pending Student"} num={students.inactive} />

</div>








</div>








</div>












</div>




    )
}

export default Admin_Students