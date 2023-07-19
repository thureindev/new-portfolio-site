import { Link } from 'react-router-dom';

import DarkModeToggle from './DarkModeToggle';

import Slideover from './Slideover';
import './styles.css';

function joinClassNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

// function setActiveNav(nav, setNav, id) {
//     // return nav.map((item) => (item.id === id)? {...item, current: true} : {...item, current: false});
//     return setNav(nav.map((item) => (item.id === id) ? { ...item, current: true } : { ...item, current: false }));
// }

const SideNav = ({ navigation, setNavigation, current_nav, open, setOpen, isDarkMode, setIsDarkMode }) => {
    return (
        <>

            <Slideover
                open={open}
                setOpen={setOpen}
                title={(
                    <div className={`mb-4 ml-4 mr-4`}>
                        {/* <div className='mb-4 w-32 rounded-lg avatar-img-container'>
                    <a href="https://thureindev.github.io">
                        <img
                        src="https://thureindev.github.io/assets/avatar.jpg"
                        className="w-100% h-100% rounded-lg avatar-img"
                        alt="Avatar" />
                    </a>
                </div> */}

                        <h5 className={`mb-2 text-xl font-medium leading-tight filter-none
                        text-stone-900 dark:text-stone-100`}>
                            thureindev
                        </h5>

                        <p className="text-neutral-500 dark:text-neutral-400 filter-none">
                            Web Developer
                        </p>

                        <DarkModeToggle
                            isDarkMode={isDarkMode}
                            setIsDarkMode={setIsDarkMode}
                        />

                    </div>
                )}

                content={(
                    <ul className={`side-nav ml-4 mr-4`}>
                        {
                            navigation.map((item) => (
                                <li
                                    key={item.id}
                                    className={joinClassNames(item.isActive ? 'active' : '', 'side-nav-item')}
                                    onClick={() => {
                                        // setActiveNav(navigation, setNavigation, item.id);
                                        // setNavigation(navigation.map((item) => (item.id === id)? {...item, current: true} : {...item, current: false}));
                                        // setOpen(false);
                                        console.log(open);
                                    }}
                                >

                                    <Link
                                        to={item.href}
                                        className={`side-nav-link mb-1 p-4 ${item.isActive ? 'active' : ''}}`}
                                        aria-current={item.isActive ? 'page' : undefined}
                                    >
                                        <i>{item.icon}</i>
                                        <span className='pl-4 text-stone-900 dark:text-stone-100'>{item.name}</span>
                                    </Link>

                                </li>
                            ))
                        }
                    </ul>
                )}
            />
        </>
    )
}

export default SideNav