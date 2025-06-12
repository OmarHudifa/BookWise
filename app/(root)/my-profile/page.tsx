import React from "react";
import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/auth";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";
import { db } from "@/database/drizzle";
import { books, borrowRecords } from "@/database/schema";
import { eq, inArray } from "drizzle-orm";



const Page = async() => {

  const session =await auth()
 

 const borrowedBooksList=await db
  .select({
    bookId: borrowRecords.bookId,
  })
  .from(borrowRecords)
  .where(eq(borrowRecords.userId, session?.user?.id as string)) 
  
  const bookIds = borrowedBooksList.map(record => record.bookId);
  
 const booksList = await db
  .select()
  .from(books)
  .where(inArray(books.id, bookIds));
  return (
 
    <BookList title="Borrowed Books" books={booksList} containerClassName="mt-28"/>
  );
};
export default Page;