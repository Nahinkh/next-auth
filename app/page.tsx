'use client'
import { motion } from "motion/react"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const skills = [
  {
    title: "Fullstack Development",
    description:
      "Expert in building scalable web apps with Next.js, Node.js, and MongoDB.",
  },
  {
    title: "Authentication",
    description:
      "Secure login with Google, GitHub, Facebook, and custom email/password.",
  },
  {
    title: "UI/UX Design",
    description:
      "Minimalist and modern interfaces using Tailwind CSS and shadcn/ui.",
  },
  {
    title: "API Integration",
    description:
      "RESTful and GraphQL APIs with Axios and Next.js route handlers.",
  },
  {
    title: "Database Management",
    description:
      "Designing schemas, queries, and optimizations with MongoDB & Mongoose.",
  },
  {
    title: "Deployment",
    description: "Production-ready apps deployed on Vercel & cloud platforms.",
  },
]


  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center container mx-auto mt-10.5">
      {/* Hero Section */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-6"
      >
        Welcome to <span className="text-blue-600">Next-Auth App</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8"
      >
        A modern web application built with{" "}
        <span className="font-semibold">Next.js, MongoDB, Auth.js</span>, and
        styled with <span className="font-semibold">Tailwind & shadcn/ui</span>.
        🚀 <br />
        Secure authentication, seamless experience, and clean design — all in one place.
      </motion.p>

      <div className="flex gap-4">
        <Button size="lg" asChild>
          <Link href="/register">Get Started</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          Learn More
        </Button>
      </div>

      {/* Skills Section */}
      <section className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-muted-foreground">{skill.description}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
