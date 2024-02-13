import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { arrow, arrowright } from '../assets';

const Sidebar = ({ sideLinks }) => {
  const navigate = useNavigate();
  const [expandedItem, setExpandedItem] = useState(null);

  const handleSideItemClick = (link) => {
    setExpandedItem(expandedItem === link.id ? null : link.id);
  };

  const handleSubItemClick = (route) => {
    navigate(route);
  };

  return (
    <div className='flex items-center hidden md:flex w-full'>
      <div className="w-full flex justify-between items-center py-10">
        <div className="flex flex-col items-center w-full">
          <ul className="list-none flex flex-col gap-5 w-[350px]">
            {sideLinks.map((link) => (
              <li
                key={link.id}
                className={`grow4 text-[18px] px-6 py-3 border-textalt 
                border-[0.5px] text-decoration-none cursor-pointer
                text-textalt list-item bg-white`}
                onClick={(e) => handleSideItemClick(link, e)}
              >
                <div className="flex gap-6 items-center justify-between">
                  {link.title}
                  <span>
                    <img
                      src={arrow}
                      alt={link.title}
                      className="h-[5px] w-auto"
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
                            text-main py-[3px] font-medium"
                            onClick={(e) => {
                              e.preventDefault();
                              handleSubItemClick(submenuItem.route);
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

            <li className='grow4 text-[18px] px-6 py-3 border-textalt 
                border-[0.5px] text-decoration-none cursor-pointer 
                text-white list-item bg-main mt-16'>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                }}
                className='flex gap-6 items-center w-full justify-between'
              >
                Submit Manuscript
                <img src={arrowright} alt='submit'
                  className='md:h-[11px] ss:h-[10px] w-auto'
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
