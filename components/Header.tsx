'use client';

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function Header() {
  const { setTheme, theme } = useTheme()

  return (
    <header className='flex shadow-xl w-full'>
      {/*TODO: add localization */}
      <h1>Where in the world?</h1>
      <div className='ml-auto'>
        {
          theme === "dark" ? (
            <Moon onClick={() => setTheme("light")} />
          ) : (
            <Sun onClick={() => setTheme("dark")} />
          )
        }
      </div>
    </header>
  );
}
