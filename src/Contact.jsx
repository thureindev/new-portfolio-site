import { MdWhatsapp, MdEmail, MdLocationOn } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaBootstrap, FaSass, FaGit, FaDocker, FaPython } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { SiJavascript, SiVite, SiJekyll, SiJquery, SiTailwindcss } from 'react-icons/si';
import { DiMaterializecss } from 'react-icons/di';

import { Link } from 'react-router-dom';


const Contact = ( { isDarkMode }) => {
    return (
        <>
            <div
                className={`bg-neutral-50 dark:bg-neutral-800 text-stone-900 dark:text-stone-100
                min-h-screen min-w-screen py-20 px-4
            flex flex-col lg:flex-row items-start justify-center
            mx-auto`}
            >
                <div className=''>

                    <h2 className='my-8 mx-4 text-lg filter-none'>
                        Contact
                    </h2>
                    <section className='mx-4'>
                        <p className='flex items-center justify-start space-x-4 mb-4 text-teal-600 dark:text-teal-200 filter-none'>
                            <MdWhatsapp className="h-6 w-6" aria-hidden="true" />
                            <a href="#">(+66) 64 135 1355</a>
                        </p>
                        <p className='flex items-center justify-start space-x-4 mb-4 text-sky-700 dark:text-sky-300 filter-none'>
                            <MdEmail className="h-6 w-6" aria-hidden="true" />
                            <a href="mailto: thureindev@outlook.com">thureindev@outlook.com</a>
                        </p>
                        <p className='flex items-center justify-start space-x-4 mb-4 filter-none'>
                            <MdLocationOn className="h-6 w-6" aria-hidden="true" />
                            <span>Bangkok, Thailand (Available for remote job option)</span>
                        </p>
                        <p className='flex items-center justify-start space-x-4 mb-4 text-sky-700 dark:text-sky-300 filter-none'>
                            <TbWorld className="h-6 w-6" aria-hidden="true" />
                            <Link to={'/'}>https://thureindev.github.io</Link>
                        </p>
                    </section>

                    <div>
                        <h2 className='mt-8 mb-4 mx-4 text-lg filter-none'>
                            Skills
                        </h2>

                        <section className='max-w-sm md:max-w-lg lg:max-w-2xl flex flex-wrap items-center justify-start space-x-4 space-y-2'>

                            <span></span>

                            <span className={`inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-sm font-medium text-orange-500 ring-1 ring-inset ring-orange-700/10`}>
                                HTML5&nbsp;<FaHtml5 className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <span className={`inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10`}>
                                CSS3&nbsp;<FaCss3Alt className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <span className={`inline-flex items-center rounded-md bg-yellow-300 px-2 py-1 text-sm font-medium text-gray-900 ring-1 ring-inset ring-yellow-600/20`}>
                                JavaScript&nbsp;<SiJavascript className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <span className={`inline-flex items-center rounded-md bg-green-700 px-2 py-1 text-sm font-medium text-green-50 ring-1 ring-inset ring-green-600/20`}>
                                NodeJS&nbsp;<FaNodeJs className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <span className={`inline-flex items-center rounded-md bg-gray-700 px-2 py-1 text-sm font-medium text-sky-300 ring-1 ring-inset ring-gray-500/10`}>
                                React&nbsp;<FaReact className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <span className={`inline-flex items-center rounded-md bg-purple-700 px-2 py-1 text-sm font-medium text-yellow-300 ring-1 ring-inset ring-yellow-300/10`}>
                                Vite&nbsp;<SiVite className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <span className={`inline-flex items-center rounded-md bg-teal-100 px-2 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10`}>
                                Jekyll&nbsp;<SiJekyll className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <span className={`inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10`}>
                                JQuery&nbsp;<SiJquery className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <span className={`inline-flex items-center rounded-md bg-gray-700 px-2 py-1 text-sm font-medium text-sky-400 ring-1 ring-inset ring-sky-400/10`}>
                                Tailwind&nbsp;<SiTailwindcss className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <br />
                            <span className={`inline-flex items-center rounded-md bg-rose-600 px-2 py-1 text-sm font-medium text-gray-50 ring-1 ring-inset ring-rose-600/10`}>
                                Materialize CSS&nbsp;<DiMaterializecss className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <span className={`inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10`}>
                                Bootstrap&nbsp;<FaBootstrap className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <span className={`inline-flex items-center rounded-md bg-rose-200 px-2 py-1 text-sm font-medium text-rose-700 ring-1 ring-inset ring-rose-700/10`}>
                                SASS&nbsp;<FaSass className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <span className={`inline-flex items-center rounded-md bg-gray-700 px-2 py-1 text-sm font-medium text-gray-50 ring-1 ring-inset ring-gray-50/10`}>
                                &nbsp;
                                <FaGit className="h-6 w-6" aria-hidden="true" />
                                &nbsp;+&nbsp;
                                GitHub
                                <FiGithub className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <span className={`inline-flex items-center rounded-md bg-sky-600 px-2 py-1 text-sm font-medium text-sky-50 ring-1 ring-inset ring-sky-400/10`}>
                                Docker&nbsp;<FaDocker className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <span className={`inline-flex items-center rounded-md bg-yellow-300 px-2 py-1 text-sm font-medium text-teal-600 ring-1 ring-inset ring-sky-400/10`}>
                                Learning Python&nbsp;<FaPython className="h-6 w-6" aria-hidden="true" />
                            </span>
                        </section>
                    </div>
                </div>

                <section className='max-w-xl'>
                    <h2 className='my-8 mx-4 text-lg filter-none'>
                        Profile
                    </h2>
                    <p className='mb-4 mx-4 text-base '>I love building tools that are useful to people. 
                    Also love planning fun games and projects. I have strong knowledge and practice in the skills I claim to have. 
                    I may be new in the web dev industry. 
                    But I am an enthusiastic learner, teacher. Team player with an eye for detail.
                    </p>
                </section>
            </div>

        </>
    )
}

export default Contact