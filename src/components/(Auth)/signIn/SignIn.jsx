"use client";

import {
  Button,
  Checkbox,
  ConfigProvider,
  Form,
  Input,
  Typography,
} from "antd";
import Image from "next/image";
import Link from "next/link";
import { SessionProvider, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { allIcons, AllImages } from "../../../../public/assets/AllImages";


import { toast } from "sonner";




const SignIn = () => {


  const navigate = useRouter();



  const onFinish =  (values) => {
 console.log(values);
 
  };
  return (
    <div className="text-base-color">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-10 min-h-screen py-10">
          <div className="hidden lg:block">
            <Image
              src={AllImages.signInImage}
              alt="largeLogo"
              width={0}
              height={0}
              className="w-auto h-auto"
            />
          </div>
          <div className="w-full md:w-[80%] lg:w-full mx-auto">
            {/* -------- Sign In Page Header ------------ */}
            <div className="flex flex-col justify-center items-center">
              <Image
                src={AllImages.logo}
                alt="largeLogo"
                width={0}
                height={0}
                className="w-[240px] md:w-[360px]"
              />
              <div className="text-center mt-5 mb-5">
                <h1 className="text-3xl sm:text-4xl font-medium mb-4">
                  Login to Account!
                </h1>
                <p className="text-lg sm:text-xl mb-2 text-[#B4B4B4]">
                  Please enter your email and password to continue.
                </p>
              </div>
            </div>

            {/* -------- Form Start ------------ */}

            <Form
              layout="vertical"
              className="bg-transparent w-full"
              onFinish={onFinish}
            >
              <Typography.Title level={4} style={{ color: "#222222" }}>
                Email
              </Typography.Title>
              <Form.Item
                name="email"
                className="text-base-color"
                rules={[
                  {
                    required: true,
                    message: "Email is Required",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your email"
                  className="py-2 px-3 text-xl bg-site-color !border !border-[#BDC4DE] rounded text-base-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
                />
              </Form.Item>
              <Typography.Title level={4} style={{ color: "#222222" }}>
                Password
              </Typography.Title>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Password is Required",
                  },
                ]}
                name="password"
                className="text-base-color"
              >
                <Input.Password
                  placeholder="Enter your password"
                  className="py-2 px-3 text-xl bg-site-color !border !border-[#BDC4DE] rounded text-base-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
                />
              </Form.Item>
              <div className="flex justify-between items-center mt-10">
                <Checkbox className="">Remember me</Checkbox>
                <Link
                  href="/sign-in/forget-password"
                  className="text-[#2B4257] underline font-bold"
                >
                  Forgot Password?
                </Link>
              </div>

              <Form.Item>
                <ConfigProvider
                  theme={{
                    components: {
                      Button: {
                        defaultHoverBg: "#013564",
                        defaultHoverColor: "#F3F3F3",
                      },
                    },
                  }}
                >
                  <button
                    className="w-full py-3 border border-[#2B4257] hover:border-[#2B4257] text-xl text-primary-color bg-[#2B4257] font-semibold rounded-2xl mt-8"
                    htmltype="submit"
                  >
                    Sign In
                  </button>
                </ConfigProvider>
              </Form.Item>
            </Form>

            {/* -------- Social Sign In Buttons ------------ */}
            <div className="flex flex-col gap-3 my-5">
              <div className="flex items-center justify-center mt-2">
                <span className="border-t border-gray-300 flex-grow"></span>
                <span className="px-4 text-gray-500">or</span>
                <span className="border-t border-gray-300 flex-grow"></span>
              </div>

              {/* <Button
                onClick={() =>
                  signIn("google", { callbackUrl: "http://localhost:3000" })
                }
                className="flex items-center justify-center gap-2 py-5 px-4 text-lg !border !border-contact-input text-base-color hover:bg-[#2B4257] hover:text-primary-color rounded-lg"
                icon={
                  <Image
                    src={allIcons.google}
                    alt="Google Icon"
                    width={20}
                    height={20}
                  />
                }
              >
                Sign in with Google
              </Button> */}

              {/* <Button
                className="flex items-center justify-center gap-2 py-5 px-4 text-lg !border !border-contact-input text-base-color hover:bg-[#2B4257] hover:text-primary-color rounded-lg mt-2"
                icon={
                  <Image
                    src={allIcons.facebook}
                    alt="Apple Icon"
                    width={20}
                    height={20}
                  />
                }
              >
                Sign in with Facebook
              </Button> */}
            </div>
            {/* -------- Redirect to Sign Up ------------ */}
            <p className="text-center text-ellipsis mt-4">
              Don’t have an account?
              <span>
                <Link
                  href="/sign-up"
                  className="text-[#2B4257] font-semibold underline ml-2"
                >
                  Sign Up
                </Link>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
