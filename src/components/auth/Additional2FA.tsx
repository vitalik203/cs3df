import React, { useState } from 'react';
import Button from '../../components/Button';
import ProfileTab from '../../components/ProfileTab';
import Lock from '../../assets/lock.png';
import Lock_svg from '../../assets/lock.svg?react';
import Trust from '../../assets/trust.svg';

export default function Additional2FA() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-black flex flex-col gap-y-7 text-white min-h-screen pt-4">
      <ProfileTab />
      <div className="w-[335px]   pl-[28px] pr-[28px] flex flex-col h-fit pb-5 mx-auto rounded-[15px] border bg-[#0D1015] border-[#232429] gap-y-7">
        <div className="h-fit">
          <img
            src={Lock}
            alt="Home Preview"
            className="w-16 h-16 mx-auto mt-[50px]"
          />
          <span className="text-white font-bold text-center block w-full text-[16px]">
            Двухэтапная проверка
          </span>
          <span className="text-center block w-full text-[#6F7074] font-medium text-[12px]">
            Введите пароль для подтверждения входа и защиты вашей учетной записи
          </span>
        </div>
        <div className="w-full gap-y-[12px] flex flex-col h-fit pb-5 mx-auto rounded-[15px] border bg-[#0D1015] border-[#232429]">
          <div className="flex mt-[33px] justify-center items-center gap-2">
            <Lock_svg className="w-4 h-4 text-[#7339E6]" />
            <span className="font-light text-[#6F7074] text-[10px]">
              Введите пароль для подтверждения входа
            </span>
          </div>
          <div className="mx-[17px]">
            <label className="font-medium text-[12px] text-[#989AA3] block mb-2">
              Пароль
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Введите пароль"
                className="text-[14px] w-full h-[38px] px-[10px] pr-[40px] text-[#989AA3] bg-transparent border border-[#232429] rounded-[8px] focus:outline-none focus:ring-0 focus:border-[#7339E6]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#989AA3] hover:text-[#7339E6] transition-colors"
              >
                {showPassword ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.45703 12C3.73128 7.94291 7.52159 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C20.2672 16.0571 16.4769 19 11.9992 19C7.52159 19 3.73128 16.0571 2.45703 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9992 15C13.6561 15 14.9992 13.6569 14.9992 12C14.9992 10.3431 13.6561 9 11.9992 9C10.3424 9 8.99924 10.3431 8.99924 12C8.99924 13.6569 10.3424 15 11.9992 15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <Button className=" ml-[10px] mr-[10px]" onClick={() => {}}>
            Войти
          </Button>
          <div className="flex justify-center items-center gap-2">
            <img src={Trust} alt="Trust" />
            <span className="font-light text-[#6F7074] text-[10px]">
              Введите пароль для подтверждения входа
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
