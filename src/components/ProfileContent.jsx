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
                            Hello! I&apos;m ThuRein, &nbsp;

                            <RoughNotation type="highlight" color="#D8BFD8" order="1" multiline={true}
                                className="dark:text-stone-900">
                                a web developer
                            </RoughNotation>
                            ,&nbsp;based in Bangkok
                        </h1>
                        <p className="mb-4 indent-8">
                            An enthusiastic builder, learner, and teacher, My strong foundation in
                            computing and business management complements my hands-on
                            experience in web development and teaching. I pride myself on my
                            unyielding drive to expand my knowledge base.
                        </p>
                        <p className="mb-4 indent-8">
                            Today, I stand as
                            &nbsp;
                            <RoughNotation type="highlight" color="#D8BFD8" order="2" multiline={true}
                                className="dark:text-stone-900 font-bold">
                                a web developer who never stops learning and exploring.
                            </RoughNotation>
                            &nbsp;
                            My pursuits extend to AI, distributed applications, and an interest in game development. Though I may not actively be pursuing game development at the moment, it&apos;s a testament to my love for innovation, continuous growth, and sharing my knowledge with others.

                            With a solid combination of


                            &nbsp;<RoughNotation type="underline" color="#37B9F2" order="3" multiline={true}
                                className="italic">
                                hands-on experience
                            </RoughNotation>
                            ,
                            &nbsp;<RoughNotation type="underline" color="#37B9F2" order="4" multiline={true}
                                className="italic">
                                continuous learning
                            </RoughNotation>
                            , and
                            &nbsp;<RoughNotation type="underline" color="#37B9F2" order="5" multiline={true}
                                className="italic">
                                a love for teaching
                            </RoughNotation>&nbsp;

                            I am ready to contribute, innovate, and grow in a challenging and rewarding environment.

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