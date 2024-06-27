import TruncatedText from '../common/truncatedText';

const OfficialsPr = () => {
  return (
    <div className=' w-[100%]   py-3   align-middle font-sans text-xs font-bold  '>
      <div className='font-bold text-center uppercase text-[14px]'>
        Officials Press Release
      </div>
      <div className='text-[#707070] mt-5 capitalize'>
        <span className='text-[#121212] font-bold '>
          D’Real FC Triumphs Over Bella FC. <br />
        </span>{' '}
        <TruncatedText
          maxLength={100}
          text=' Result: D’Real FC Triumphs Over Bella FC 6-4 Aggregate

In a thrilling encounter during the ongoing Elite FC Tournament, D’Real FC secured a notable victory against Bella FC, achieving a 6-5 aggregate score on Wednesday, thereby advancing to the final round.'
        />
      </div>
      <div className='text-[#707070] mt-5 capitalize'>
        <span className='text-[#121212] font-bold '>
          Disqualification of Team Big Ballers FC: <br />
        </span>{' '}
        <TruncatedText
          maxLength={100}
          text='
          Disqualification of Team Big Ballers from Tournament

In a regrettable turn of events at the ongoing Elite FC Tournament , Team Big Ballers has been disqualified following their 4-1 defeat in the initial match. 

The decision was made due to concerns over unsportsmanlike behavior and perceived arrogance displayed during and after the match.

As a result of Team Big Baller disqualification, their opponent, Team Killing Dem FC has been declared the winner of the match and will advance to the final of the tournament. 

This decision ensures fairness and upholds the integrity of the competition as it was stated that the Rules and Regulations will be strictly followed.

"We regret having to take this action, but it is essential to maintain the standards of sportsmanship and respect that are core to our tournament,".

We appreciate the efforts of all participating teams and look forward to a competitive final." 

'
        />
      </div>
    </div>
  );
};

export default OfficialsPr;
