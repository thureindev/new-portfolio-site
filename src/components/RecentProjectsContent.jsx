import Card3D from './Card3D/Card3D';

const RecentProjectsContent = ({ items }) => {
  return (
    <>
      <h2 className='ml-auto mr-auto max-w-2xl flex items-start justify-center flex-1 mb-6 mt-12 lg:mt-20 pl-8 pr-8 md:px-20 lg:text-xl font-bold text-left'>
        Recent Projects
      </h2>

      <section className='flex flex-col lg:flex-row items-center justify-center space-x-4 lg:space-x-8 space-y-8 lg:space-y-0 flex-1 pb-12 lg:pb-20'>
        {items.map((item) => (
          <Card3D
            itemId={item.id}
            key={item.id}
            href={item.href}
            borderClasses={item.border}
          >
            <>
              <div
                className='shadow'
                style={{ '--url': `url(${item.fullImg})` }}
              ></div>
              <div
                className='image background'
                style={{ '--url': `url(${item.bgImg})` }}
              ></div>
              <div
                className='image cutout'
                style={{ '--url': `url(${item.cutoutImg})` }}
              ></div>

              <div className='content'>
                <h2 className='font-semibold'>{item.title}</h2>
                <p>{item.short}</p>
              </div>
            </>
          </Card3D>
        ))}
      </section>
    </>
  );
};

export default RecentProjectsContent;
