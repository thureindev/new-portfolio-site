import ProjectShowcase from './components/ProjectShowcase';

const Projects = ({ items }) => {
  return (
    <section
      className={`bg-neutral-50 dark:bg-neutral-800 text-stone-900 dark:text-stone-100
            min-h-screen min-w-screen
            flex flex-col lg:flex-row flex-wrap flex-1 items-center justify-center space-x-4 lg:space-x-8 space-y-4 lg:space-y-8
            py-20`}
    >
      <ProjectShowcase items={items} />
    </section>
  );
};

export default Projects;
