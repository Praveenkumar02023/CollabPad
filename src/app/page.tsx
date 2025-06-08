import Link from "next/link";

export default function Home() {
  return (
    <div className="text-xl h-screen w-screen flex items-center justify-center">
       click  <Link href={"./documents/1234"} > <span className="text-color-blue underline px-2 " >here</span> </Link>  to reach document
    </div>
  );
}
