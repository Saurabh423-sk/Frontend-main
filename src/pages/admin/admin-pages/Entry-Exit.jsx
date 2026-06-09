import Heading from "../../../components/admin/haeding.jsx"
import Admin_nav from "../../../components/admin/admin-nav.jsx"
import Detail_box from "../../../components/admin/detail-box.jsx"
import { ClipboardList, ShieldCheck, Hourglass } from "lucide-react"
import Table_head from "../../../components/admin/table_head.jsx"
import Table_cnt from "../../../components/admin/table-cnt.jsx"
import get_entry_exit_thunk from "../../../redux-toolkit/Admin/get_entry_exit.js"
import { useDispatch, useSelector } from "react-redux"
import entry_exit_status_thunk from "../../../redux-toolkit/Admin/approve_entry_exit.js"
import { useEffect } from "react"

const Admin_Entry_Exit = () => {
const students = useSelector((state)=>state.user.data)
  const dispatch = useDispatch()
  const data = useSelector((state) => state.entry_exit.data)
console.log(data)
  const status_handler = (id)=>{
    dispatch(entry_exit_status_thunk(id))
      dispatch(get_entry_exit_thunk())
  }

  useEffect(() => {
    dispatch(get_entry_exit_thunk())
  }, [])

  {console.log(data.responsedata)}

  return (
    <div className="flex h-screen w-screen adminbg backdrop-blur-2xl">

      <Admin_nav />

      <div className="flex flex-1 flex-col">
        <Heading heading={"Entry-Exit Details"} />

        <div className="flex flex-1 h-full px-5 pb-3">

          <div className="h-full w-full bg-white rounded-4xl">

            <Table_head
              content={
                data?.responsedata?.slice()?.reverse()?.map((e,i)=>(
<Table_cnt
                  s_no={i+1}
                  first={[e.fullname,e.course+ "/"+e.sem]}
                  sec={e.roll_no}
                  third={[e.date, e.time]}
                  four={e.action}
                  five={e.status?["True"]:["False"]}
                  six={"Approve"}
                   handle_status={()=>{status_handler(e.id)}}
                />



                ))
              }
              heading={[
                "Profile",
                "Roll_No.",
                "Date/Time",
                "Action",
                "Status",
                "Approved"
              ]}
            />

          </div>

          <div className="w-[25%] h-full p-2 gap-3 flex flex-col justify-center items-center">
            <Detail_box icon={<ClipboardList color="#60A5FA" />} title={"Total Students"} num={students.total} />
            <Detail_box icon={<ShieldCheck color="#60A5FA" />} title={"Today's Entry "} num={data.total_entry} />
            <Detail_box icon={<Hourglass color="#DC2626" />} title={"Today's Exit"} num={data.total_exit} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Admin_Entry_Exit