import React from 'react';
import TON from '../../assets/ton.png';
import HUMANS from '../../assets/humans.png';
import HUMAN from '../../assets/human.png';
import POINT from '../../assets/point.png';
import TON_BEAUTIFUL from '../../assets/beautiful_ton.png';
import SHARE from '../../assets/share.svg';
import LINK from '../../assets/link.svg';
import FRIENDS from '../../assets/friend.svg';
import BONUS from '../../assets/bonus.svg';
import HUMAN1 from '../../assets/human1.png';
import HUMAN2 from '../../assets/human2.png';
import ARROW_RIGHT from '../../assets/arrow_right.svg';

export default function Referal() {
  return (
    <div className="h-[1000px] bg-black text-white">
      <div className="max-w-[335px] mx-auto pt-4 pb-8 flex flex-col gap-4">
        <div className="rounded-[16px] max-h-[90px] h-full border border-[#232429] bg-[#0D1015] p-4 flex items-center gap-x-[5px]">
          <img src={HUMANS} className="w-[76px] h-[76px]" alt="humans" />

          <div>
            <div className="text-[14px] font-semibold">Рефералы</div>
            <div className="text-[11px] text-[#6F7074]">
              Приглашай друзей и получай <br /> NFT-бонусы
            </div>
          </div>
        </div>

        <div className="rounded-[16px] border border-[#232429] bg-[#0D1015] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-x-1">
            <img src={HUMAN} className="w-[30px] h-[30px]" alt="human" />
            <div>
              <div className="text-[10px] text-[#6F7074]">Приглашены</div>
              <div className="text-[12px] font-semibold">12</div>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <img src={POINT} className="w-[30px] h-[30px]" alt="human" />

            <div>
              <div className="text-[10px] text-[#6F7074]">Активные</div>
              <div className="text-[12px] font-semibold">8</div>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <img
              src={TON_BEAUTIFUL}
              className="w-[30px] h-[30px]"
              alt="human"
            />

            <div>
              <div className="text-[10px] text-[#6F7074]">Начислено</div>
              <div className="text-[12px] font-semibold">480</div>
            </div>
          </div>
        </div>

        <div className="rounded-[16px] border border-[#232429] bg-[#0D1015] p-2">
          <div className="text-[11px] text-white font-medium mb-2">
            Ваша реферальная ссылка
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-[36px] overflow-hidden whitespace-nowrap text-ellipsis rounded-[10px] bg-[#151821] border border-[#232429] flex items-center px-3 text-[11px] text-[#DADADA]">
              t.me/NFTCasinoBot?start=ref987654321
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  't.me/NFTCasinoBot?start=ref987654321',
                );
                alert('Реферальная ссылка успешно скопирована в буфер обмена');
              }}
              className="h-[36px] px-4 rounded-[10px] bg-[#6F3FF5] text-[11px] font-semibold"
            >
              Копировать
            </button>
          </div>
          <button className="mt-3 mb-2 w-full h-[36px] rounded-[10px] bg-[#151821] border border-[#232429] text-[11px] text-[#B0B0B0]">
            <div className="flex items-center justify-center gap-x-2">
              <img src={SHARE} alt="share" />
              Поделиться
            </div>
          </button>
        </div>

        <div className="rounded-[16px] border border-[#232429] bg-[#0D1015] p-2">
          <div className="text-[11px] font-medium mb-3">Как это работает</div>
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-[12px] border border-[#232429] bg-[#151821] p-3 text-center">
              <img
                src={LINK}
                alt="Link"
                className="w-[30px] h-[30px] mx-auto"
              />
              <div className="text-[10px] font-semibold">Поделись ссылкой</div>
              <div className="text-[10px] font-medium text-[#6F7074] mt-1">
                Отправь друзьям свою реферальную ссылку
              </div>
            </div>
            <div className="rounded-[12px] border border-[#232429] bg-[#151821] p-3 text-center">
              <img
                src={FRIENDS}
                alt="Friends"
                className="w-[30px] h-[30px] mx-auto"
              />
              <div className="text-[10px] font-semibold">
                Друг регистрируется
              </div>
              <div className="text-[10px] font-medium text-[#6F7074] mt-1">
                Друг переходит по ссылке и создает аккаунт
              </div>
            </div>
            <div className="rounded-[12px] border border-[#232429] bg-[#151821] p-3 text-center">
              <img
                src={BONUS}
                alt="Bonus"
                className="w-[30px] h-[30px] mx-auto"
              />
              <div className="text-[10px] font-semibold">Получай бонусы</div>
              <div className="text-[10px] font-medium text-[#6F7074] mt-1">
                За каждого друга ты получаешь бонус
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[16px] border border-[#232429] bg-[#0D1015] p-4">
          <div className="text-[12px] font-semibold mb-3">Мои рефералы</div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <img src={HUMAN1} alt="Human 1" className="w-[36px] h-[36px]" />
              <div>
                <div className="text-[11px] font-semibold">@neofkx</div>
                <div className="text-[9px] text-[#32D160]">Активный</div>
              </div>
            </div>
            <div className="text-[11px] flex items-center text-white">
              +50 <img src={TON} className="w-4 h-4" alt="Trust" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={HUMAN2} alt="Human 2" className="w-[36px] h-[36px]" />
              <div>
                <div className="text-[11px] font-semibold">@olxekcat</div>
                <div className="text-[9px] text-[#F7B500]">Ожидает</div>
              </div>
            </div>
            <div className="text-[11px] flex items-center text-white">
              +25 <img src={TON} className="w-4 h-4" alt="Trust" />
            </div>
          </div>
        </div>
        <div className="rounded-[16px] border border-[#232429] bg-[#0D1015] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={BONUS} alt="Human 1" className="w-[36px] h-[36px]" />
              <div>
                <div className="text-[11px] font-semibold">
                  Пригласить друзей
                </div>
                <div className="text-[9px] text-[#6F7074]">
                  Чем больше друзей — тем больше бонусов
                </div>
              </div>
            </div>
            <div className="text-[11px] flex items-center text-white">
              <img src={ARROW_RIGHT} className="w-4 h-4" alt="Arrow Right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
