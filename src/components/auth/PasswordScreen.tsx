import React from 'react';
import TelegramImg from '../../assets/telegram.png';
import ProfileTab from '../ProfileTab';
import OTP from '../OTP';

export default function PasswordScreen() {
  return (
    <div className="bg-black flex flex-col gap-y-7 text-white min-h-screen pt-4">
      <ProfileTab />
      <div className="w-[335px]  pl-[28px] pr-[28px] flex flex-col h-fit pb-5 mx-auto rounded-[15px] border bg-[#0D1015] border-[#232429]">
        <img
          src={TelegramImg}
          alt="Home Preview"
          className="w-16 h-16 mx-auto mt-[50px]"
        />
        <div className="h-fit">
          <span className="text-white font-bold text-center block w-full text-4">
            Подтверждение
          </span>
          <span className="text-center block w-full line-height-[1.5] text-[#6F7074] font-medium text-2">
            Введите код, который пришёл в Telegram
          </span>
        </div>
        <OTP />
      </div>
    </div>
  );
}
