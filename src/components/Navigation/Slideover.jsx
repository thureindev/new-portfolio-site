import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Slideover = ({ isOpen, setIsOpen, header, content }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto relative w-screen max-w-md'>
                  <div
                    className={`flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl scrollbar-hide slideover
                  bg-neutral-50 dark:bg-neutral-800 text-stone-900 dark:text-stone-100
                  `}
                  >
                    <div className='px-4 sm:px-6'>
                      <Dialog.Title className='text-base font-semibold leading-6 text-gray-900'>
                        {
                          /* Header ------------------------------------------------------ */

                          header

                          /* ^^^^^^^ ------------------------------------------------------ */
                        }
                      </Dialog.Title>
                    </div>
                    {/* <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div className="flex space-x-4"> */}
                    {
                      /* Content ------------------------------------------------------ */

                      content

                      /* ^^^^^^^ ------------------------------------------------------ */
                    }
                    {/* </div>
                    </div> */}
                  </div>

                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute right-0 top-0 -mr-8 flex pr-2 pt-4 sm:-mr-10 sm:pl-4'>
                      <button
                        type='button'
                        className='rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                        onClick={() => setIsOpen(false)}
                      >
                        <span className='sr-only'>Close panel</span>
                        <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                      </button>
                    </div>
                  </Transition.Child>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Slideover;
