import Link from "next/link";
import MainTemplate from "./maintemplate/MainTemplate";



export default function Home() {
  return (
  <div>
      <Link href="/maintemplate">
      <MainTemplate/>
    </Link>
  </div>
  )
}
