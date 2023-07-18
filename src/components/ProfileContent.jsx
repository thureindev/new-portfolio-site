import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import ProfileSocialLink from "./ProfileSocialLink";

import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

import avatar from "../assets/avatar.jpg";
import cvFile from "../assets/THUREIN_TUN_CV.pdf";


const ProfileContent = () => {

    return (
        <>

            <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
                <main className="max-w-2xl lg:mt-20 flex flex-col items-start justify-center flex-1 pl-8 pr-8 md:px-20 text-base text-justify">

                    <RoughNotationGroup show={true}>
                        <h1 className="mb-6 lg:text-2xl font-bold text-left">
                            Hello! I&apos;m ThuRein, a&nbsp;

                            <RoughNotation type="highlight" color="#D8BFD8" order="1" multiline={true}
                            className="dark:text-stone-900">
                                web frontend developer.
                            </RoughNotation>
                            &nbsp;Based in Bangkok.
                        </h1>
                        <p className="mb-4">
                            I love building tools that are useful to people. Also love planning fun games and projects. I studied computing and business management in college. After graduation,
                            I worked office jobs and&nbsp;

                            <RoughNotation type="box" color="#7CB9E8" order="4" multiline={true}>
                                taught basic programming to teenagers.
                            </RoughNotation>

                            &nbsp;Through my&nbsp;
                            <RoughNotation type="highlight" color="#7CB9E8" order="5" multiline={true}
                            className="dark:text-stone-900">
                                teaching experience
                            </RoughNotation>

                            , I realized I still have a lot to learn. Teaching pushed me to study more.
                        </p>
                        <p className="mb-4">
                            In 2022, I decided to&nbsp;
                            <RoughNotation type="highlight" color="#D8BFD8" order="3" multiline={true}
                            className="dark:text-stone-900">
                                polish my programming skills to work as a web developer.
                            </RoughNotation>
                            I started learning CS50, back to basic, and then I learned HTML, CSS, JavaScript, React, and Node.js. And moving on to Frameworks and Libraries like Next.js, Tailwind CSS, and Express.js. And of course, Git and Docker for deployment. Over a year,
                            I&apos;ve been learning the fundamental skills of front-end and back-end development.
                            Now I&apos;m looking for a&nbsp;

                            <RoughNotation type="underline" color="#FF033E" order="6" multiline={true}>
                                web frontend job.
                            </RoughNotation>
                            &nbsp;
                            <RoughNotation type="circle" color="#FF033E" order="7" multiline={true}>
                                Hire me?
                            </RoughNotation>
                        </p>
                    </RoughNotationGroup>

                    <div className="flex space-x-4">

                        <ProfileSocialLink text={false} href={"https://www.linkedin.com/in/thureindev/"} isTargetBlank={true}
                            icon={(
                                <FaLinkedinIn className="h-6 w-6" aria-hidden="true" />
                            )} />

                        <ProfileSocialLink text={false} href={"https://www.github.com/thureindev/"} isTargetBlank={true}
                            icon={(
                                <FiGithub className="h-6 w-6" aria-hidden="true" />
                            )} />

                        <ProfileSocialLink text={"View CV"} href={cvFile} isTargetBlank={true}
                            icon={false}
                            useAnchorTag={true}
                        />

                            
                    {/* <a 
                    to={cvFile} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex flex-row items-center justify-center font-bold' 
                    aria-current="View CV"
                    >
                        View CV
                    </a> */}

                    </div>

                </main>

                <img
                    src={avatar} alt="avatar"
                    className="lg:mb-0 mb-4 mt-5 rounded-full w-20 h-20 lg:w-60 lg:h-60 object-cover shadow-lg"
                />
            </div>
        </>
    )
}

export default ProfileContent