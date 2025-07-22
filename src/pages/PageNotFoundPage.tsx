import { Button } from "@/components/ui/button"
import { TreePine, Home } from "lucide-react"
import { Link } from "react-router-dom"

const PageNotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center space-y-8 p-8">
        {/* Simple 404 Icon */}
        <div className="flex justify-center">
          <TreePine className="h-16 w-16 text-green-600 dark:text-green-400" />
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">404</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Page not found</p>
        </div>

        {/* Simple Navigation */}
        <div className="flex justify-center">
          <Button asChild>
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PageNotFoundPage
