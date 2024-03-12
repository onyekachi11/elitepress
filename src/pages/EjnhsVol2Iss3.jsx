import {
    EJNHSVOL2ISS3,
    Newsletter,
    Footer, 
    Sidebar,
    Sidebar2, 
    NavbarPages,
    EjnhsVol2Iss3Pubs, 
    } from "../components";
  
  import styles from "../styles";
  import { ejnhsSideLinks } from "../constants";
  import { hero3 } from "../assets";
  
  const EjnhsVol2Iss3 = () => {
    return (
      <div className="font-instrument-sans">
        <NavbarPages />
        <div className='relative flex items-center justify-center w-full 
        md:max-h-[450px] ss:max-h-[300px] max-h-[200px] md:top-[6rem] 
        ss:top-[6rem] top-[4.8rem]'>
          <img src={hero3} alt='hero3'
          className='w-[120rem] md:h-[300px] ss:h-[250px]
          h-[150px]' />
          <div className='absolute w-full md:pb-8 ss:pb-8 pb-6'>
            <EJNHSVOL2ISS3 />
          </div>
        </div>
  
        <div className='journal'>
          <div className={`${styles.padding} max-w-[82rem] mx-auto flex 
          md:pt-28 hidden md:flex`}>
            <div className="mr-4 mt-[30px]">
              <Sidebar sideLinks={ejnhsSideLinks}/>
            </div>
  
            <div className='ml-20 w-full'>
              <EjnhsVol2Iss3Pubs />
            </div>
          </div>
  
          <div className='flex ss:pt-28 pt-28 md:hidden flex flex-col'>
            <div className=''>
              <EjnhsVol2Iss3Pubs />
            </div>
  
            <div className="">
              <Sidebar2 sideLinks={ejnhsSideLinks} />
            </div>
          </div>
        </div>
  
        <div className='bg-primaryalt'>
          <Newsletter />
        </div>
  
        <div className='footer'>
          <Footer />
        </div>
      </div>
    );
  };
  
  export default EjnhsVol2Iss3;