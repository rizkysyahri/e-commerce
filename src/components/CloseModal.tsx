

import { FC } from "react";
import { Button } from "./ui/button";
import { Icons } from "./Icons";
import { useRouter } from "next/navigation";

interface CloseModalProps {}

const CloseModal: FC<CloseModalProps> = ({}) => {
  const router = useRouter();
  return (
    <Button
      variant="subtle"
      className="h-6 w-6 p-0 rounded-md"
      onClick={() => router.back()}
    >
      <Icons.close className="w-4 h-4" />
    </Button>
  );
};

export default CloseModal;
