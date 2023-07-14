import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const { data: session } = useSession();
  if (!session){
    return (
      <div className='bg-blue-900 w-screen h-screen flex items-center'>
        <div className="text-center w-full">
          <button onClick={() => signIn('google')} className='bg-white p-2 px-4 rounded-lg'>Login with google</button>
        </div>
      </div>
    )
  }
  return (
    <div className='flex items-center'>logged in {session.user.name}
      <button onClick={() => signOut('google')} className='bg-white p-2 px-4 rounded-lg'>Logout</button>
    </div>
  )
}
