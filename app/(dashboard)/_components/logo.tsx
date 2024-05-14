import Image from "next/image"

const Logo = () => {
  return (
   <Image
   priority
   height={88}
   width={88}
   alt="acadevo logo"
   src= '/images/acadevo.svg'
className="rounded-sm"
   />
  )
}

export default Logo