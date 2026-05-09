import NumberStage from '../auth/NumberStage';
import SignInScreen from '../auth/SignInScreen';
import ProfileTabInProfile from '../../components/ProfileTabInProfile';
import Profile from './Profile';

function renderStage(stage: number) {
  switch (stage) {
    case 0:
      return <SignInScreen />; //Вікно з кнопкою увійти
    case 1:
      return <NumberStage />; //Вікно з введенням номера телефону
    case 2:
      return <Profile />; //Профіль
    default:
      return <div>Unknown stage</div>;
  }
}

export default function SeePages() {
  // const { currentStage } = useContext(CurrentStage);
  return <div>{renderStage(2)}</div>;
}
