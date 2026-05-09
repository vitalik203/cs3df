import React from 'react';
import Increment from '../assets/increment.svg';
import { getTelegramUserData, type TelegramUserData } from '../utils';

export default function ProfileTab() {
  const userData: TelegramUserData | undefined = getTelegramUserData();
  const formatted = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(1250);
  return (
    <div className="w-[335px] items-center p-3 flex gap-y-1 h-fit mx-auto rounded-[15px] border bg-[#0D1015] border-[#232429]">
      <div className="flex flex-col">
        <span className="text-[#6F7074] text-3 font-medium">Баланс</span>
        <div className="flex items-center gap-x-[3.5px] items-center">
          <img src="" alt="NFT" className="w-[17px] h-[17px]" />
          <span className="text-white font-semibold text-4">{formatted}</span>
        </div>
        <span className="font-normal text-3 text-[#989AA3]">≈ $312.63</span>
      </div>
      <img src={Increment} className="ml-[43px] h-5 w-5" alt="Add" />
      <div className="flex items-center ml-[22px] gap-x-[5px]">
        <img
          src={userData?.photoUrl}
          alt=""
          className="rounded-full h-[44px] w-[44px]"
        />
        <span className="text-white font-semibold text-3">
          {userData?.username}
        </span>
      </div>
    </div>
  );
}
