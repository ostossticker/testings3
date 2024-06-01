"use client";
import { UploadForm } from "@/app/upload/(form)/form";

export default function Page() {
   const getFormattedDate = (offset) => {
      const today = new Date();
      const targetDate = new Date(today);
      targetDate.setDate(today.getDate() + offset);
      const day = targetDate.getDate();
      const month = ('0' + (targetDate.getMonth() + 1)).slice(-2); // Months are zero-indexed, adding leading zero if necessary
      const year = targetDate.getFullYear();
      return `${year}-${month}-${day}`; // Format: "2024-05-16"
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
