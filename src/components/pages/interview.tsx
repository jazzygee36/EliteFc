import TruncatedText from '../common/truncatedText';

const Interview = () => {
  return (
    <>
      <div className=' w-[100%]   py-3   align-middle font-sans text-xs font-bold  '>
        <div className='font-bold text-center uppercase text-[14px]'>
          Bella FC conference room after the match
        </div>
        <div className='text-[#707070] mt-5 capitalize'>
          <span className='text-[#121212] font-bold '>
            Samson: <br />
          </span>{' '}
          It’s an embarrassing loss and I apologise to our fans.
        </div>
        <div className='text-[#707070] mt-5 capitalize'>
          <span className='text-[#121212] font-bold '>
            Bella: <br />
          </span>{' '}
          <TruncatedText
            maxLength={100}
            text='Bella offered up a heartfelt apology to Bella FC fans after Saturday 0-5
        defeat by D’Real FC at home.'
          />
        </div>
        <div className='text-[#707070] mt-5 capitalize'>
          <span className='text-[#121212] font-bold '>
            Yellow: <br />
          </span>{' '}
          <TruncatedText
            maxLength={100}
            text=' I don’t have the words, or the explanation, for the performance
        yesterday. Maybe we showed D’Real FC too much respect but we should
        never play like this in our next match. We should be right on them,
        pressing them, keeping them under pressure. “But they played so well
        yesterday. They played much better, it felt like they were just
        absolutely everywhere. We tried to play but they pressed us so hard. It
        was like they were the home team. I never want to experience this
        again.'
          />
        </div>
        <div className='text-[#707070] mt-5 capitalize'>
          <span className='text-[#121212] font-bold '>
            Sodiq: <br />
          </span>{' '}
          <TruncatedText
            maxLength={100}
            text='  “It’s very difficult. I’ve never experienced anything like this. I
        will try to motivate my teammates. Everybody feels very, very guilty
        yesterday and, from today, we need to prepare for the next game. I know
        everybody will work very hard and fully committed to repairing this and
        to prove to our fans that we aren’t like this. “For the fans, thank you
        and please keep supporting us. I felt like I needed to say something for
        the changing room. It’s so difficult in that changing room right now
        because we are all professional footballers and it’s difficult to find
        the words. "But tomorrow is a new day and we have to move forward.
        Hopefully people will come with their heads up and, if not, I will be
        the first to try and get them back thinking positively.”'
          />
        </div>
        <div className='text-[#707070] mt-5 capitalize'>
          <span className='text-[#121212] font-bold '>
            Segun: <br />
          </span>{' '}
          <TruncatedText
            maxLength={100}
            text='
           “I’ve never experienced such a big loss like yesterday and I hope I
        never experience it again. It’s so embarrassing for me and the team when
        [D’Real FC] are passing the ball to each other and their fans are
        applauding every pass. It’s embarrassing for us and for the fans. “We
        can only say sorry and apologise to our fans, and thank you to the fans
        who stayed with us until the end. I understand those who left before the
        end too because, to be honest, I probably would have left too.”'
          />
        </div>
        <div className='font-bold text-center uppercase mt-5 text-[14px]'>
          D’Real FC conference room after the match
        </div>
        <div className='text-[#707070] mt-5 capitalize'>
          <span className='text-[#121212] font-bold '>
            Nelson: <br />
          </span>{' '}
          <TruncatedText
            maxLength={100}
            text='
          Of course I’m better. I’m happy with what My team played yesterday and what I saw in my players, I’m happy that people were sad, that people were frustrated, I’m happy we were on exactly the same page, and happy to see the boys coming back again in my page because we don’t have many days to be sad, we don’t have many days to be, something like, grieve, we don’t have many days for that, so I’m happy that team players come back exactly as myself in the second half.'
          />
        </div>
      </div>
    </>
  );
};

export default Interview;
