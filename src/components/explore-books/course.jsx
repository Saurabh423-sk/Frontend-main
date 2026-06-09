import {ChevronRight} from "lucide-react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import book_bycourse_thunk from "../../redux-toolkit/all_api/get_book_bycourse_api.js"
const Course = ({imgurl,course,button,link="/explore-course/books",})=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
return(

    <div
      style={{ backgroundImage: `url(${imgurl})` }}
      className="w-80 m-auto mt-5 rounded-2xl h-30 flex flex-col justify-center items-center p-3 bg-cover bg-center bg-no-repeat gap-5 "
    >
        <div className="text-5xl pl-3 w-full  text-white  font-extrabold tracking-widest heading-smile ">{course.toUpperCase()}</div>
       
        <div
        role="button" onClick={()=>{
            dispatch(book_bycourse_thunk({course}))
            navigate(link)       

        }}
        className="w-full px-4 active:scale-90 cursor-pointer bg-white/30 flex justify-between text-xl text-white font-bold rounded-2xl"><span className="text-white" >{button}</span> <span className="text-blue-800 font-bold"><ChevronRight size={30} /></span></div>



    </div>


)
}

export default Course