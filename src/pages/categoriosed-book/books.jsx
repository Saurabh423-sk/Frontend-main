import { useSelector } from "react-redux";
import Book_card from "../../components/explore-books/bookcard";
import { Search } from "lucide-react";
import React, { useState, useEffect } from "react";

const Books = () => {
  const datas = useSelector((state) => state.book_bycourse.data);
  const books = datas?.book || [];

  const [showdata, setshowdata] = useState([]);

 
  useEffect(() => {
    setshowdata(books);
  }, [datas]);

  const onchange_handler = (e) => {
    const value = e.target.value.toLowerCase();

    if (value.length > 0) {
      const result = books.filter((e) =>
        e.title.toLowerCase().includes(value)
      );
      setshowdata(result);
    } else {
      setshowdata(books);
    }
  };

  return (
    <>
      <h1 className="text-center text-5xl tracking-wider sm:text-7xl heading-smile font-extrabold mt-4 text-shadow-xl text-shadow-gray-700 text-blue-900">
        Search . Select . Study
      </h1>

      <div className="sm:w-[60vw] m-auto w-[95vw] p-1.5 gap-2 rounded-[15px] bg-blue-100 mt-3 flex justify-center items-center">
        <div className="flex-1 bg-white p-1 items-center rounded-[18px] gap-1 font-bold flex">
          <Search color="#766f6f" />
          <input
            type="text"
            onChange={onchange_handler}
            placeholder="Search..."
            className="outline-none h-full text-2xl w-[80%]"
          />
        </div>
      </div>

      <div className="w-full flex flex-wrap p-4">
        {showdata.map((e, i) => (
          <Book_card
            key={i}
            imgurl={e.img_url}
            title={e.title}
            edition={e.edition}
            course={e.course}
            call_no={e.call_no}
            shelf={e.shelf}
            status={e.status}
            condition={e.condition}
          />
        ))}
      </div>
    </>
  );
};

export default Books;