"use client";

import React from "react";

import AuthForm from "@/components/authComponents/AuthForm";
import FormHeader from "@/components/authComponents/FormHeader";
import { SignInSchema } from "@/lib/validation";

const SignIn = () => {
  return (
    <div className="space-y-[40px]">
      <FormHeader heading="Sign in" />
      <AuthForm
        formType="SIGN_IN"
        schema={SignInSchema}
        defaultValues={{ email: "", password: "" }}
        onSubmit={(data) => Promise.resolve({ success: true, data })}
      />
    </div>
  );
};

export default SignIn;
