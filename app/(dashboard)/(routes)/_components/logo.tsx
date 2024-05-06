import Image from "next/image"

const Logo = () => {
  return (
   <Image
   height={100}
   width={100}
   alt="acadevo logo"
   src= '/images/acadevo2.png'
className="rounded-sm"
   />
  )
}

export default Logo