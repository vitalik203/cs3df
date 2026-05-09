import React from 'react';
import HomePreview from '../../assets/profile_1.png';
import Button from '../../components/Button';
import Lock from '../../assets/lock.svg';
import Trophy from '../../assets/trophy.svg';
import Time from '../../assets/time.svg';
import People from '../../assets/people.svg';
import Present from '../../assets/present.svg';
// import ProfileTab from '../ProfileTab';

export default function SignInScreen() {
  return (
    <div className="min-h-screen bg-black">
      <span className="block w-full text-center text-[16px] text-white font-bold">
        Профиль
      </span>

      <div className="w-[335px]  pl-[28px] pr-[28px] flex flex-col gap-[9px] h-fit pb-5 mx-auto rounded-[15px] border bg-[#0D1015] border-[#232429]">
        <img
          src={HomePreview}
          alt="Home Preview"
          className="h-auto w-[196px] mx-auto mt-3"
        />
        <div className="w-full h-fit mx-auto">
          <span className="text-[16px] font-bold block text-center text-white">
            Войдите в Telegram <br />{' '}
          </span>
          <span className="text-[12px] block text-center text-[#6F7074]">
            чтобы открыть профиль
          </span>
        </div>
        <Button
          onClick={() => alert('Войти')}
          className="w-full mx-auto block h-[48px]"
        >
          Войти
        </Button>
        <div className="flex w-full justify-center mx-auto items-center gap-2">
          <img src={Lock} alt="Lock" />
          <span className="font-light text-[#6F7074] text-[12px]">
            Ваши данные надежно защищены
          </span>
        </div>
      </div>
      <div className="flex w-[335px] justify-center mx-auto items-center gap-2 mt-[6px]">
        <div className="p-3 w-full flex flex-col gap-y-1 h-fit mx-auto rounded-[15px] border bg-[#0D1015] border-[#232429]">
          <div className="flex  gap-x-[6px]">
            <img src={Trophy} alt="Trophy" className="w-10 h-10" />
            <span className="text-[14px] font-bold text-[#6F7074]">
              Выигранные NFT
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img src={Lock} alt="Lock" />
            <span className="font-light text-[#6F7074] text-[12px]">
              Войдите, чтобы посмотреть
            </span>
          </div>
        </div>
        <div className="p-3 w-full flex flex-col gap-y-1 h-fit mx-auto rounded-[15px] border bg-[#0D1015] border-[#232429]">
          <div className="flex  gap-x-[6px]">
            <img src={Time} alt="Time" className="w-10 h-10" />
            <span className="text-[14px] font-bold text-[#6F7074]">
              NFT в обработке
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img src={Lock} alt="Lock" />
            <span className="font-light text-[#6F7074] text-[12px]">
              Войдите, чтобы посмотреть
            </span>
          </div>
        </div>
      </div>
      <div className="p-3 w-[335px] flex flex-col gap-y-1 h-fit mx-auto rounded-[15px] border bg-[#0D1015] border-[#232429]  mt-[6px]">
        <div className="flex  gap-x-[6px]">
          <img src={People} alt="Time" className="w-10 h-10" />
          <span className="text-[14px] font-bold text-[#6F7074]">
            Рефералы
            <div className="flex items-center gap-2">
              <img src={Lock} alt="Lock" />
              <span className="font-light text-[#6F7074] text-[12px]">
                Войдите, чтобы посмотреть
              </span>
            </div>
          </span>
        </div>
      </div>
      <div className="p-3 w-[335px] flex flex-col gap-y-1 h-fit mx-auto rounded-[15px] border bg-[#0D1015] border-[#232429]  mt-[6px]">
        <div className="flex  gap-x-[6px]">
          <img src={Present} alt="Time" className="w-10 h-10" />
          <span className="text-[14px] font-bold text-[#6F7074]">
            Подарок за регистрацию
            <div className="flex items-center gap-2">
              <img src={Lock} alt="Lock" />
              <span className="font-light text-[#6F7074] text-[12px]">
                Войдите, чтобы получить подарок
              </span>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
