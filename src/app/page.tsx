import { UserButton,  auth  } from "@clerk/nextjs";
import { Button} from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const {userId} =await auth()
  const isAuth = !!userId;
  return (
    <div className ="w=screen min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2'>
        <div className='flex items-center'>
          <h1 className= 'mr-3 text-5xl font-semibold'>PDF Chat</h1>
          <UserButton afterSignOutUrl = "/" />   
        </div>

        <div className="flex mt-2">
          {isAuth && (<Button>Go to Chats</Button> )}
        </div>
        <p className="max-w-xl mt-1 text-lg"> Instantly answer questions and research with AI</p>
        <div className ='w-full mt-4'>
          {isAuth ? (<h1>fileupload</h1>) : (
          <Link href="/sign-in">
          <Button>Login to get Started!</Button>
          </Link>)}
        </div>
      </div>
    </div>
  )
}
