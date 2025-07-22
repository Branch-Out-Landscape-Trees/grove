import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useConfigContext } from "@/context/ConfigContext"

const ThemeToggle = () => {
  const { isDark, setIsDark } = useConfigContext()

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9 text-white hover:bg-green-700 dark:hover:bg-green-600"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default ThemeToggle
