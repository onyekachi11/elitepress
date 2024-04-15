import React, { useState, useEffect } from 'react';
import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const JournalCard = ({ title, route }) => {
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const isMobile = windowWidth <= 1060;

    return (
      <div className='w-full'>
        <div className="flex gap-3 items-center justify-between
        w-full">
            <h3
            className='text-main md:text-[22px] ss:text-[21px] 
            text-[18px] font-bold md:leading-[25px] 
            ss:leading-[24px] leading-[22px]'
            >
                {title}
            </h3>

            <div className="flex items-center justify-end">
                <button onClick={() => navigate(route)}
                className='md:text-[15px] cursor-pointer
                ss:text-[14px] md:py-1.5 ss:py-1.5 hover:bg-main
                md:px-12 ss:px-8 text-textalt rounded-lg grow5
                font-medium border-textalt border-[1px] hover:text-white'
                >
                    Manage
                </button>
            </div>

            
        </div>
      </div>
    )
};

const AdminJournals = () => {
    const [journals, setJournals] = useState([]);

    useEffect(() => {
        const fetchJournals = async () => {
            try {
                const response = await fetch('http://localhost:3001/journals', {
                    method: 'GET',
                });
                const data = await response.json();
                setJournals(data);
            } catch (error) {
                console.error('Error fetching journals:', error);
            }
        };

        fetchJournals();
    }, []);

  return (
    <section className="flex items-center">
        <div className='items-center w-full flex flex-col md:mt-28 
        ss:mt-20 mt-20'>
            <motion.div className='flex items-center flex-col relative 
            justify-center w-full'>
                <div className='grid md:gap-5 ss:gap-6 gap-10 w-full'>
                    {journals.map((journal) => (
                        <div className='flex flex-col gap-5'>
                            <JournalCard 
                                key={journal.title}
                                {...journal}
                            />

                            <div className="items-center justify-center">
                                <div className='bg-main w-full h-[1px]
                                rounded-full' />
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default SectionWrapper(AdminJournals, '');