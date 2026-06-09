
import Course from "../../components/explore-books/course.jsx"


const  Explore_Course = ()=>{
  
return(
<>
<h1 className="text-center text-5xl tracking-wider sm:text-7xl heading-smile font-extrabold mt-4 text-shadow-xl text-shadow-gray-700  text-blue-900 ">Browse By Course</h1>
<h3 className="text-center text-lg sm:text-2xl font-extrabold  mt-4 text-shadow-xl text-shadow-gray-700  text-gray-400 tracking-widest">Select your coursce to explore subject and books.</h3>



<div className="w-full flex flex-wrap p-4 ">

     <Course course={"bca"} button={"View Subjects"}  imgurl={"https://i.pinimg.com/1200x/07/36/07/0736076722175bb61c19cad548b8906c.jpg"} />

 <Course course={"bba"} button={"View Subjects"}
 imgurl={"https://i.pinimg.com/736x/cc/28/bb/cc28bb67651e3778f4ba14e614e6ebf1.jpg"} />

 
 <Course course={"bbm"} button={"View Subjects"} 
 imgurl={"https://i.pinimg.com/736x/a8/b1/b4/a8b1b41da3e61d667e866cd6f4b4a23d.jpg"} />


     
     <Course course={"bsc_it"} button={"View Subjects"} 
 imgurl={"https://i.pinimg.com/1200x/07/36/07/0736076722175bb61c19cad548b8906c.jpg"} />





</div>



</>
   
)

}

export default Explore_Course