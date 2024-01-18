import React from 'react';
import * as S from './CountDownTimer.styled';
import { IcTimeColon } from '../../../assets/svg';
import CountDownCard from './ CountDownCard/CountDownCard';
import { useCountDown } from '../../../hooks/useCountDown';
// import { useNavigate } from 'react-router-dom';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const today = new Date();
  // const navigate = useNavigate();
  if (targetDate < today) {
    // 이따가 토너먼트 뷰로 연결!
    console.log('시간 지남~!');
  }
  const [days, hours, minutes, seconds] = useCountDown(targetDate.toLocaleString());
  console.log('시간이 어떻게 됐어??? targetDate', targetDate);
  console.log('시간이 어떻게 됐어??? targetDate to localestring', targetDate.toLocaleString);
  return (
    <S.TimerWrapper>
      {days > 0 ? (
        <>
          <CountDownCard text={'D'} />
          <S.DashDiv />
          <CountDownCard text={days.toString()} />
        </>
      ) : (
        <>
          <CountDownCard text={hours.toString()} />
          <IcTimeColon style={{ width: '0.3rem' }} />
          <CountDownCard text={minutes.toString()} />
          <IcTimeColon style={{ width: '0.3rem' }} />
          <CountDownCard text={seconds.toString()} />
        </>
      )}
    </S.TimerWrapper>
  );
};

export default CountdownTimer;