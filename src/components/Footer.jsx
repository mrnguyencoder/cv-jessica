import React from 'react'

function Footer() {
  return (
    <footer>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left">
              <span className="block sm:inline">&copy; {new Date().getFullYear()} Jessica-Shon MASTEL</span>{' '}
              <span className="block sm:inline">All rights reserved.</span>
              <a href="https://nguyendev.fr/"
                className="hover:text-[#61dbfb]"
                target="_blank"
                rel="noopener noreferrer" >
                Made by Nguyen Dev
             </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer