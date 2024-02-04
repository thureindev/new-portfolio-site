import { MdWhatsapp, MdEmail, MdLocationOn } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import SkillsDisplay from './components/SkillsDisplay';

const Contact = () => {
  return (
    <>
      <div
        className={`min-h-screen min-w-screen py-20 px-4 flex flex-col lg:flex-row items-start justify-center mx-auto
        bg-neutral-50 dark:bg-neutral-800 
        text-stone-900 dark:text-stone-100`}
      >
        <div className=''>
          <h2 className='my-8 mx-4 text-lg filter-none'>Contact</h2>
          <section className='mx-4'>
            <p
              className='flex items-center justify-start space-x-4 mb-4 filter-none
            text-teal-600 dark:text-teal-200'
            >
              <MdWhatsapp className='h-6 w-6' aria-hidden='true' />
              <a href='#'>(+66) 64 135 1355</a>
            </p>
            <p
              className='flex items-center justify-start space-x-4 mb-4 filter-none
            text-sky-700 dark:text-sky-300'
            >
              <MdEmail className='h-6 w-6' aria-hidden='true' />
              <a href='mailto: thureindev@outlook.com'>
                thureindev@outlook.com
              </a>
            </p>
            <p className='flex items-center justify-start space-x-4 mb-4 filter-none'>
              <MdLocationOn className='h-6 w-6' aria-hidden='true' />
              <span>Bangkok, Thailand (Available for remote job option)</span>
            </p>
            <p className='flex items-center justify-start space-x-4 mb-4 text-sky-700 dark:text-sky-300 filter-none'>
              <TbWorld className='h-6 w-6' aria-hidden='true' />
              <Link to={'/'}>https://thureindev.github.io</Link>
            </p>
          </section>

          <SkillsDisplay />
        </div>

        <section className='max-w-xl'>
          <h2 className='my-8 mx-4 text-lg filter-none'>Get in touch</h2>
          <p className='mb-4 mx-4 text-base '>
            If you&apos;ve got a web project in mind, I&apos;m all ears. Feel
            free to reach out. Also, I&apos;m on the lookout for a fulfilling
            full-time position, so don&apos;t hesitate to drop me a line if you
            have an opportunity in mind. Looking forward to connecting!
          </p>
        </section>
      </div>
    </>
  );
};

export default Contact;
