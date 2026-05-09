import React, { useState } from 'react';
import { formatBalance } from '../../utils';
import INCREMENT from '../../assets/increment.svg';
import TON from '../../assets/ton.png';
import POINTER from '../../assets/pointer.svg';
import NO_IMAGE from '../../assets/no-image.svg';
import PRESENT from '../../assets/present_without_back.svg';
import LockIcon from '../../assets/lock.svg?react';
import NFT1 from '../../assets/nft1.png';
import NFT2 from '../../assets/nft2.png';
import NFT3 from '../../assets/nft3.png';
import Button from '../../components/Button';

export default function Main() {
  const mockedBallance = formatBalance(1250);
  const [isSpinning, setIsSpinning] = useState(false);
  const [manualDisable, setManualDisable] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [targetPercent, setTargetPercent] = useState(50);
  const targetAngle = (targetPercent / 100) * 360;
  const percentOptions = [10, 25, 50, 75];
  const popularNfts = [
    { id: 'nft-1', image: NFT1, price: '12.50' },
    { id: 'nft-2', image: NFT2, price: '8.90' },
    { id: 'nft-3', image: NFT3, price: '15.50' },
  ];

  const handleSpin = () => {
    if (isSpinning) {
      return;
    }

    setIsSpinning(true);

    const extraTurns = 4;
    const currentNormalized = ((rotation % 360) + 360) % 360;
    const desiredAngleAtPointer = 180; // Pointer is at the bottom (6 o'clock)
    const deltaToTarget =
      desiredAngleAtPointer - targetAngle - currentNormalized;
    const nextRotation = rotation + extraTurns * 360 + deltaToTarget;

    setRotation(nextRotation);

    setTimeout(() => {
      setIsSpinning(false);
    }, 2600);
  };
  return (
    <div className="h-[900px] bg-black">
      <div className="flex items-center mr-5 mt-[5px] gap-x-1 justify-end">
        <span className="text-white text-3">{mockedBallance}</span>
        <img src={TON} className="w-[17px] h-[17px]" alt="coin" />
        <img src={INCREMENT} className="w-[17px] h-[17px]" alt="add" />
      </div>
      <div className="flex max-w-[335px] mx-auto flex-col items-center mt-[28px]">
        <div className="relative w-[174px] h-[174px] flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: isSpinning
                ? 'transform 2.6s cubic-bezier(0.16, 1, 0.3, 1)'
                : 'none',
              background: `conic-gradient(#F7B500 0deg ${targetAngle}deg, #2B2638 ${targetAngle}deg 360deg)`,
              boxShadow: '0 0 0 3px #6F3FF5, 0 0 35px rgba(111, 63, 245, 0.3)',
              willChange: 'transform',
            }}
          />
          <div className="absolute inset-[28px] rounded-full bg-[#1A1626]" />
          <div className="absolute inset-[23px] rounded-full bg-[#15121F]" />
          <div className="relative z-10 text-center font-normal">
            <div className="text-white text-[32px] font-semibold leading-none">
              {targetPercent}%
            </div>
            <div className="text-[#BABABA] text-[12px] mt-1 font-bold">
              Апгрейд
            </div>
          </div>
          <div className="absolute bottom-[-25px] left-1/2 -translate-x-1/2">
            <img src={POINTER} alt="pointer" className="w-[18px] " />
          </div>
        </div>

        {/* <button
          onClick={handleSpin}
          disabled={isSpinning}
          className="mt-[22px] w-[220px] h-[44px] rounded-[10px] bg-[#2E2238] text-white text-[14px] font-medium border border-[#3A2A49] disabled:opacity-60"
        >
          Крутить
        </button> */}

        {/*IF UNAUTHORIZED*/}
        <div className="w-[335px] mt-[29px] flex gap-x-5">
          <div
            className="w-full p-3 
          pt-0 flex flex-col gap-y-1 h-fit mx-auto rounded-[15px] border bg-[#0D1015] border-[#232429]"
          >
            <span className="text-[12px] font-semibold text-white mx-auto mb-[12px]">
              Ваши NFT
            </span>
            <img
              src={NO_IMAGE}
              className="w-[30px] h-[30px] mx-auto"
              alt="No Image"
            />
            <span className="text-[11px] font-medium text-[#6F7074] text-center mb-[22px]">
              {' '}
              У вас нет NFT, <br /> чтобы внести депозит
            </span>
          </div>
          <div className="w-full p-3 pt-0 flex flex-col gap-y-1 h-fit mx-auto rounded-[15px] border bg-[#0D1015] border-[#232429]">
            <span className="text-[12px] font-semibold text-white mx-auto mb-[12px]">
              Возможный выигрыш
            </span>
            <img
              src={PRESENT}
              className="w-[30px] h-[30px] mx-auto"
              alt="No Image"
            />
            <span className="text-[11px] font-medium text-[#6F7074] text-center mb-[8px]">
              {' '}
              Сначала добавьте NFT, чтобы увидеть,
              <br /> что можно выбить
            </span>
          </div>
        </div>
        <Button
          className="flex items-center gap-x-[10px] w-full justify-center"
          onClick={handleSpin}
          disabled={isSpinning || manualDisable}
        >
          {manualDisable || isSpinning ? (
            <LockIcon className="w-[14px] h-[14px] text-white" />
          ) : (
            ''
          )}{' '}
          Начать обновление
        </Button>
        <div className="mt-[12px] w-full">
          <span className="text-[12px] font-medium text-[#6F7074] block w-full mx-auto text-center">
            Попробуй удачу и выбери NFT для апгрейда
          </span>
          <div className="mt-[18px] w-full">
            <div className="flex items-center justify-between gap-2 rounded-[10px] border border-[#232429] bg-[#0D1015] p-1">
              {percentOptions.map((percent) => (
                <button
                  key={percent}
                  type="button"
                  onClick={() => setTargetPercent(percent)}
                  disabled={isSpinning}
                  className={`h-[34px] flex-1 rounded-[8px] text-[12px] font-semibold transition-colors ${
                    targetPercent === percent
                      ? 'bg-[#2E2238] text-white border border-[#3A2A49]'
                      : 'text-[#A8A8A8]'
                  }`}
                >
                  {percent}%
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[14px] w-full rounded-[14px] border border-[#232429] bg-[#0D1015] p-3">
          <div className="flex items-center gap-2 text-white text-[12px] font-semibold">
            <span aria-hidden>🔥</span>
            Популярные NFT
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {popularNfts.map((nft) => (
              <div
                key={nft.id}
                className="rounded-[12px] border border-[#3A2A49] bg-[#15121F] px-2 py-3 flex flex-col items-center"
              >
                <img
                  src={nft.image}
                  alt="NFT"
                  className="w-[44px] h-[44px] object-contain"
                />
                <div className="mt-2 flex items-center gap-1 text-[11px] text-white">
                  <img src={TON} alt="TON" className="w-[12px] h-[12px]" />
                  {nft.price}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*IF AUTHORIZED*/}
        {/*
        <div className="w-[335px] mt-[20px] flex gap-x-4">
          <div className="w-full rounded-[15px] border border-[#232429] bg-[#0D1015] p-3">
            <div className="text-[12px] font-semibold text-white text-center mb-2">
              Ваши NFT
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-[12px] border border-[#3A2A49] bg-[#15121F] px-2 py-3 flex flex-col items-center">
                <img src={NFT1} alt="NFT" className="w-[44px] h-[44px]" />
                <div className="mt-2 flex items-center gap-1 text-[11px] text-white">
                  <img src={TON} alt="TON" className="w-[12px] h-[12px]" />
                  15.50
                </div>
              </div>
              <div className="rounded-[12px] border border-[#3A2A49] bg-[#15121F] px-2 py-3 flex flex-col items-center">
                <img src={NFT2} alt="NFT" className="w-[44px] h-[44px]" />
                <div className="mt-2 flex items-center gap-1 text-[11px] text-white">
                  <img src={TON} alt="TON" className="w-[12px] h-[12px]" />
                  12.70
                </div>
              </div>
            </div>
            <div className="mt-2 text-[11px] text-[#6F7074] text-center">
              Сумма депозита <img src={TON} alt="TON" className="inline w-[12px] h-[12px] mx-1" />
              28.20
            </div>
          </div>
          <div className="w-full rounded-[15px] border border-[#232429] bg-[#0D1015] p-3">
            <div className="text-[12px] font-semibold text-white text-center mb-2">
              Возможный выигрыш
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-[12px] border border-[#3A2A49] bg-[#15121F] px-2 py-3 flex flex-col items-center">
                <img src={NFT3} alt="NFT" className="w-[44px] h-[44px]" />
                <div className="mt-2 flex items-center gap-1 text-[11px] text-white">
                  <img src={TON} alt="TON" className="w-[12px] h-[12px]" />
                  13.40
                </div>
              </div>
              <div className="rounded-[12px] border border-[#3A2A49] bg-[#15121F] px-2 py-3 flex flex-col items-center">
                <img src={NFT1} alt="NFT" className="w-[44px] h-[44px]" />
                <div className="mt-2 flex items-center gap-1 text-[11px] text-white">
                  <img src={TON} alt="TON" className="w-[12px] h-[12px]" />
                  8.70
                </div>
              </div>
            </div>
          </div>
        </div>
        */}
      </div>
    </div>
  );
}
