import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/gallery', label: 'Gallery' },
    { path: 'https://zenithvintage.org', label: 'ZenithVintage', external: true },
    { path: 'https://www.youtube.com/@TheYanyLin', label: 'YouTube', external: true },
  ]

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 -z-10 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Navigation */}
      <nav className="glass sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-20">
            <div className="flex space-x-12">
              {navItems.map((item) => (
                item.external ? (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center px-1 pt-1 text-sm font-light tracking-widest uppercase transition-all duration-300 text-gray-500 hover:text-gray-900"
                  >
                    {item.label}
                    <span className="absolute -bottom-px left-0 h-px bg-gray-900 transition-all duration-300 w-0 group-hover:w-full"></span>
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`group relative inline-flex items-center px-1 pt-1 text-sm font-light tracking-widest uppercase transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'text-gray-900'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-px left-0 h-px bg-gray-900 transition-all duration-300 ${
                      location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="glass border-t border-white/20 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="elegant-divider mb-6 mx-auto max-w-xs"></div>
            <p className="text-sm text-gray-500 font-light tracking-wider">
              © {new Date().getFullYear()} Yan Jun Lin. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
