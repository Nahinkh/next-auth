
import { Mail } from "lucide-react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { auth } from "./auth";

export default async function Home() {

  const session = await auth()
  console.log(session)

  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Welcome to Next.js with next-auth</h1>
      </div>
    </div>
  );
}
