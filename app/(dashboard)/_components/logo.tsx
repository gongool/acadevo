import Image from "next/image"

const Logo = () => {
  return (
   <Image
   priority
   height={100}
   width={100}
   alt="acadevo logo"
   src= '/images/acadevo.svg'
className="rounded-sm"
   />
  )
}

export default Logo