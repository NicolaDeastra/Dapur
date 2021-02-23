import * as React from 'react'
import Link from 'next/link'

import routes from '@/routes'
import siteConfig from 'site-config'

const Nav = () => {
  return (
    <nav className='border-b border-gray-200'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start h-8'>
            <div className='flex-grow  items-center text-2xl font-bold text-primary'>
              {siteConfig.title}
            </div>
            <div className='hidden sm:block sm:ml-6  '>
              <div className='flex space-x-4'>
                {routes.map(([text, href]) => (
                  <Link key={href} href={href}>
                    <a className=' hover:border-primary hover:border-b-2 text-black px-3 py-3.5 text-sm font-medium'>
                      {text}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
