import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <section>
      <div className='container flex items-center justify-center'>
        <SignUp />
      </div>
    </section>
  )
}