import React, { useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";
import Card from './Card';
import news1 from "../../../public/news1.jpg"
import news2 from "../../../public/news2.jpg"
import news3 from "../../../public/news3.jpg"

const News = () => {
    const [active, setisActive] = useState(false);


    const handleClick = () => {
        setisActive(true)
        console.log("clicked");
        setTimeout(()=>{

            setisActive(false);
        },3000)

        //sert to false after 3 sec

    }
    const headingVariants = {
        initial: {
            y: -100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    const cardVariants = {
        initial: {
            opacity: 0,
            scale: 0.8,
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    const items = [
        {
            heading: "Revolutionizing Fitness",
            news: "The Launch of Virtual Trainer 2.0 Promises an Unparalleled Workout Experience! Get ready to break a sweat like never...",
            image: news1
        },
        {
            heading: "Unveiling the Secret",
            news: "Prepare for an adrenaline-fueled journey as Cryptic Adventures introduces a groundbreaking twist to the classic escape...",
            image: news2
        },
        {
            heading: "Breaking Boundaries",
            news: "Dive into stunning underwater landscapes, encounter mesmerizing marine life, and uncover ancient mysteries hidden beneath the...",
            image: news3
        }
    ];

    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" })

    return (
        <motion.div
            className="div flex flex-col justify-center  h-full"
            id="News"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            ref={ref}
        >
            <motion.div
                variants={headingVariants}
                animate={isInView ? "animate" : "initial"}
            >
                {active ? (<motion.div role="alert" className="alert alert-error w-fit ml-[82vw] relative top-12">
                <svg xmlns="http://www.w3.org/2000/svg" className=" stroke-current  h-6 w-7" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Error! Failed to Load.</span>
            </motion.div>) : ""}
                <motion.div className="flex justify-center mb-1 mt-5 text-8xl "
                    whileHover={{ color: "orange" }}
                >
                    <h1 className='w-fit font-fancy'>COMING SOON</h1>
                </motion.div>
            </motion.div>
            <motion.div className="flex p-10 gap-16 self-center ml-28" variants={cardVariants}>
                {items.map((item, index) => (
                    <Card key={index} heading={item.heading} news={item.news} image={item.image} handleClick={handleClick} />
                ))}
            </motion.div>

            
        </motion.div>
    );
}

export default News;
