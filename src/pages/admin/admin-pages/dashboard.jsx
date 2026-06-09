import Heading from "../../../components/admin/haeding.jsx";
import Admin_nav from "../../../components/admin/admin-nav.jsx";
import { useNavigate } from "react-router-dom";
import students_thunk from "../../../redux-toolkit/Admin/get_students.js"
import get_book_thunk from "../../../redux-toolkit/Admin/get_books.js"
import get_borrow_return_thunk from "../../../redux-toolkit/Admin/get_borrow_return.js"
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const navigate = useNavigate();
 
const book = useSelector((state)=>state.book.data)
const students = useSelector((state)=>state.user.data)
const rawdata = useSelector((state)=>state.borrow_return.data);
const dispatch = useDispatch()


useEffect( ()=>{

   dispatch(students_thunk())
    dispatch(get_book_thunk())
 dispatch(get_borrow_return_thunk())


},[])

  return (
    <>
      <div className="flex h-screen w-screen not-xl:hidden bg-[#0f172a] overflow-hidden">
        <Admin_nav />

        <div className="flex flex-1 flex-col overflow-y-auto">
          <Heading heading={"Dashboard"} />

          {/* ACTION BUTTONS */}
          <div className="px-10 mt-6 flex gap-4">
            <button
              onClick={() => navigate("/addbook")}
              className="px-6 py-2 active:scale-95 cursor-pointer bg-blue-600 hover:bg-blue-700 rounded-xl text-white transition"
            >
              Add Book
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="px-6 py-2 cursor-pointer active:scale-95 bg-purple-600 hover:bg-purple-700 rounded-xl text-white transition"
            >
              Add User
            </button>
          </div>

          {/* MAIN STATS CARDS */}
          <div className="px-10 py-8 grid grid-cols-4 gap-8">
            {[
              { title: "Total Books", value:book.total_book, color: "text-white", route: "/admin_books" },
              { title: "Available Books", value:book.total_available_book, color: "text-green-400", route: "/admin_books" },
              { title: "Issued Books", value:book.total_issued_book, color: "text-red-400", route: "/admin_borrow" },
              { title: "Active Users", value:students.active, color: "text-blue-400", route: "/admin_students" },
            ].map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(item.route)}
                className="bg-[#1e293b] border border-slate-700 p-6 rounded-2xl cursor-pointer hover:border-blue-500 transition"
              >
                <p className="text-gray-400 text-sm">{item.title}</p>
                <h2 className={`text-4xl font-bold mt-3 ${item.color}`}>
                  {item.value}
                </h2>
              </div>
            ))}
          </div>

          {/* DASHBOARD CARD SECTIONS */}
          <div className="px-10 pb-14 space-y-10">

            {/* Books Section */}
            <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-8">
              <div className="flex justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">
                  Books Overview
                </h2>
                <button
                  onClick={() => navigate("/admin_books")}
                  className="text-blue-400 text-sm hover:text-blue-300"
                >
                  View All →
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="bg-[#0f172a] p-6 rounded-xl border border-slate-700">
                  <p className="text-gray-400 text-sm">Total Books</p>
                  <h3 className="text-3xl font-bold text-white mt-2">{book.total_book}</h3>
                </div>

                <div className="bg-[#0f172a] p-6 rounded-xl border border-slate-700">
                  <p className="text-gray-400 text-sm">Available</p>
                  <h3 className="text-3xl font-bold text-green-400 mt-2">{book.total_available_book}</h3>
                </div>

                <div className="bg-[#0f172a] p-6 rounded-xl border border-slate-700">
                  <p className="text-gray-400 text-sm">Issued</p>
                  <h3 className="text-3xl font-bold text-red-400 mt-2">{book.total_issued_book}</h3>
                </div>
              </div>
            </div>

            {/* Issue Requests Section */}
            <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-8">
              <div className="flex justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">
                  Issue / Return  Requests
                </h2>
                <button
                  onClick={() => navigate("/admin_borrow")}
                  className="text-blue-400 text-sm hover:text-blue-300"
                >
                  View All →
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#0f172a] p-6 rounded-xl border border-slate-700">
                  <p className="text-gray-400 text-sm">Pending</p>
                  <h3 className="text-3xl font-bold text-red-400 mt-2">{rawdata.pending}</h3>
                </div>

                <div className="bg-[#0f172a] p-6 rounded-xl border border-slate-700">
                  <p className="text-gray-400 text-sm">Approved</p>
                  <h3 className="text-3xl font-bold text-green-400 mt-2">{rawdata.approved}</h3>
                </div>

                {/* <div className="bg-[#0f172a] p-6 rounded-xl border border-slate-700">
                  <p className="text-gray-400 text-sm">Rejected</p>
                  <h3 className="text-3xl font-bold text-red-400 mt-2">5</h3>
                </div> */}
              </div>
            </div>

            {/* Users Section */}
            <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-8">
              <div className="flex justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">
                  Users Overview
                </h2>
                <button
                  onClick={() => navigate("/admin_students")}
                  className="text-blue-400 text-sm hover:text-blue-300"
                >
                  View All →
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="bg-[#0f172a] p-6 rounded-xl border border-slate-700">
                  <p className="text-gray-400 text-sm">Total Users</p>
                  <h3 className="text-3xl font-bold text-white mt-2">{students.total}</h3>
                </div>

                <div className="bg-[#0f172a] p-6 rounded-xl border border-slate-700">
                  <p className="text-gray-400 text-sm">Active</p>
                  <h3 className="text-3xl font-bold text-green-400 mt-2">{students.active}</h3>
                </div>

                <div className="bg-[#0f172a] p-6 rounded-xl border border-slate-700">
                  <p className="text-gray-400 text-sm">Inactive</p>
                  <h3 className="text-3xl font-bold text-red-400 mt-2">{students.inactive}</h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* MOBILE BLOCK SCREEN */}
      <div className="flex xl:hidden absolute inset-0 bg-[#0f172a] text-white items-center justify-center px-6">
        <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-8 text-center shadow-lg max-w-md">
          <div className="text-5xl mb-4">💻</div>

          <h1 className="text-2xl font-semibold mb-3">
            Desktop Access Only
          </h1>

          <p className="text-gray-400 mb-6">
            The Admin Panel is not accessible on mobile devices.
            <br />
            Please open on PC or Laptop.
          </p>

          <div className="text-sm text-slate-500">
            Recommended screen width: 1024px+
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;



