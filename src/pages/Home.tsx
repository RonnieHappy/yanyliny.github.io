import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <Helmet>
        <title>Yany Lin — Researcher | Cornell University</title>
        <meta name="description" content="Yany Lin's research spans experimental fluid mechanics, medical ethics, and orthopaedic outcomes — from acoustic bubble dynamics to transplant allocation frameworks." />
        <link rel="canonical" href="https://yanyliny.github.io/" />
      </Helmet>
      {/* Hero Section */}
      <div className="text-center mb-24 mt-16 fade-in">
        <div className="relative inline-block">
          {/* Decorative elements */}
          <div className="absolute -top-8 -left-8 w-24 h-24 border-t-2 border-l-2 border-gray-200 opacity-50"></div>
          <div className="absolute -bottom-8 -right-8 w-24 h-24 border-b-2 border-r-2 border-gray-200 opacity-50"></div>

          <div className="relative px-16 py-12">
            <h1 className="text-7xl font-extralight text-gray-900 mb-4 tracking-tighter">
              Yany Lin
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-6"></div>
            <p className="text-xl text-gray-600 font-light tracking-wide">
              BA, Cornell University
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto mb-20 fade-in" style={{animationDelay: '0.2s'}}>
        <div className="glass p-10 rounded-sm">
          <p className="text-lg leading-relaxed text-gray-700 text-center font-light">
            My research spans experimental fluid mechanics, medical ethics, and orthopaedic outcomes,
            exploring everything from acoustic bubble dynamics to transplant allocation frameworks.
            I also maintain zenithvintage.org, an archive of old music I'm collecting and organizing.
          </p>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
        <Link
          to="/projects"
          className="group relative fancy-card fancy-card-hover overflow-hidden p-10"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative">
            <div className="mb-6">
              <div className="w-12 h-px bg-gray-900 group-hover:w-20 transition-all duration-500"></div>
            </div>
            <h2 className="text-3xl font-extralight text-gray-900 mb-4 group-hover:text-gray-600 transition-colors duration-500">
              Projects
            </h2>
            <p className="text-gray-600 font-light leading-relaxed">
              Research in fluid mechanics, medical ethics, and biomechanics
            </p>
            <div className="mt-6 text-sm text-gray-400 group-hover:text-gray-600 transition-colors">
              View work →
            </div>
          </div>
        </Link>

        <Link
          to="/gallery"
          className="group relative fancy-card fancy-card-hover overflow-hidden p-10"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative">
            <div className="mb-6">
              <div className="w-12 h-px bg-gray-900 group-hover:w-20 transition-all duration-500"></div>
            </div>
            <h2 className="text-3xl font-extralight text-gray-900 mb-4 group-hover:text-gray-600 transition-colors duration-500">
              Gallery
            </h2>
            <p className="text-gray-600 font-light leading-relaxed">
              Photos from life, sports, and more
            </p>
            <div className="mt-6 text-sm text-gray-400 group-hover:text-gray-600 transition-colors">
              View photos →
            </div>
          </div>
        </Link>

        <a
          href="https://zenithvintage.org"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative fancy-card fancy-card-hover overflow-hidden p-10"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative">
            <div className="mb-6">
              <div className="w-12 h-px bg-gray-900 group-hover:w-20 transition-all duration-500"></div>
            </div>
            <h2 className="text-3xl font-extralight text-gray-900 mb-4 group-hover:text-gray-600 transition-colors duration-500">
              ZenithVintage
            </h2>
            <p className="text-gray-600 font-light leading-relaxed">
              Archive of old music, collected and organized
            </p>
            <div className="mt-6 text-sm text-gray-400 group-hover:text-gray-600 transition-colors">
              Visit archive →
            </div>
          </div>
        </a>

        <a
          href="https://www.youtube.com/@TheYanyLin"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative fancy-card fancy-card-hover overflow-hidden p-10"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative">
            <div className="mb-6">
              <div className="w-12 h-px bg-gray-900 group-hover:w-20 transition-all duration-500"></div>
            </div>
            <h2 className="text-3xl font-extralight text-gray-900 mb-4 group-hover:text-gray-600 transition-colors duration-500">
              YouTube
            </h2>
            <p className="text-gray-600 font-light leading-relaxed">
              Videos and visual content
            </p>
            <div className="mt-6 text-sm text-gray-400 group-hover:text-gray-600 transition-colors">
              Watch →
            </div>
          </div>
        </a>

      </div>
    </div>
  )
}
