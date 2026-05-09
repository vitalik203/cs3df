import React from 'react';
import { OtpInput } from 'reactjs-otp-input';

export default function OTP() {
  const [otp, setOtp] = React.useState('');
  const handleChange = (otp: string) => setOtp(otp);
  return (
    <div>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        inputStyle={
          'bg-black !w-[41px] h-[56px] !rounded-[8px] border border-[#232429]'
        }
        containerStyle={'justify-center gap-2'}
        focusStyle={{
          border: '2px solid #7339E6',
          outline: 'none',
          color: '#7339E6',
        }}
      />
    </div>
  );
}
