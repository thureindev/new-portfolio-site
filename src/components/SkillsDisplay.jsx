import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaBootstrap, FaSass, FaGit, FaDocker, FaPython } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { SiJavascript, SiTypescript, SiPhp, SiExpress, SiVite, SiJekyll, SiTailwindcss, SiJenkins, SiPostgresql, SiKubernetes, SiMongodb, SiFlask } from 'react-icons/si';
import { DiMaterializecss } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';


const SkillsDisplay = () => {
    return (
        <div>
            <h2 className='mt-8 mb-4 mx-4 text-lg filter-none'>
                Skills
            </h2>

            <section className='max-w-sm md:max-w-lg lg:max-w-2xl flex flex-wrap items-center justify-start space-x-4 space-y-2'>

                <span></span>

                <span className={`inline-flex items-center rounded-md bg-yellow-300 px-2 py-1 text-sm font-medium text-gray-900 ring-1 ring-inset ring-yellow-600/20`}>
                    JavaScript&nbsp;<SiJavascript className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className={`inline-flex items-center rounded-md bg-sky-500 px-2 py-1 text-sm font-medium text-sky-50 ring-1 ring-inset ring-sky-600/20`}>
                    TypeScript&nbsp;<SiTypescript className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className={`inline-flex items-center rounded-md bg-yellow-300 px-2 py-1 text-sm font-medium text-teal-600 ring-1 ring-inset ring-sky-400/10`}>
                    Python&nbsp;<FaPython className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className={`inline-flex items-center rounded-md bg-violet-500 px-2 py-1 text-sm font-medium text-violet-50 ring-1 ring-inset ring-violet-600/10`}>
                    PHP&nbsp;<SiPhp className="h-6 w-6" aria-hidden="true" />
                </span>

            </section>

            <section className='mt-8 max-w-sm md:max-w-lg lg:max-w-2xl flex flex-wrap items-center justify-start space-x-4 space-y-2'>

                <span></span>
                <span className={`inline-flex items-center rounded-md bg-green-700 px-2 py-1 text-sm font-medium text-green-50 ring-1 ring-inset ring-green-600/20`}>
                    NodeJS&nbsp;<FaNodeJs className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className={`inline-flex items-center rounded-md bg-lime-600 px-2 py-1 text-sm font-medium text-lime-50 ring-1 ring-inset ring-lime-600/20`}>
                    ExpressJS&nbsp;<SiExpress className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className={`inline-flex items-center rounded-md bg-neutral-50 px-2 py-1 text-sm font-medium text-violet-600 ring-1 ring-inset ring-neutral-50/10`}>
                    Flask&nbsp;<SiFlask className="h-6 w-6" aria-hidden="true" />
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
                <span className={`inline-flex items-center rounded-md bg-neutral-50 px-2 py-1 text-sm font-medium text-green-600 ring-1 ring-inset ring-neutral-50/10`}>
                    MongoDB&nbsp;<SiMongodb className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className={`inline-flex items-center rounded-md bg-amber-400 px-2 py-1 text-sm font-medium text-blue-600 ring-1 ring-inset ring-amber-400/10`}>
                    MySQL&nbsp;<GrMysql className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className={`inline-flex items-center rounded-md bg-slate-600 px-2 py-1 text-sm font-medium text-blue-400 ring-1 ring-inset ring-slate-500/10`}>
                    Postgresql&nbsp;<SiPostgresql className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className={`inline-flex items-center rounded-md bg-sky-600 px-2 py-1 text-sm font-medium text-sky-50 ring-1 ring-inset ring-sky-400/10`}>
                    Docker&nbsp;<FaDocker className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className={`inline-flex items-center rounded-md bg-sky-500 px-2 py-1 text-sm font-medium text-sky-50 ring-1 ring-inset ring-sky-600/10`}>
                    Kubernetes&nbsp;<SiKubernetes className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className={`inline-flex items-center rounded-md bg-gray-700 px-2 py-1 text-sm font-medium text-gray-50 ring-1 ring-inset ring-gray-50/10`}>
                    &nbsp;
                    <FaGit className="h-6 w-6" aria-hidden="true" />
                    &nbsp;+&nbsp;
                    GitHub
                    <FiGithub className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className={`inline-flex items-center rounded-md bg-red-500 px-2 py-1 text-sm font-medium text-slate-900 ring-1 ring-inset ring-red-500/10`}>
                    Jenkins&nbsp;<SiJenkins className="h-6 w-6" aria-hidden="true" />
                </span>

            </section>

            <section className='mt-8 max-w-sm md:max-w-lg lg:max-w-2xl flex flex-wrap items-center justify-start space-x-4 space-y-2'>

                <span></span>

                <span className={`inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-sm font-medium text-orange-500 ring-1 ring-inset ring-orange-700/10`}>
                    HTML5&nbsp;<FaHtml5 className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className={`inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10`}>
                    CSS3&nbsp;<FaCss3Alt className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className={`inline-flex items-center rounded-md bg-rose-200 px-2 py-1 text-sm font-medium text-rose-700 ring-1 ring-inset ring-rose-700/10`}>
                    SASS&nbsp;<FaSass className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className={`inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10`}>
                    Bootstrap&nbsp;<FaBootstrap className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className={`inline-flex items-center rounded-md bg-gray-700 px-2 py-1 text-sm font-medium text-sky-400 ring-1 ring-inset ring-sky-400/10`}>
                    Tailwind&nbsp;<SiTailwindcss className="h-6 w-6" aria-hidden="true" />
                </span>
                <br />
                <span className={`inline-flex items-center rounded-md bg-rose-600 px-2 py-1 text-sm font-medium text-gray-50 ring-1 ring-inset ring-rose-600/10`}>
                    Materialize CSS&nbsp;<DiMaterializecss className="h-6 w-6" aria-hidden="true" />
                </span>

            </section>
        </div>
    )
}

export default SkillsDisplay