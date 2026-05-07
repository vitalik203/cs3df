import React from "react";
import HomePreview from "../../assets/home_preview.png";
import Lock from "../../assets/lock.svg";

export default function Main() {
  return (
    <div className="bg-black min-h-screen relative">
      <span className="text-white block w-full text-center pt-[22px] text-4 font-bold">
        Вход в Телеграм
      </span>
      <div className="w-[335px] h-fit pb-5 mx-auto mt-[10px] rounded-[15px] border bg-[#0D1015] border-[#232429]">
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
        </span>{" "}
      </div>
      <div className="w-[335px] flex flex-col gap-[8px] h-fit pb-5 mx-auto mt-[10px] rounded-[15px] border bg-[#0D1015] border-[#232429]">
        <span className="font-medium text-[12px] m-[17px] mb-0 text-[#989AA3]">
          Номер телефона
        </span>
        <div className="h-[38px] p-[10px] flex ml-[18px] mr-[18px] justify-between rounded-[8px] border border-[#232429]">
          <div className="h-[17px]"></div>
          <input
            type="number"
            className="text-[#989AA3] h-[17px] bg-0 border-0 focus:outline-none focus:ring-0 focus:border-blue-500"
          />
        </div>
        <div className="flex ml-[17px] items-center gap-2">
          <img src={Lock} alt="Lock" />
          <span className="font-light text-[#6F7074] text-[12px]">
            Ваш номер телефона надежно защищен
          </span>
        </div>
      </div>
    </div>
  );
}
