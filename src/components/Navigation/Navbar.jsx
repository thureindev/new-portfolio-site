import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import SideNav from './SideNav';

// icons
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

function joinClassNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  // Get the current location
  const location = useLocation();
  // console.log(location.pathname);

  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [navigation, setNavigation] = useState([
    {
      id: 1,
      name: 'Explore',
      href: '/projects',
      isActive: location.pathname === '/projects' ? true : false,
    },
    {
      id: 2,
      name: 'About me',
      href: '/',
      isActive: location.pathname === '/' ? true : false,
    },
    {
      id: 3,
      name: 'Get in touch',
      href: '/contact',
      isActive: location.pathname === '/contact' ? true : false,
    },
  ]);

  useEffect(() => {
    setNavigation(
      navigation.map((item) =>
        item.href === location.pathname
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      )
    );
  }, [location]);

  // location_path={location.pathname} // Pass the current path as a prop

  useEffect(() => {
    setIsSideNavOpen(false); // Close the navigation when the location changes
  }, [location]);
  return (
    <>
      <SideNav
        navigation={navigation}
        isOpen={isSideNavOpen}
        setIsOpen={setIsSideNavOpen}
      />

      <nav
        className='relative flex w-full flex-nowrap items-center lg:justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4'
        data-te-navbar-ref
      >
        <div className='flex w-full flex-wrap items-center justify-between px-3'>
          {/* ----- -----  Hamburger button for mobile view ----- ----- ----- ----- */}
          <button
            className='block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 mr-auto '
            type='button'
            data-te-collapse-init
            data-te-target='#navbarSupportedContent2'
            aria-controls='navbarSupportedContent2'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setIsSideNavOpen(!isSideNavOpen)}
          >
            {/* ----- -----  Hamburger icon ----- ----- ----- ----- */}

            {isSideNavOpen ? (
              <XMarkIcon className='h-8 w-8' aria-hidden='true' />
            ) : (
              <Bars3Icon className='h-8 w-8' aria-hidden='true' />
            )}
          </button>

          <div
            className='hidden lg:inline-block ml-2'
            onClick={() => setIsSideNavOpen(!isSideNavOpen)}
          >
            <a
              className='text-xl text-neutral-800 dark:text-neutral-200'
              href='#'
            >
              thureindev
              {/* <img src="/thureindev-logo.svg" alt="thureindev-logo"
                                style={{ width: "20px", height: "20px", display: "inline", marginLeft: "0.5rem" }} /> */}
            </a>
          </div>
          <div className='lg:hidden absolute left-1/2 transform -translate-x-1/2'>
            <a
              className='text-xl text-neutral-800 dark:text-neutral-200'
              href='#'
            >
              thureindev
              {/* <img src="/thureindev-logo.svg" alt="thureindev-logo"
                                style={{ width: "20px", height: "20px", display: "inline", marginLeft: "0.5rem" }} /> */}
            </a>
          </div>

          {/* ----- -----  Collapsible navbar container ----- ----- ----- ----- */}
          <div
            className='!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto'
            id='navbarSupportedContent2'
            data-te-collapse-item
          >
            {/* ----- -----  Left links ----- ----- ----- ----- */}
            <ul
              className='list-style-none ml-auto flex flex-col pl-0 lg:mt-1 lg:flex-row'
              data-te-navbar-nav-ref
            >
              {
                /* ----- -----  Link list ----- ----- ----- ----- */
                navigation.map((item) => (
                  <li
                    key={item.id}
                    className={joinClassNames(
                      item.isActive ? 'active' : '',
                      'my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1'
                    )}
                    data-te-nav-item-ref
                  >
                    <Link
                      className={
                        item.isActive === true
                          ? 'active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400'
                          : 'p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400'
                      }
                      to={item.href}
                      // data-te-nav-link-ref
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
