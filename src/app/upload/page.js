"use client";
import { UploadForm } from "@/app/upload/(form)/form";

export default function Page() {
   const getFormattedDate = (offset) => {
       const today = new Date();
       const targetDate = new Date(today);
       targetDate.setDate(today.getDate() + offset);
       const day = ('0' + targetDate.getDate()).slice(-2); // Adding leading zero if necessary
       const month = ('0' + (targetDate.getMonth() + 1)).slice(-2); // Adding leading zero if necessary
       const year = targetDate.getFullYear();
       return `${year}-${month}-${day}`; 
  };
  return(
    <>
      <h1>Upload Files to S3 Bucket</h1>
      <UploadForm />
      {`${getFormattedDate(-1)}`}
      {`${getFormattedDate(0)}`}
    </>
  )
}
