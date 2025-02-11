"use client";
import { Form, Input } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AllImages } from "../../../../public/assets/AllImages";

const ForgotPassword = () => {

  const navigate = useRouter();



  const onFinish =  (values) => {
console.log(values);

  };
  return (
    <div className="text-base-color">
      <div>
        <div className="flex flex-col lg:flex-row justify-center gap-10 items-center min-h-screen bg-site-color py-10">
          <div className="w-full md:w-[80%] lg:w-[50%] flex justify-center items-center">
            <Image
              src={AllImages.forgotPasswordImg}
              alt="forgot_Password_Img"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[320px] w-[320px] md:h-[380px] md:w-[380px] lg:h-[520px] lg:w-[520px] shadow-xl"
            />
          </div>
          {/* <div className="h-[80vh] w-[2px] bg-[#F5382C] hidden lg:block"></div> */}
          <div className="w-full md:w-[80%] lg:w-[50%]">
            <div className="">
              <div className="mb-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
                  Forget passwordswdfwef
                </h1>
                <p className="md:text-lg lg:text-xl mb-2 ">
                  Enter your email address to ger a verification code for
                  resetting your password.
                </p>
              </div>

              <Form
                layout="vertical"
                className="bg-transparent w-full"
                onFinish={onFinish}
              >
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Email is Required",
                    },
                  ]}
                  name="email"
                  className="text-base-color"
                >
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    className="py-2 px-3 text-xl bg-site-color border border-[#2A4094] text-base-color hover:bg-transparent hover:border-[#2A4094] focus:bg-transparent focus:border-secoundary-color"
                  />
                </Form.Item>

                <Form.Item>
                  <button
                    className="w-full py-3 border border-[#2A4094] hover:border-[#2A4094] text-xl text-primary-color bg-[#2A4094] font-semibold rounded-2xl mt-8"
                    htmltype="submit"
                  >
                    Get OTP
                  </button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
