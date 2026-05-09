import React from 'react';
import { generateNumericId, getTelegramUserData } from '../utils';
import Copy from '../assets/copy.svg';
import TelegramIcon from '../assets/telegram_icon.svg';

export default function ProfileTabInProfile() {
  const user = getTelegramUserData();
  const userId = generateNumericId(user?.username || '');

  function copyToClipboard() {
    navigator.clipboard.writeText(userId.toString()).then(() => {});
    alert('ID: ' + userId + ' успешно скопирован в буфер обмена');
  }

  return (
    <div className="w-[335px] h-[110px] items-center p-3 flex gap-x-[9px] mx-auto rounded-[15px] border bg-[#0D1015] border-[#232429]">
      <img
        src={user?.photoUrl}
        className="w-20 h-20 rounded-full"
        alt={user?.firstName}
      />
      <div className="flex flex-col gap-2">
        <p className="text-white font-semibold">{user?.firstName}</p>

        <div>
          <div className="flex items-center gap-x-1">
            <img src={TelegramIcon} alt="Telegram" />
            <span className="font-medium text-[10px] text-[#729C72]">
              Telegram подключено
            </span>
          </div>
          <p className=" flex text-[#6F7074] items-center text-[10px] gap-x-2 font-medium">
            ID {userId} <img src={Copy} alt="Copy" onClick={copyToClipboard} />
          </p>
        </div>
      </div>
    </div>
  );
}
