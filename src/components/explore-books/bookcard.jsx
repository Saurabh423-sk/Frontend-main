const Book_card = ({ imgurl,title,edition,course,call_no,shelf,status,condition }) => {
  return (
    <div
      style={{ backgroundImage: `url("https://i.pinimg.com/1200x/5e/fe/4f/5efe4f59011957d56501938836f0619e.jpg")` }}
      className="w-86 shadow-gray-500 shadow-2xl m-auto mt-5 rounded-2xl h-45 flex gap-5 p-2 bg-cover bg-center bg-no-repeat cursor-pointer"
    >
   
      <div className="flex-1 h-full pl-1 font-bold text-gray-800 tracking-wider grid grid-cols-2 ">
        <span>Title</span><span>:{title.slice(0,8)}..</span>
        <span>Edition</span><span>:{edition}<sup>th</sup></span>
        <span>Course</span><span>: {course}</span>
        <span>Call No.</span><span>: {call_no.slice(0,7)}</span>
        <span>Shelf</span><span>: {shelf}</span>
        <span>Status</span><span>: {status}</span>
        <span>Condition </span><span>: {condition}</span>
      </div>


      <div className="w-[35%] h-[95%] p-1  flex justify-center items-center flex-wrap overflow-hidden object-fit-cover">
        <img src={imgurl} 
        className="w-full h-full shadow-2xl shadow-gray-500 "
        alt="" />
      </div>
    </div>
  );
};

export default Book_card;
