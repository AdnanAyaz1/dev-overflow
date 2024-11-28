"use client";
import React from "react";

import AuthForm from "@/components/authComponents/AuthForm";
import FormHeader from "@/components/authComponents/FormHeader";
import { SignUpSchema } from "@/lib/validation";

const SignUp = () => {
  return (
    <div className="space-y-[40px]">
      <FormHeader heading="Sign up" />
      <AuthForm
        formType="SIGN_UP"
        schema={SignUpSchema}
        defaultValues={{ email: "", password: "", name: "", username: "" }}
        onSubmit={(data) => Promise.resolve({ success: true, data })}
      />
    </div>
  );
};

export default SignUp;