// import Heading from "../../../components/admin/haeding.jsx"
// import Admin_nav from "../../../components/admin/admin-nav.jsx"
// import Table_head from "../../../components/admin/table_head.jsx"
// import Table_cnt from "../../../components/admin/table-cnt.jsx"
// import { Search } from "lucide-react"
// import { useNavigate } from "react-router-dom"

// const Dashboard = ()=>{

// const navigate = useNavigate()

// return(
//     <>
// <div className="flex h-screen w-screen not-xl:hidden bg-[#0f172a] overflow-hidden">

// <Admin_nav />

// <div className="flex flex-1 flex-col overflow-y-auto">

// <Heading heading={"Dashboard"} />

// {/* ================= ACTION BAR ================= */}

// <div className="px-10 mt-6 flex justify-between items-center">


// <div className="flex gap-4">
// <button 
// onClick={()=>navigate("/addbook")}
// className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-white transition cursor-pointer">
// Add Book
// </button>

// <button 
// onClick={()=>navigate("/adduser")}
// className="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-xl text-white transition cursor-pointer">
// Add User
// </button>
// </div>

// </div>


// {/* ================= STATS ================= */}

// <div className="px-10 py-8">
// <div className="grid grid-cols-4 gap-8">

// {[
// {title:"Total Books",value:"190",route:"/admin_books"},
// {title:"Available Books",value:"123",route:"/admin_books"},
// {title:"Issued Books",value:"67",route:"/admin_borrow"},
// {title:"Active Users",value:"320",route:"/admin_students"}
// ].map((item,index)=>(
// <div 
// key={index}
// onClick={()=>navigate(item.route)}
// className="bg-[#1e293b] border border-slate-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition cursor-pointer"
// >
// <h2 className="text-sm text-gray-400">{item.title}</h2>
// <p className="text-4xl font-bold text-white mt-3">{item.value}</p>
// </div>
// ))}

