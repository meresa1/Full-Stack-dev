import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Header'
import Sidebar from '../../components/Sidebar'

const Layout = () => {
  return (
    <div className="flex flex-col">
      <div className="basis-4/5 bg-gray-50">
        <Navbar />
      </div>
    </div>
  )
}

export default Layout
