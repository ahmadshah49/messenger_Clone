import { useSession } from "next-auth/react";
import { useMemo } from "react";
import { User } from "@prisma/client";
import { FullConversataionType } from "../types";

const useOtherUser = (
  conversation: FullConversataionType | { users: User[] }
) => {
  const session = useSession();
  const otherUser = useMemo(() => {
    const currentUserEmail = session?.data?.user?.email;
    const otherUser = conversation.users.filter(
      (user) => user.email !== currentUserEmail
    );

    return otherUser;
  }, [session?.data?.user?.email, conversation.users]);
  return otherUser;
};
