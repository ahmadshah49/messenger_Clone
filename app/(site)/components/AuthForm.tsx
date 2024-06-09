"use client";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import AuthSocialButton from "@/app/(site)/components/AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";

type Variant = "Login" | "REGISTER";

const AuthForm = () => {
  // states =====================

  const [variant, setVariant] = useState<Variant>("Login");
  const [loading, SetLoading] = useState(false);

  // For Toogle Login or Register ====================

  const toogleVariant = useCallback(() => {
    if (variant === "Login") {
      setVariant("REGISTER");
    } else {
      setVariant("Login");
    }
  }, [variant]);

  // React Hook Form ========================

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    // Default Values in Form of Register

    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // OnSubmiting form Function

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    SetLoading(true);

    if (variant === "REGISTER") {
      // Axios Register
    }
    if (variant === "Login") {
      // NextAuth Login
    }
  };

  //   Social Action With Google or Github

  const socialAction = (action: string) => {
    SetLoading(true);
    // Next Auth google and Github
  };

  return (
    <div
      className="
  mt-8
  sm:mx-auto
  sm:w-full
  sm:max-w-md
  "
    >
      <div
        className="
    bg-white
    px-4
    py-8
    shadow
    sm:rounded-lg
    sm:px-10
    "
      >
        <form className=" space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              id="name"
              label="Name"
              register={register}
              errors={errors}
              disabled={loading}
            />
          )}
          <Input
            id="email"
            label="Email Address"
            type="email"
            register={register}
            errors={errors}
            disabled={loading}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
            disabled={loading}
          />
          <div>
            <Button disabled={loading} fullWidth type="submit">
              {variant === "Login" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div
                className="
            w-full 
            border-t 
            border-gray-300
            "
              />
            </div>
            <div
              className="
          relative 
          flex 
          justify-center 
          text-sm
          "
            >
              <span
                className="
         bg-white
           px-2 
         text-gray-500
           "
              >
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
        </div>

        <div
          className="
flex
gap-2
justify-center
text-sm
mt-6
px-2
text-gray-500
"
        >
          <div>
            {variant === "Login"
              ? "New to Messenger"
              : "Already have an acccount"}
          </div>
          <div className="underline cursor-pointer" onClick={toogleVariant}>
            {variant === "Login" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
