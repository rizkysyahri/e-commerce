import * as React from "react";
import { Button } from "./ui/button";
import { SheetForAccount } from "./SheetForAccount";
import createClient from "@/lib/supabase-server";

export default async function SearchBar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="pb-20 pt-7 flex justify-between px-[2vw] container">
      <Button variant="none" className="text-4xl font-black text-black md:text-5xl lg:text-6xl">
        e-commerce
      </Button>

      <div className="flex gap-2">
        <SheetForAccount user={user} />
      </div>
    </div>
  );
}
