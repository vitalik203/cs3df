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
