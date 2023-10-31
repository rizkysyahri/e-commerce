"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { User } from "@supabase/supabase-js";
import supabase from "@/lib/supabase-browser";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export function SheetForAccount({ user }: { user: User | null }) {
  const router = useRouter();
  const supabaseClient = createClientComponentClient();
  const [open, setOpen] = React.useState<boolean>(false);

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    // router.push("/");
    location.reload();
  };

  supabase.auth.getUser();

  const fullName = user?.identities?.[0]?.identity_data?.full_name;
  const firstName = fullName ? fullName.split(" ", 1) : "";

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {user ? (
        <>
          <SheetTrigger asChild>
            <Button variant="link" className=" font-normal">
              Account
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-sm">
            <SheetHeader className="flex items-center justify-center">
              <SheetTitle className="font-light text-base">Account</SheetTitle>
            </SheetHeader>
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
            </div>

            <SheetDescription>
              Your account is not verified yet. A verification email has been
              sent to caiuhuy@gmail.com.
              <div className="space-y-3 flex items-center justify-center">
                <Button variant="link" className="text-sky-500 font-light">
                  Resend Verfication Error
                </Button>
              </div>
            </SheetDescription>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
            </div>

            <div className="flex items-center justify-center py-4">
              <div className="grid items-center">
                <p className="text-2xl text-center">Hi, {firstName}</p>

                <Button
                  variant="link"
                  className="text-xs font-light"
                  onClick={handleLogout}
                >
                  Sign Out
                </Button>
              </div>
            </div>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
            </div>

            <SheetHeader className="flex items-center justify-center py-4">
              <SheetTitle className="font-light text-base">Address</SheetTitle>
              <SheetDescription className="text-xs">
                No Saves Addresses{" "}
              </SheetDescription>
            </SheetHeader>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
            </div>

            <SheetHeader className="flex items-center justify-center py-4">
              <SheetTitle className="font-light text-base">Profile</SheetTitle>
              <SheetDescription className="text-xs">
                {user?.email}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </>
      ) : (
        <Button variant="link">
          <Link href="/auth/login" scroll={false}>
            Login
          </Link>
        </Button>
      )}
    </Sheet>
  );
}
