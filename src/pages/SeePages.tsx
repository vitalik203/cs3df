import NumberStage from './auth/NumberStage';
import SignInScreen from './auth/SignInScreen';
import Profile from './profile/Profile';
import Main from './main/Main';
import Referal from './referal/Referal';

function renderStage(stage: number) {
  switch (stage) {
    case 0:
      return <SignInScreen />; //Вікно з кнопкою увійти
    case 1:
      return <NumberStage />; //Вікно з введенням номера телефону
    case 2:
      return <Profile />; //Профіль
    case 3:
      return <Main />; //Головна сторінка з іграми
    case 4:
      return <Referal />; //Реферальная страница
    default:
      return <div>Unknown stage</div>;
  }
}

export default function SeePages() {
  // const { currentStage } = useContext(CurrentStage);
  return <div>{renderStage(4)}</div>;
}
