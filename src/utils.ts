export type TelegramUserData = {
  firstName: string;
  lastName?: string;
  photoUrl?: string;
  username?: string;
};

export function getTelegramUserData() {
  const tg = window.Telegram?.WebApp;

  if (!tg) {
    console.error('Telegram WebApp is not available');
    return;
  }

  const user = tg.initDataUnsafe?.user;

  if (user) {
    const userData: TelegramUserData = {
      firstName: user.first_name,
      lastName: user.last_name,
      photoUrl: user.photo_url,
      username: user.username,
    };

    return userData;
  } else {
    return undefined;
  }
}

export const generateNumericId = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    // Зміщення бітів для створення унікального числового значення
    hash = (hash << 5) - hash + char;
    hash |= 0; // Перетворення у 32-бітне ціле число
  }

  // Робимо число додатним та обмежуємо довжину до 9 знаків
  return Math.abs(hash).toString().substring(0, 9).padEnd(9, '0');
};
