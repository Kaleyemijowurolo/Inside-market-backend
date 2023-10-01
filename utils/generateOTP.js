const otpGenerator = require("otp-generator");


exports.generateOTP =  async() =>{
    const OTP = otpGenerator.generate(6, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
      });
      return OTP
}