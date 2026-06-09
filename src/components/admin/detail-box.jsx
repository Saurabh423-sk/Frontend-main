

const Detail_box = ({title,num,icon})=>{

    return(

        <div className="w-full rounded-4xl h-28 px-2 pb-4 flex shrink-0 gap-3 border-0.5 border-black/40 bg-white/70 flex-col items-center  shadow-2xl shadow-gray-300 ">
    <div className="bg-blue-700 w-[70%] p-0.5 m-auto"></div>

    <div className=" flex justify-between gap-4 items-center">{icon}<h1 className="text-xl font-semibold">{title}</h1> </div>

<div className="text-xl font-semibold">{num}</div>
        </div>
    )
}

export default Detail_box