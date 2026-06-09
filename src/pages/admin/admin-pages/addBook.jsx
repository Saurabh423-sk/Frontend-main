import { useState } from "react";
import addBook_thunk from "../../../redux-toolkit/Admin/add_book.js"
import { useDispatch } from "react-redux";

const AddBook = () => {
  const [data, setdata] = useState({})
  const handle_data = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }
  const dispatch = useDispatch()
  const handle_submit = async () => {
    console.log(data)
    try {
      const res = await dispatch(addBook_thunk(data)).unwrap()
      alert(res.message)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center adminbg p-6">
      <div className="bg-white/30 backdrop-blur-2xl shadow-xl rounded-2xl p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Add New Book
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <div>
            <label className="block text-sm font-semibold mb-1">Title</label>
            <input onChange={(e) => handle_data(e)} name="title" type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Edition</label>
            <input onChange={(e) => handle_data(e)} name="edition" type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Image URL</label>
            <input onChange={(e) => handle_data(e)} name="img_url" type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>

          {/* Course Dropdown */}
          <div>
            <label className="block text-sm font-semibold mb-1">Course</label>
            <select name="course" onChange={(e) => handle_data(e)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none">
              <option value="">-- Select Course --</option>
              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="BBM">BBM</option>
              <option value="BSC_IT">BSC_IT</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Call Number</label>
            <input onChange={(e) => handle_data(e)} name="call_no" type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Shelf</label>
            <input onChange={(e) => handle_data(e)} name="shelf" type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>

          {/* Status Dropdown */}
<div>
  <label className="block text-sm font-semibold mb-1">Status</label>
  <select name="status" onChange={(e) => handle_data(e)}
    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none">
    <option value="">-- Select Status --</option>
    <option value="Available">Available</option>
    <option value="Issued">Issued</option>
  </select>
</div>

          {/* Condition Dropdown */}
          <div>
            <label className="block text-sm font-semibold mb-1">Condition</label>
            <select name="condition" onChange={(e) => handle_data(e)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none">
              <option value="">-- Select Condition --</option>
              <option value="good">Good</option>
              <option value="bad">Bad</option>
              <option value="poor">Poor</option>
            </select>
          </div>

        </div>

        <button
          className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
          onClick={handle_submit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddBook;