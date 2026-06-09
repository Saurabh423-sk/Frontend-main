import { configureStore } from "@reduxjs/toolkit"
import studentdata from "../features/admin/students_slice.js"
// import toggle_student_status from "../features/admin/toggle_student_status_slice.js"
import allbook_slice from "../features/admin/getAllbook_slice.js"
import book_bycourse_slice from "../features/book_bycourse_slice.js"
import entry_exit_slice from "../features/admin/get_All_entry_exit.js"
import borrow_return_slice from "../features/admin/get_borrow_return.js"
import profile_slice from "../features/profile_slice.js"
export const store = configureStore({

reducer:{
    user:studentdata,
    // toggle_student_status,
   book:allbook_slice,
   book_bycourse:book_bycourse_slice,
  entry_exit:entry_exit_slice,
  borrow_return:borrow_return_slice,
  profile:profile_slice
}


})

