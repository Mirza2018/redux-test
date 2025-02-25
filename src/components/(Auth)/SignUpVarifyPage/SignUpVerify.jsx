"use client";
// import Container from "@/components/ui/Container";
import { buttonVariants } from "@/lib/variants";
import { Form } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import OTPInput from "react-otp-input";
import { AllImages } from "../../../../public/assets/AllImages";

import { useState } from "react";

const SignUpVerify = () => {
  const [otp, setOtp] = useState("");

  const handleOTPSubmit = () => {};

  const handleResendOTP = async () => {};

  return (
    <div className="text-base-color">
      {/* <Container> */}
      <div className="flex flex-col lg:flex-row justify-center gap-10 items-center min-h-screen bg-site-color py-10">
        <div className="w-full md:w-[80%] lg:w-[50%] flex justify-center items-center">
          <Image
            src={AllImages.otpImg}
            alt="forgot_Password_Img"
            width={0}
            height={0}
            sizes="100vw"
            className="h-[320px] w-[320px] md:h-[380px] md:w-[380px] lg:h-[520px] lg:w-[520px]"
          />
        </div>
        {/* <div className="h-[80vh] w-[2px] bg-[#F5382C] hidden lg:block"></div> */}
        <div className="w-full md:w-[80%] lg:w-[50%] ">
          <div className="">
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
                Verify OTP
              </h1>
              <p className="md:text-lg lg:text-xl mb-2 ">
                Please check your email. We have sent a code to contact
                @gmail.com
              </p>
            </div>

            <Form layout="vertical" className="bg-transparent w-full">
              <Form.Item className="">
                <div className="flex justify-center items-center">
                  <OTPInput
                    inputStyle="w-[55px] h-[45px] sm:w-[76px] sm:h-[64px] text-[20px] sm:text-[30px] bg-transparent border border-[#223376] hover:border-[#223376] focus:bg-transparent focus:border-[#223376] rounded-lg mr-[10px] sm:mr-[20px]"
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderInput={(props) => <input {...props} required />}
                  />
                </div>
              </Form.Item>
              {/* <div className="flex justify-between py-1">
                  <p>Didn’t receive code?</p>
                  <div
                    onClick={handleResendOTP}
                    className="text-[#223376] underline font-semibold cursor-pointer"
                  >
                    Resend
                  </div>
                </div> */}

              <Form.Item>
                <motion.button
                  variants={buttonVariants}
                  whileTap="tap"
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 7,
                  }}
                  className="w-full py-3 border border-[#223376] hover:border-[#223376] text-xl text-primary-color bg-[#223376] font-semibold rounded-2xl mt-8"
                  onClick={handleOTPSubmit}
                >
                  Get OTP
                </motion.button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
};
export default SignUpVerify;
