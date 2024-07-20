"use client";

import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { User, Conversation, Message } from "@prisma/client";
import { useSession } from "next-auth/react";
// import {} from 'data-fns'
import clsx from "clsx";
import { FullConversataionType } from "@/app/types";

interface ConversationBoxProps {
  data: FullConversataionType;
  selected?: boolean;
}

const ConversationBox: React.FC<ConversationBoxProps> = ({
  data,
  selected,
}) => {
  return <div>ConversationBox</div>;
};

export default ConversationBox;