// </div>
// </div>


// {/* ================= TABLE SECTIONS ================= */}

// <div className="px-10 pb-14 space-y-14">

// {[
// {
// title:"Books Overview",
// route:"/admin_books",
// component:
// <Table_head
// content={<Table_cnt
// first={["Let Us C","6th Edition"]}
// sec={"7"}
// third={"BCA"}
// four={"8"}
// five={"123"}
// six={"190"}
// />}
// heading={[ "Title ","Call_No.","Course","Shelf","Available","Total"]}
// />
// },
// {
// title:"Issue Requests",
// route:"/admin_borrow",
// component:
// <Table_head
// content={<Table_cnt
// first={["Let Us C","6th Edition"]}
// sec={"7"}
// third={"md ahsan khan / 7"}
// four={"BCA / 3"}
// five={"2-3-2026"}
// six={"Approved"}
// seven={"5"}
// />}
// heading={[ "Title ","Call_No.","Name/Roll","Course/Sem","D-O-I","Approved"]}
// />
// },
// {
// title:"Users Entry-Exit",
// route:"/admin_entry_exit",
// component:
// <Table_head
// content={<Table_cnt
// first={["Md. Ahsan Khan","sk6582757@gmail.com","+91-8521252299"]}
// sec={"7"}
// third={"BCA/3"}
// four={"22/2/2026"}
// five={"4:40Am"}
// six={"Approve"}
// />}
// heading={[ "Profile","Roll_No.","Course","Date","Time","Total"]}
// />
// },
// {
// title:"Return Records",
// route:"/admin_return",
// component:
// <Table_head
// content={<Table_cnt
// first={["Let Us C","6th Edition"]}
// sec={"7"}
// third={"md ahsan khan / 7"}
// four={"BCA / 3"}
// five={"2-3-2026"}
// six={"Approved"}
// seven={"5"}
// />}
// heading={[ "Title ","Call_No.","Name/Roll","Course/Sem","D-O-R","Approved"]}
// />
// },
// {
// title:"Active Users",
// route:"/admin_students",
// component:
// <Table_head
// content={<Table_cnt
// first={["Md. Ahsan Khan","sk6582757@gmail.com","+91-8521252299"]}
// sec={"7"}
// third={"3"}
// four={"BCA"}
// five={"Active"}
// six={"Deactivate"}
// />}
// heading={[ "Profile","Roll_No.","Course","Sem/Year","Status","Action"]}
// />
// }
// ].map((section,index)=>(
// <div key={index} className="bg-[#1e293b] border border-slate-700 rounded-2xl p-8 shadow-md">

// <div className="flex justify-between items-center mb-6">

// <h2 
// onClick={()=>navigate(section.route)}
// className="text-xl font-semibold text-white cursor-pointer hover:text-blue-400 transition">
// {section.title}
// </h2>

// <div className="flex gap-3">

// <button 
// onClick={()=>navigate(section.route)}
// className="text-sm text-blue-400 hover:text-blue-300 transition cursor-pointer">
// View All →
// </button>

// {section.title === "Books Overview" && (
// <button 
// onClick={()=>navigate("/removebook")}
// className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition cursor-pointer">
// Remove Book
// </button>
// )}

// {section.title === "Active Users" && (
// <button 
// onClick={()=>navigate("/removeuser")}
// className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition cursor-pointer">
// Remove User
// </button>
// )}

// </div>

// </div>

// {section.component}

// </div>
// ))}

// </div>

// </div>




// </div>


// <div className="flex xl:hidden absolute inset-0 bg-[#0f172a] text-white items-center justify-center px-6">

//     <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-8 text-center shadow-lg max-w-md">

//         <div className="text-5xl mb-4">💻</div>

//         <h1 className="text-2xl font-semibold mb-3">
//             Desktop Access Only
//         </h1>

//         <p className="text-gray-400 mb-6">
//             The Admin Panel is not accessible on mobile devices.
//             <br />
//             Please open this panel on a PC or Laptop for full access.
//         </p>

//         <div className="text-sm text-slate-500">
//             Recommended screen width: 1024px and above
//         </div>

//     </div>

// </div>





// </>

// )
// }

// export default Dashboard
