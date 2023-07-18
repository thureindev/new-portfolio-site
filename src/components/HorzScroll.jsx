import React from 'react';

import 'react-horizontal-scrolling-menu/dist/styles.css';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from "./HorzScrollPartials/Arrows";
import Card3D from "./Card3d/Card3D";
import ProjectCard from "./HorzScrollPartials/ProjectCard";

import usePreventBodyScroll from "./HorzScrollPartials/usePreventBodyScroll";
import useDrag from "./HorzScrollPartials/useDrag";
// NOTE: for hide scrollbar
import "./HorzScrollPartials/hideScrollbar.css";


// const getItems = () =>
//   Array(20)
//     .fill(0)
//     .map((_, ind) => ({ id: `element-${ind}` }));

function HorzScroll({ items }) {


    const { disableScroll, enableScroll } = usePreventBodyScroll();

    //   const [items, setItems] = React.useState(getItems);

    const [selected, setSelected] = React.useState([]);
    const [position, setPosition] = React.useState(0);
    // NOTE: for drag by mouse
    const { dragStart, dragStop, dragMove, dragging } = useDrag();

    const handleDrag = ({ scrollContainer }) => (ev) =>
        dragMove(ev, (posDiff) => {
            if (scrollContainer.current) {
                scrollContainer.current.scrollLeft += posDiff;
            }
        });

    const handleItemClick = (itemId) => () => {
        if (dragging) {
            return false;
        }
        setSelected(selected !== itemId ? itemId : "");
    };

    const isItemSelected = (id) => !!selected.find((el) => el === id);

    const handleClick = (id) => ({ getItemById, scrollToItem }) => {

        const itemSelected = isItemSelected(id);

        setSelected((currentSelected) =>
            itemSelected
                ? currentSelected.filter((el) => el !== id)
                : currentSelected.concat(id)
        );
    };

    const onWheel = (apiObj, ev) => {
        const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

        if (isThouchpad) {
            ev.stopPropagation();
            return;
        }

        if (ev.deltaY < 0) {
            apiObj.scrollNext();
        } else if (ev.deltaY > 0) {
            apiObj.scrollPrev();
        }
    }

    return (
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
            <ScrollMenu
                LeftArrow={LeftArrow}
                RightArrow={RightArrow}

                onWheel={onWheel}
                onMouseDown={() => dragStart}
                onMouseUp={() => dragStop}
                onMouseMove={handleDrag}
            >
                {items.map((item) => (

                    // <ProjectCard
                    //   itemId={id} // NOTE: itemId is required for track items
                    //   title={id}
                    //   key={id}
                    //   onClick={handleClick(id)}
                    //   selected={isItemSelected(id)}
                    // />
                    <Card3D
                        itemId={item.id}
                        key={item.id}
                        onClick={handleClick(item.id)}
                        selected={isItemSelected(item.id)}

                        moreClasses="card-horz-gap"
                    >
                        <>
                        <div className="shadow" style={{ "--url": "url('https://i.ibb.co/PM4ghD4/full.png')" }}></div>
                        <div className="image background" style={{ "--url": "url('https://i.ibb.co/JpJVJxq/Background.png')" }}></div>
                        <div className="image cutout" style={{ "--url": "url('https://i.ibb.co/Dw3q3tZ/cutout.png')" }}></div>

                        <div className="image cutout" style={{ "--url": "url('../../assets/avatar.jpg')" }}></div>

                        <div className="content">
                            <h2>{item.title}</h2>
                            <p>{item.short}</p>
                        </div>
                        </>
                    </Card3D>


                ))}
            </ScrollMenu>
        </div>
    );
}

export default HorzScroll;