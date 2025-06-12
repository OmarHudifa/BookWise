import { signOut } from '@/auth';
import React from 'react'
import { Button } from './ui/button';

const LogOutForm = () => {
    console.log("pressed")
  return (
 
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
        className="mb-10"
      >
        <Button>Logout</Button>
      </form>
  
  )
}

export default LogOutForm