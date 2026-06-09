import {  useNavigate } from "react-router-dom"
import LibraryGallery from "../components/library-view/gallery.jsx"
import Rule from "../components/rules/rule.jsx"
const Home = ()=>{
    const navigate = useNavigate()

    return(

         <>
        
         <section className="w-full h-120 sm:h-[calc(100vh-50px)] mb-7  herobg not-sm:border-b-12 rounded-b-4xl not-sm:rounded-b-4xl border-b-3 border-blue-950 ">
<div className="w-full h-full   flex flex-col justify-center items-center not-sm:pb-10  gap-10  ">

<h1 className="text-8xl font-extrabold not-sm:text-5xl text-center text-white text-shadow-2xs text-shadow-black">BRABU Library</h1>

<h1  className="text-4xl font-bold not-sm:text-xl -tracking-wider text-center text-white text-shadow-2xs text-shadow-black">Enchriching Minds , Empowering Futures.</h1>

<div className="flex gap-5 sm:gap-15 justify-center items-center">
    <button className="bg-linear-to-br from-blue-900 to-black active:scale-90 cursor-pointer  text-white rounded-2xl sm:px-12 py-2 px-7 font-bold sm:text-3xl " role="button"  onClick={()=>{navigate("/explore-course")}}>View Books</button>
    <button className="bg-linear-to-br from-blue-900 to-black active:scale-90 cursor-pointer  text-white rounded-2xl sm:px-12 py-2 font-bold px-6 sm:text-3xl"
    role="button"  onClick={()=>{navigate("/entry_exit")}}
    >Library Entry / Exit</button>
</div>



</div>

         </section>
         <LibraryGallery />
<Rule />





         </>


    )
}
export default Home