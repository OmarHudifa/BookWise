"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { borrowBook } from "@/lib/actions/book";

interface Props{
    userId:string,
    bookId:string,
    borrowEligibility:{
        isEligible:boolean,
        message:string}
}
const BorrowBook = ({userId,bookId,borrowEligibility:{isEligible,message}}:Props) => {
    const router=useRouter()
    const[borrowing,setBorrowing]=useState(false)

    const handleBorrowing=async()=>{
        if(!isEligible){
              toast("Error",{
            description:message
            })
        }
        setBorrowing(true)
        
        try {
            const result=await borrowBook({userId,bookId})
            if(result.success){
                 toast("Success",{
            description:"Book borrowed successfully"
            })
            router.push("/my-profile")
            }
            else{
                 toast("Error",{
            description:result.error
            })
            }
        } catch (error) {
               toast("Error",{
            description:"An error occurred while borrowing the book"
            })
        }finally{
            setBorrowing(false)
        }
    }
  return (
    <Button className="book-overview_btn" onClick={handleBorrowing} disabled={borrowing}>
          <Image src="icons/book.svg" alt="book" width={20} height={20}/>
          <p className='font-bebas-neue text-xl text-dark-100'>{borrowing?"borrowing ...":"Borrow Book"}</p>
        </Button>
  )
}

export default BorrowBook