import * as React from 'react'
import Link from 'next/link'

import siteConfig from 'site-config'

const Footer = () => {
  return (
    <div className='border-t border-gray-200 '>
      <div className=' mx-auto px-2 sm:px-6 lg:px-8 '>
        <div className='flex items-center justify-between sm:items-stretch sm:justify-start h-36 max-w-7xl '>
          <div className='flex justify-between flex-col  items-center '>
            <div className='flex-grow text-2xl font-bold text-primary'>
              {siteConfig.title}
            </div>
            <div className='flex-none'>@{siteConfig.footer.copyright}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
