import { useState } from 'react';
import Samson from '../../assets/samson.jpg';
const LandingPage = () => {
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [firstLeg, setFirstLeg] = useState(false);
  const [secondLeg, setSecondLeg] = useState(false);
  const [final, setFinal] = useState(false);

  const handleSelectChange = (event: any) => {
    if (event.target.value === 'firstLeg') {
      setSecondLeg(false);
      setFinal(false);

      setFirstLeg(true);
    } else if (event.target.value === 'secondLeg') {
      setFirstLeg(false);
      setFinal(false);

      setSecondLeg(true);
    } else if (event.target.value === 'final') {
      setSecondLeg(false);
      setFirstLeg(false);

      setFinal(true);
    } else {
      setIsOptionSelected(false);
    }
  };
  return (
    <>
      <div className='bg-[#101039] h-[100%] w-[100%]  text-[#ffffff] pt-3 pb-3 text-center'>
        <div className='text-[30px] font-semibold'>
          {' '}
          Elite's Fc <span className='text-[12px]'> Tournament</span>{' '}
        </div>
      </div>
      <img src={Samson} alt='lost' />
      <div className=' select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase  shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
        Football fixtures
      </div>
      <select
        className=' m-auto mt-5 mb-5 flex col justify-center text-[#101039]'
        onChange={handleSelectChange}
      >
        <option value='' className='text-[11px]  text-[#101039] '>
          Select fixtures
        </option>
        <option value='firstLeg' className='text-[11px]'>
          Semi final first leg
        </option>
        <option value='secondLeg' className='text-[11px]'>
          Semi final second leg
        </option>
        <option value='final' className='text-[11px]'>
          Final
        </option>
      </select>
      {firstLeg && (
        <div className='mt-5 pl-5 pr-5'>
          <div className='text-[14px] text-[#121212] mb-4 font-semibold'>
            Saturday 22, June 2024
          </div>
          <hr className='mb-5 text-[blue] ' />
          <div className=' flex mb-8 justify-between font-semibold text-[#707070]'>
            <div>4:30pm</div>
            <div>Big Baller's Fc &nbsp; 1</div>
            <div>v</div>
            <div>4 &nbsp;Killing Dem Fc</div>
          </div>
          <div className=' flex mb-8 justify-between font-semibold text-[#707070]'>
            <div>5:15pm</div>
            <div>D'Real Fc &nbsp;&nbsp;&nbsp; 5</div>
            <div>v</div>
            <div>0 &nbsp;&nbsp;&nbsp; Bella Fc</div>
          </div>
          <hr className='mb-5 text-[blue] ' />
        </div>
      )}
      {secondLeg && (
        <div className='mt-5 pl-5 pr-5'>
          <div className='text-[14px] text-[#121212] mb-4 font-semibold'>
            Wednessday 26, June 2024
          </div>
          <hr className='mb-5 text-[blue] ' />
          <div className=' flex mb-8 justify-between font-semibold text-[#707070]'>
            <div>5:00pm</div>
            <div> Bella Fc</div>
            <div>v</div>

            <div>D'Real Fc</div>
          </div>
          <div className=' flex mb-8 justify-between font-semibold text-[#707070]'>
            <div>5:40pm</div>

            <div>Killing Dem Fc</div>
            <div>v</div>

            <div>Big Baller's Fc </div>
          </div>
          <hr className='mb-5 text-[blue] ' />
        </div>
      )}
      {final && (
        <div className='mt-5 pl-5 pr-5'>
          <div className='text-[14px] text-[#121212] mb-4 font-semibold'>
            Sunday 30, June 2024
          </div>
          <hr className='mb-5 text-[blue] ' />
          <div className=' flex mb-8 justify-between font-semibold text-[#707070]'>
            <div>5:00pm</div>
            <div>loading....</div>
          </div>

          <hr className='mb-5 text-[blue] ' />
        </div>
      )}

      {isOptionSelected && <div></div>}

      <div className='bg-[#101039] h-[100%] w-[100%]  text-[#ffffff] pt-3 pb-3 text-[12px] text-center'>
        Elite Fc
      </div>
    </>
  );
};

export default LandingPage;