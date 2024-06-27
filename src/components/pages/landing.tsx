import { useMemo, useState } from 'react';
import { Tabs, TabPanel } from '../common/tabs';
import Bayo from '../../assets/bayo.mp4';
import Interview from './interview';
import Yellow from '../../assets/yellow.jpeg';
import Red from '../../assets/red.jpeg';
import OfficialsPr from './officialsPress';
const LandingPage = () => {
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [firstLeg, setFirstLeg] = useState(false);
  const [secondLeg, setSecondLeg] = useState(false);
  const [final, setFinal] = useState(false);
  const [odds, setOdds] = useState(0);
  const [firstOdds] = useState(2.3);
  const [secondOdds] = useState(4.33);
  const [thirdOdds] = useState(1.9);

  const handleOdds = () => {
    setOdds((prev) => prev + firstOdds);
  };
  const handleSecondOdds = () => {
    setOdds((prev) => prev + secondOdds);
  };
  const handleThirdOdds = () => {
    setOdds((prev) => prev + thirdOdds);
  };

  const [stake, setStake] = useState<any>(0);
  const sumAmount = useMemo(() => {
    {
      if (stake > 0) {
        return stake * odds;
      } else null;
    }
  }, [stake, odds]);
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
      <video src={Bayo} controls></video>

      <div className=' w-[100%] select-none  py-3  text-center align-middle font-sans text-xs font-bold uppercase  shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
        <Tabs>
          <TabPanel label='Match fixture'>
            <select
              className=' m-auto mt-5 mb-5 flex col justify-center text-[#101039] '
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
                <div className='text-[14px] text-[#121212] mb-4 font-semibold capitalize'>
                  Third place
                </div>
                <div className=' flex mb-8 justify-between font-semibold text-[#707070] '>
                  <div>4:30pm</div>

                  <div>Big Baller's FC</div>
                  <div>v</div>

                  <div>Bella FC</div>
                </div>

                <hr className='mb-5 text-[blue] ' />
                <div className='text-[14px] text-[#121212] mb-4 font-semibold capitalize'>
                  Final
                </div>

                <div className=' flex mb-8 justify-between font-semibold text-[#707070]'>
                  <div>5:30pm</div>

                  <div>D'Real FC</div>
                  <div>v</div>

                  <div>Big Baller's FC </div>
                </div>
              </div>
            )}

            {isOptionSelected && <div></div>}
          </TabPanel>
          <TabPanel label='Interviews'>
            <Interview />
          </TabPanel>
          <TabPanel label='Officals PRs'>
            <OfficialsPr />
          </TabPanel>

          <TabPanel label='News'>
            <div>
              All the players that collected Yellow card must pay before the
              next match:
              <ul className='mt-3'>
                <div className='flex justify-center gap-4 items-center'>
                  <li>Michael</li>
                  <img src={Yellow} alt='yellow' width={10} />
                </div>

                <br />
                <div className='flex justify-center gap-4  items-center'>
                  <li>Big Ballers FC goal keep</li>
                  <div className='flex gap-3'>
                    <img src={Yellow} alt='yellow' width={10} />
                    <img src={Red} alt='yellow' width={10} />
                  </div>
                </div>
              </ul>
            </div>
          </TabPanel>
          <TabPanel label='Betting'>
            <div className='flex justify-between bg-slate-500 p-2 text-[#ffffff]'>
              <div>Sunday</div>
              <div className='flex justify-between gap-12'>
                <div>1</div>
                <div>X</div>
                <div>2</div>
              </div>
            </div>
            <div className='flex justify-between gap-5 items-center mt-3'>
              <div className='font-bold'>
                <div>D'Real Fc</div>
                <br />
                <div>Killing Dem</div>
              </div>
              <div className='flex justify-between gap-3'>
                <div
                  onClick={handleOdds}
                  className='bg-[#0D7B3C] p-3   pl-2 pr-2 text-[#ffffff]'
                >
                  2.30
                </div>
                <div
                  onClick={handleSecondOdds}
                  className='bg-[#0D7B3C] p-3   pl-2 pr-2 text-[#ffffff]'
                >
                  4.33
                </div>
                <div
                  onClick={handleThirdOdds}
                  className='bg-[#0D7B3C] p-3   pl-2 pr-2 text-[#ffffff]'
                >
                  1.90
                </div>
              </div>
            </div>

            <div className='text-center mt-8 font-bold capitalize'>
              Odds: {odds}
            </div>
            <div className='flex justify-between gap-3 w-[100%]  items-center align-middle m-auto mt-3'>
              <div className='flex items-center'>
                <button className=''>Stake:</button>{' '}
                <input
                  type='text'
                  placeholder='N'
                  value={stake}
                  onChange={(e) => {
                    setStake(e.target.value);
                  }}
                />
              </div>
              <div className='capitalize text-red-950 font-bold '>
                Possible Win: {sumAmount}
              </div>
            </div>

            {stake > 0 && (
              <button className='p-3 bg-blue-950 text-[#fff] w-full mt-8 font-semibold text-[16px]'>
                Place Bet
              </button>
            )}
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default LandingPage;
