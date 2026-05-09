import React from 'react';
import ProfileTabInProfile from '../../components/ProfileTabInProfile';
import { WINNING_NFTS } from '../../constants';
import DIAMOND from '../../assets/diamond.png';
import TIME from '../../assets/time.png';
import INFO from '../../assets/info.svg';
import TROPHY_1 from '../../assets/trophy1.png';
import TROPHY_2 from '../../assets/trophy2.png';
import CLOCK from '../../assets/tabler_clock.svg';
import REFERALS from '../../assets/people.svg';
import PRESENT from '../../assets/present_without_border.svg';
import ARROW_RIGHT from '../../assets/uil_arrow.svg';
import Button from '../../components/Button';

export default function Profile() {
  return (
    <div className="h-[750px] pt-3 flex flex-col gap-y-[10px] bg-black w-full">
      <ProfileTabInProfile />
      <div className="w-[335px] p-3 flex flex-col gap-y-1 h-fit mx-auto rounded-[15px] border bg-[#0D1015] border-[#232429]">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-1 items-center font-semibold text-white">
            <img src={DIAMOND} alt="Diamond" className="w-[17px] h-[15px]" />
            Выигранные NFT
          </div>
          <span className="text-[12px] font-medium text-[#6F7074]">
            Посмотреть все
          </span>
        </div>
        <div className="flex gap-x-1 overflow-y-auto rounded-[8px]">
          {WINNING_NFTS.map((nft, index) => (
            <img
              key={index}
              src={nft}
              alt={`Winning NFT ${index + 1}`}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </div>
      <div className="w-[335px] p-3 flex flex-col gap-y-[15px] h-fit mx-auto rounded-[15px] border bg-[#0D1015] border-[#232429]">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-1 items-center font-semibold text-white">
            <img src={TIME} alt="Time" className="w-[17px] h-[15px]" />В
            обработке
            <img src={INFO} alt="Info" className="mt-[4px] w-[14px] h-[14px]" />
          </div>
          <span className="text-[12px] font-medium text-[#6F7074]">
            Посмотреть все
          </span>
        </div>
        <div className="flex gap-x-1 overflow-y-auto rounded-[8px]">
          <div className="flex justify-between w-full items-center">
            <div className="flex gap-x-0.5  items-center">
              <img
                src={TROPHY_1}
                alt="Trophy 1"
                className="h-[44px] w-[44px]"
              />
              <div className="flex flex-col">
                <span className="text-white font-semibold text-[14px]">
                  UFC Strike
                </span>
                <span className="text-[12px] font-medium text-[#6F7074]">
                  Ожидает перевода в Telegram
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <img src={CLOCK} alt="Clock" />
                <span className="text-[12px] font-medium text-[#6F7074]">
                  Ожидания
                </span>
              </div>
              <span className="font-normal text-[12px] text-[#989AA3] block w-full text-end">
                ≈ 2 часа
              </span>
            </div>
          </div>
          <div></div>
        </div>
        <div className="flex gap-x-1 overflow-y-auto rounded-[8px]">
          <div className="flex justify-between w-full items-center">
            <div className="flex gap-x-0.5 items-center">
              <img
                src={TROPHY_2}
                alt="Trophy 1"
                className="h-[44px] w-[44px]"
              />
              <div className="flex flex-col">
                <span className="text-white font-semibold text-[14px]">
                  Loot Bag
                </span>
                <span className="text-[12px] font-medium text-[#6F7074]">
                  Ожидает перевода в Telegram
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <img src={CLOCK} alt="Clock" />
                <span className="text-[12px] font-medium text-[#6F7074]">
                  Ожидания
                </span>
              </div>
              <span className="font-normal text-[12px] text-[#989AA3] block w-full text-end">
                ≈ 5 часов
              </span>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="w-[335px] p-3 flex flex-col gap-y-[15px] h-fit mx-auto rounded-[15px] border bg-[#0D1015] border-[#232429]">
        <div className="flex gap-x-1 overflow-y-auto rounded-[8px]">
          <div className="flex justify-between overflow-hidden w-full items-center">
            <div className="flex gap-x-2  items-center">
              <img
                src={REFERALS}
                alt="Trophy 1"
                className="h-[38px] w-[38px]"
              />
              <div className="flex flex-col">
                <span className="text-white font-semibold text-[12px]">
                  Рефералы
                </span>
                <span className="text-[11px] font-medium text-[#6F7074]">
                  Приглашай друзей и получай бонусы
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-center text-white">
                12{' '}
                <span className="text-[10px] flex flex-col font-medium text-[#6F7074]">
                  Приглашены
                </span>
              </span>
              <img src={ARROW_RIGHT} alt="Arrow Right" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="w-[335px] p-3 flex flex-col gap-y-[15px] h-fit mx-auto rounded-[15px] border bg-[#0D1015] border-[#232429]">
        <div className="flex gap-x-1 overflow-y-auto rounded-[8px]">
          <div className="flex justify-between w-full items-center">
            <div className="flex gap-x-0.5 items-center">
              <img
                src={PRESENT}
                alt="Trophy 1"
                className="h-[32px] w-[32px] m-[6px] ml-0"
              />
              <div className="flex flex-col">
                <span className="text-white font-semibold text-[12px]">
                  Подарок за регистрацию
                </span>
                <span className="text-[11px] font-medium text-[#6F7074]">
                  Получи свой бонусный NFT <br /> прямо сейчас!
                </span>
              </div>
            </div>
            <Button
              onClick={() => {}}
              className="!text-[12px] !font-bold block text-center !p-2"
            >
              Забрать подарок
            </Button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
