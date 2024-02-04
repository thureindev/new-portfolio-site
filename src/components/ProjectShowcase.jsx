import Card3D from './Card3D/Card3D';

function ProjectShowcase({ items }) {
  return (
    <>
      <span>
        {/* Because of tailwind error first element is always out of order in flex box
        so this empty span is places as first item*/}
      </span>

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
              <h2>{item.title}</h2>
              <p>{item.short}</p>
            </div>
          </>
        </Card3D>
      ))}
    </>
  );
}

export default ProjectShowcase;
