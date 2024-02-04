import ProfileContent from './components/ProfileContent';
import RecentProjectsContent from './components/RecentProjectsContent';

const Home = ({ items, isDarkMode }) => {
  return (
    <div className='bg-neutral-50 dark:bg-neutral-800 text-stone-900 dark:text-stone-100'>
      <ProfileContent />

      <RecentProjectsContent items={items} isDarkMode={isDarkMode} />
    </div>
  );
};

export default Home;
