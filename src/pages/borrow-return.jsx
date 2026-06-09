import React, { useState } from "react";
import { useDispatch } from "react-redux";
import borrow_return_thunk from "../redux-toolkit/all_api/borrow_return.js"
const Borrow_Return = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [callNo, setCallNo] = useState("");
  const dispatch = useDispatch()

  const send_req = async(reqtype,booktitle,callno)=>{
try{
  const res = await dispatch(borrow_return_thunk({req:reqtype,data:{title:booktitle,call_no:callno}})).unwrap()
  alert(res.message)
}
catch(err){
  alert(err)
}


  }

  return (
    <div
      className="px-3 py-10 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66')",
      }}
    >
      <div className="w-full max-w-4xl bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-6 md:p-10">

        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Borrow / Return Book
          </h1>
          <p className="text-slate-700 mt-2">
            Enter book details to continue
          </p>
        </header>

        {/* Input Section */}
        <div className="bg-blue-100 rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Book Title
              </label>
              <input
                type="text"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
                placeholder="Enter book title"
                className="w-full px-4 py-2 rounded-lg bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Call Number
              </label>
              <input
                type="text"
                value={callNo}
                onChange={(e) => setCallNo(e.target.value)}
                placeholder="Enter call number"
                className="w-full px-4 py-2 rounded-lg bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid sm:grid-cols-2 gap-6">
          <button
           onClick={()=>{send_req("borrow",bookTitle,callNo)}}
            className="py-3 rounded-xl bg-indigo-600 text-white  active:scale-95 cursor-pointer font-semibold hover:bg-indigo-700 transition shadow-lg"
          >
            Borrow Book
          </button>

          <button
          onClick={()=>{send_req("return",bookTitle,callNo)}}
            className="py-3 rounded-xl bg-emerald-600 active:scale-95 text-white cursor-pointer font-semibold hover:bg-emerald-700 transition shadow-lg"
          >
            Return Book
          </button>
        </div>

        {/* Success Message UI */}
        <div className="mt-6 hidden text-center text-green-600 font-semibold">
          ✅ Request successful
        </div>

        {/* Error Message UI */}
        <div className="mt-6 hidden text-center text-red-600 font-semibold">
          ❌ Something went wrong
        </div>

        {/* Footer Info */}
        <div className="mt-10 text-center text-xs text-red-700 font-semibold">
          Max 3 books • 30 days • ₹5/day late fine
        </div>
      </div>
    </div>
  );
};

export default Borrow_Return;