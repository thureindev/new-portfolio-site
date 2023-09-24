import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

import avatar from "../assets/avatar.jpg";
import cvFile from "../assets/THUREIN_TUN_CV.pdf";

import ProfileSocialLink from "./ProfileSocialLink";
import SkillsDisplay from "./SkillsDisplay";


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
                            experience in web development and teaching.
                        </p>

                        <p className="mb-4 indent-8">                            
                            I specialize in building 
                            &nbsp;<RoughNotation type="underline" color="#37B9F2" order="3" multiline={true}
                                className="italic">
                                web solutions using the MERN stack.
                            </RoughNotation>
                            &nbsp;
                            My background with 
                            
                            &nbsp;<RoughNotation type="circle" color="#37B9F2" order="4" multiline={true}
                                className="italic">
                                PHP
                            </RoughNotation>
                            &nbsp;
                            has equipped me to understand and
                            adapt to diverse coding environments, My proficiency extends
                            to 
                            &nbsp;<RoughNotation type="circle" color="#37B9F2" order="5" multiline={true}
                                className="italic">
                                Python, 
                            </RoughNotation>
                            &nbsp;
                            
                            particularly for data manipulation and automation.
                            
                        </p>

                        <p className="mb-4 indent-8">
                            Today, I stand as
                            &nbsp;
                            <RoughNotation type="highlight" color="#D8BFD8" order="2" multiline={true}
                                className="dark:text-stone-900 font-bold">
                                a web developer who never stops learning and exploring.
                            </RoughNotation>
                            &nbsp;

                            With a solid combination of hands-on experience, continuous learning, and a love for teaching.
                            
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

                    </div>

                </main>

                <img
                    src={avatar} alt="avatar"
                    className="lg:mb-0 mb-4 mt-5 rounded-full w-20 h-20 lg:w-60 lg:h-60 object-cover shadow-lg"
                />
            </div>

            <div className="flex items-center justify-center pl-8 pr-8 ">
                <div className="max-w-2xl">
                    <SkillsDisplay />
                </div>
            </div>
        </>
    )
}

export default ProfileContent