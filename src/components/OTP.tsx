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
        separator={<span>-</span>}
        inputStyle={'bg-red-500'}
      />
    </div>
  );
}
