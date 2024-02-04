import ProfileContent from './components/ProfileContent';
import RecentProjectsContent from './components/RecentProjectsContent';

const Home = ({ items }) => {
  return (
    <div className='bg-neutral-50 dark:bg-neutral-800 text-stone-900 dark:text-stone-100'>
      <ProfileContent />

      <RecentProjectsContent items={items} />
    </div>
  );
};

export default Home;
