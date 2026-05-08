import React, { useEffect, useRef, useState } from 'react';
import HomePreview from '../../assets/home_preview.png';
import Lock from '../../assets/lock.svg';
import { InputMask } from 'primereact/inputmask';
import Button from '../../components/Button';

const FLAGS = [
  { id: 'ru', name: 'Russia', phone: '+7' },
  { id: 'by', name: 'Belarus', phone: '+375' },
  { id: 'kz', name: 'Kazakhstan', phone: '+7' },
];
export default function Profile() {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState(FLAGS[0].id);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (id: string) => {
    setSelectedFlag(id);
    setIsOpen(false);
  };
  const [value, setValue] = useState('');
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const keyboardBufferHeight = '40vh';

  const currentFlag = FLAGS.find((f) => f.id === selectedFlag);

  useEffect(() => {
    // Only scroll if it's a touch device / likely mobile keyboard
    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;

    const handleScroll = () => {
      if (isFocused && inputContainerRef.current && isTouchDevice) {
        setTimeout(() => {
          if (inputContainerRef.current) {
            const rect = inputContainerRef.current.getBoundingClientRect();
            const scrollTop =
              window.pageYOffset || document.documentElement.scrollTop;
            const targetY = rect.top + scrollTop - 30; // 30px from top

            window.scrollTo({
              top: targetY,
              behavior: 'smooth',
            });
          }
        }, 100);
      }
    };

    if (isFocused) {
      handleScroll();
      // Listen for viewport changes (keyboard open/close) while focused
      if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', handleScroll);
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleScroll);
      }
    };
  }, [isFocused]);

  return (
    <div className={`bg-black min-h-screen relative flex flex-col gap-[25px]`}>
      <span className="text-white block w-full text-center pt-[22px] text-4 font-bold">
        Вход в Телеграм
      </span>
      <div className="w-[335px] h-fit pb-5 mx-auto rounded-[15px] border bg-[#0D1015] border-[#232429]">
        <img
          src={HomePreview}
          alt="Home Preview"
          className="h-[175px] w-[265px] mx-auto"
        />
        <span className="text-white text-3 block w-full font-semibold text-center text-[15px]">
          Войдите с помощью номера телефона
        </span>
        <span className="text-[#6F7074] text-3 font-medium block w-full text-center text-[15px]">
          Мы используем ваш номер исключительно для авторизации и защиты
          аккаунта
        </span>{' '}
      </div>
      <div
        ref={inputContainerRef}
        className="w-[335px] flex flex-col gap-[8px] h-fit pb-5 mx-auto rounded-[15px] border bg-[#0D1015] border-[#232429]"
      >
        <span className="font-medium text-[12px] m-[17px] mb-0 text-[#989AA3]">
          Номер телефона
        </span>
        <div className="h-[38px] p-[10px] flex ml-[18px] mr-[18px] items-center gap-[10px] rounded-[8px] border border-[#232429] relative">
          <div
            className="flex items-center gap-2 cursor-pointer h-full"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`fi fi-${currentFlag?.id} w-[20px] h-[15px]`}
            ></span>
            <span className="text-[#989AA3] text-[14px]">
              {currentFlag?.phone}
            </span>
            <svg
              className={`w-3 h-3 text-[#989AA3] transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
            {isOpen && (
              <ul className="absolute left-0 top-[calc(100%+8px)] w-full max-h-[160px] overflow-y-auto bg-[#0D1015] border border-[#232429] rounded-[8px] z-50 py-1 shadow-xl">
                {FLAGS.map((flag) => (
                  <li
                    key={flag.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(flag.id);
                    }}
                    className="px-3 py-2 hover:bg-[#232429] flex justify-between cursor-pointer flex items-center gap-3"
                  >
                    <div>
                      <span
                        className={`fi fi-${flag.id} w-[18px] h-[13px]`}
                      ></span>
                      <span className="text-[#989AA3] text-[13px]">
                        {flag.name}
                      </span>
                    </div>
                    <span className="text-[#989AA3] text-[13px]">
                      {flag.phone}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <span className="h-[18px] w-[1px] bg-[#232429]"></span>
          <InputMask
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setValue(e.target.value ?? '')}
            mask="99 999 99 99"
            placeholder="50 123 45 67"
            className="text-[#989AA3] flex-1 bg-transparent border-0 focus:outline-none focus:ring-0 text-[14px]"
          />
        </div>
        <div className="flex ml-[17px] items-center gap-2">
          <img src={Lock} alt="Lock" />
          <span className="font-light text-[#6F7074] text-[12px]">
            Ваш номер телефона надежно защищен
          </span>
        </div>
      </div>
      <Button
        label="Продолжить"
        onClick={() => {
          console.log('Clicked');
        }}
        className="w-[335px] mx-auto block"
      />
      <span className="text-[#989AA3] text-[12px] text-center max-w-[335px] mx-auto">
        Нажимая «Продолжить», вы соглашаетесь <br /> с нашими{' '}
        <a href="#" className="underline text-[#7238E5]">
          Условиями использования
        </a>{' '}
        и{' '}
        <a href="#" className="underline text-[#7238E5]">
          Политикой конфиденциальности
        </a>
        .
      </span>
      <div
        style={{
          height: isFocused ? keyboardBufferHeight : '0px',
          transition: 'height 0.3s ease-out', // Smooth transition
        }}
      />
    </div>
  );
}
