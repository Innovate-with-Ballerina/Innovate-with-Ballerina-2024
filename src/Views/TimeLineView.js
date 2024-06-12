import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import TimeLineCard1 from "../Components/TimeLineCard1";
import TimeLineCard2 from "../Components/TimeLineCard2";
import TimeLineCard3 from "../Components/TimeLineCard3";
import '../Stylesheets/timeLineView.css';

export default function TimeLineView() {
    const [visibleCard, setVisibleCard] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const cards = document.querySelectorAll('.card');
            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const isVisible = rect.top < windowHeight / 2 && rect.bottom > windowHeight / 2;
                if (isVisible) {
                    setVisibleCard(index + 1);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        controls.start({ opacity: 1 });
    }, [visibleCard, controls]);

    return (
        <div className="full-screen-container">
            <div className='text-background-div1'>
                <p className='text-background'>Stay  </p>
            </div>
            <div className='text-background-div2'>
                <p className='text-background'>Updated  </p>
            </div>
            <div className='text-background-div3'>
                <p className='text-background'>Stay</p>
            </div>
            <div className='text-background-div4'>
                <p className='text-background'>Updated  </p>
            </div>
            <div className="inner-container">
                <motion.div className={`card card1`} animate={visibleCard >= 1 ? controls : { opacity: 0 }}>
                    <TimeLineCard1 text={"Starting Registration"} month={"JUNE"} day={"15"} />
                </motion.div>
                <motion.div className={`card card2`} animate={visibleCard >= 2 ? controls : { opacity: 0 }}>
                    <TimeLineCard2 text={"Closing Registrations"} month={"JULY"} day={"6"} />
                </motion.div>
                <motion.div className={`card card3`} animate={visibleCard >= 3 ? controls : { opacity: 0 }}>
                    <TimeLineCard2 text={"Case Study Publishing"} month={"JULY"} day={"10"} />
                </motion.div>
                <motion.div className={`card card4`} animate={visibleCard >= 4 ? controls : { opacity: 0 }}>
                    <TimeLineCard1 text={"Workshop 02"} month={"JULY"} day={"15"} />
                </motion.div>
                <motion.div className={`card card5`} animate={visibleCard >= 5 ? controls : { opacity: 0 }}>
                    <TimeLineCard3 text={"Workshop 02"} month={"JULY"} day={"18"} />
                </motion.div>
                <motion.div className={`card card6`} animate={visibleCard >= 6 ? controls : { opacity: 0 }}>
                    <TimeLineCard1 text={"Opening Submissions"} month={"JULY"} day={"19"} />
                </motion.div>
                <motion.div className={`card card7`} animate={visibleCard >= 7 ? controls : { opacity: 0 }}>
                    <TimeLineCard3 text={"Workshop 03"} month={"JULY"} day={"25"} />
                </motion.div>
                <motion.div className={`card card8`} animate={visibleCard >= 8 ? controls : { opacity: 0 }}>
                    <TimeLineCard1 text={"Closing Submissions"} month={"AUGUST"} day={"18"} />
                </motion.div>
            </div>
        </div>
    );
}
