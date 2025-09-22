import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t mt-16 py-6 text-center text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} Next-Auth App. Built with ❤️ using Next.js, Tailwind,
        and shadcn/ui.
      </p>
    </footer>
  )
}

export default Footer