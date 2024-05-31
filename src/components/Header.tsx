import {Component} from "react";
import { Link } from 'react-scroll';
import imgGithub from "@/assets/images/github.svg";

export default class Header extends Component {
  render() {
    const menus = [
      // {name: 'Blog', link: '#blog'},
      {name: 'Mission', link: 'mission'},
      {name: 'Service', link: 'service'},
      {name: 'About', link: 'about'},
      {name: 'Skills', link: 'skills'},
      {name: 'Profile', link: 'profile'},
      {name: 'Contact', link: 'contact'}
    ]

    const showMenu = function () {
      document.getElementById('navbar-default')?.classList.toggle('hidden')
    }

    return (
      <>
        <nav className="border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Splite</span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={showMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul
                className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="https://blog.splite.biz"
                    target="_blank"
                    className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Blog
                  </a>
                </li>
                {menus.map((menu) => {
                  return (
                    <>
                      <li>
                        <Link
                          className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                          activeClass="active"
                          key={menu.name}
                          to={menu.link}
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                        >
                          {menu.name}
                        </Link>
                      </li>
                    </>
                  )
                })}
                <li className="h-6">
                  <a href="https://github.com/splite-tada" target="_blank"><img className="h-6" src={imgGithub}/></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}