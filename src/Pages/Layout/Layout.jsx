import { Home } from "../Views"
import { Sidebar } from "./Components"

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen min-w-[100vw] flex justify-center ">
      <Sidebar />
      <div className="md:w-[65%] sm:w-[100%] md:ml-[15%] border-1 border-t-0 border-secondary">
        <Home />
        {children}
      </div>
    </div>
  )
}
