import Link from "next/link";
import MainTemplate from "./maintemplate/MainTemplate";
import Blog from "./blog/Blog";



export default function Home() {
  return (
  <div>
      {/* <Link href="/maintemplate">
      <MainTemplate/>
    </Link> */}
    <Link href="/">
      <Blog/>
    </Link>
  </div>
  ) 
}
