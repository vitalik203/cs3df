import React, { useContext } from 'react';
import NumberStage from '../../components/auth/NumberStage';
import { CurrentStage } from '../../main';
import SignInScreen from '../../components/auth/SignInScreen';

function renderStage(stage: number) {
  switch (stage) {
    case 0:
      return <SignInScreen />;
    case 1:
      return <NumberStage />;
    default:
      return <div>Unknown stage</div>;
  }
}

export default function Profile() {
  const { currentStage } = useContext(CurrentStage);
  return <div>{renderStage(currentStage)}</div>;
}
