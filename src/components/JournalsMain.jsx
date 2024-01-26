import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { journals } from '../constants';
import { useNavigate } from 'react-router-dom';

const JournalCard = ({ index, title, icon, desc }) => {
    return (
      <div className='w-full grow3'>
        <motion.div
          variants={fadeIn('right', 'spring', 0.4 * index, 0.75)}
          className='w-full cursor-pointer shadow-lg hover:shadow-xl 
          rounded-lg bg-primaryalt'
        >
            <div options={{ max: 45, scale: 1, speed: 450 }}
                className='p-5 md:gap-8 ss:gap-5 gap-3 flex justify-evenly 
                md:flex-row ss:flex-row flex-col'
            >
                <img src={icon} alt={title}
                    className='w-[250px] h-auto object-contain'
                />

                <div className="flex flex-col md:gap-3 ss:gap-3 gap-2">
                    <h3
                    className='text-main md:text-[25px] ss:text-[18px] 
                    text-[18px] font-bold md:leading-[28px] 
                    ss:leading-[20px] leading-[16px]'
                    >
                        {title}
                    </h3>

                    <div className='flex'>
                        <div className='bg-secondary w-full h-[2px] 
                        rounded-full' />
                    </div>

                    <h3
                    className='text-textalt md:text-[15px] ss:text-[14px] 
                    text-[14px] md:leading-[18px] ss:leading-[18px]
                    leading-[17px]'
                    >
                        {desc}
                    </h3>
                </div>
            </div>
        </motion.div>
      </div>
    )
  };

const Journals = () => {
    const navigate = useNavigate();

  return (
    <section className="md:min-h-[1700px] ss:min-h-[800px] min-h-[1800px] 
    flex items-center">
        <div className='items-center w-full flex flex-col md:mt-28 
        ss:mt-20 mt-24'>
            <motion.div className='flex items-center flex-col relative 
            justify-center w-full'>
                <div className='grid grid-cols-2 md:gap-12 ss:gap-4 gap-5'>
                    {journals.map((journal, index) => (
                        <JournalCard 
                            key={journal.title}
                            index={index}
                            {...journal}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default SectionWrapper(Journals, '');