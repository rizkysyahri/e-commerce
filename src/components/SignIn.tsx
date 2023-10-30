"use client";

import { FC } from "react";
import { Input } from "./ui/input";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { Button } from "./ui/button";
import Link from "next/link";
import CloseModal from "./CloseModal";
import { Icons } from "./Icons";

const SignIn = () => {
  const supabase = createClientComponentClient();

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  
  
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="absolute top-4 right-4">
        <CloseModal />
      </div>
      <div className="flex flex-col space-y-2 ">
        <h1 className="text-center text-2xl font-semibold ">
          Welcome to Luxville Store
        </h1>
        <div className="flex flex-col gap-3">
          <Input type="email" placeholder="Email" className="rounded-xl" />
        </div>
        <div className="flex flex-col gap-3">
          <Input
            type="password"
            placeholder="Password"
            className="rounded-xl"
          />
        </div>

        <Button className="w-full">Sign In</Button>

        <div>
          <Button onClick={handleLogin} className="w-full">
            <Icons.google className="w-5 h-5 mr-2" />
            Google
          </Button>
        </div>

        <div className="flex flex-row items-center justify-center">
          <span className="text-sm">No account?</span>
          <Link href="">
            <Button variant="link" className="font-semibold">
              Create one
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
