import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-4">
      <div className="container">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} <span className="hover:text-blue-950"><Link href='www.eduexcellence.education' >EduExcellence</Link> </span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
