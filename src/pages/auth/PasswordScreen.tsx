import React, { useEffect } from 'react';
import TelegramImg from '../../assets/telegram.png';
import ProfileTab from '../../components/ProfileTab';
import OTP from '../../components/OTP';
import Button from '../../components/Button';

export default function PasswordScreen() {
  const [timer, setTimer] = React.useState(60);
  const [sentCode, setSentCode] = React.useState(false);

  useEffect(() => {
    let timerID = null;

    if (sentCode && timer > 0) {
      timerID = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            setSentCode(false); // Reset when timer reaches 0
            return 60; // Reset to 60 for next use
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerID) {
        clearInterval(timerID);
      }
    };
  }, [sentCode, timer]);

  const handleResendClick = () => {
    if (!sentCode) {
      setSentCode(true);
      setTimer(60);
    }
  };

  return (
    <div className="bg-black flex flex-col gap-y-7 text-white min-h-screen pt-4">
      <ProfileTab />
      <div className="w-[335px]  pl-[28px] pr-[28px] flex flex-col h-fit pb-5 mx-auto rounded-[15px] border bg-[#0D1015] border-[#232429] gap-y-7">
        <div className="h-fit">
          <img
            src={TelegramImg}
            alt="Home Preview"
            className="w-16 h-16 mx-auto mt-[50px]"
          />
          <span className="text-white font-bold text-center block w-full text-4">
            Подтверждение
          </span>
          <span className="text-center block w-full line-height-[1.5] text-[#6F7074] font-medium text-[12px]">
            Введите код, который пришёл в Telegram
          </span>
        </div>
        <OTP />
        <div className="text-[12px] font-medium text-[#6F7074]">
          <span className="block w-full text-center">Не получили код?</span>
          <span className="block w-full text-center">
            Отправить повторно через{' '}
            <span
              onClick={handleResendClick}
              className={`cursor-pointer ${
                sentCode ? 'text-[#6F7074]' : 'text-[#7339E6]'
              }`}
            >
              {sentCode ? `${timer} сек` : 'Отправить'}
            </span>
          </span>
        </div>
        <Button className="mb-[34px]" onClick={() => {}}>
          Подтвердить
        </Button>
      </div>
    </div>
  );
}
