import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { arrow, arrowright } from '../assets';
import { SectionWrapper } from '../hoc';

const Sidebar2 = ({ sideLinks }) => {
  const navigate = useNavigate();
  const [expandedItem, setExpandedItem] = useState(null);

  const handleSideItemClick = (link, e) => {
    e.stopPropagation();
    setExpandedItem(expandedItem === link.id ? null : link.id);
  };
  
  const handleSubItemClick = (route, e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(route);
  };
  
  
  return (
    <div className='flex items-center w-full'>
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col items-center w-full pb-10">
          <ul className="list-none flex flex-col gap-4 w-full">
            {sideLinks.map((link) => (
              <li
                key={link.id}
                className={`text-[15px] px-5 py-2 border-textalt
                  border-[0.5px] text-decoration-none cursor-pointer 
                  text-textalt list-item bg-white`}
                onClick={(e) => handleSideItemClick(link, e)}
              >
                <div className="flex items-center justify-between">
                  {link.title}
                  <span>
                    <img
                      src={arrow}
                      alt={link.title}
                      className="ss:h-[5px] h-[5px] w-auto"
                    />
                  </span>
                </div>

                {expandedItem === link.id && (
                  <div className='mt-2'>
                  {link.links && link.links.length > 0 && (
                    <ul>
                      {link.links.map((submenuItem, index) => (
                        <li key={index}>
                          <a href={submenuItem.route} className="block 
                          text-main py-[2px] font-medium"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSubItemClick(submenuItem.route, e);
                          }}
                          >
                            {submenuItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                )}
              </li>
            ))}

            <li className='text-[15px] px-5 py-2 border-textalt 
                border-[0.5px] text-decoration-none cursor-pointer 
                text-white list-item bg-main ss:mt-16 mt-8'>
              <button
                onClick={(e) => {
                  e.preventDefault();
                }}
                className='flex gap-6 items-center w-full justify-between'
              >
                Submit Manuscript
                <img src={arrowright} alt='submit' className='ss:h-[10px] h-[10px] w-auto' />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Sidebar2, '');