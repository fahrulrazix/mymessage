"use client";

import { SendHorizonal } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const url =
  "https://devscale-mockapi.fly.dev/api/collections/notes/records?filter=(user='fahrul.razix@gmail.com')";

export const MessageInput = () => {
  const [message, setMessage] = useState("");
  const router = useRouter();

  async function createMessage() {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: message,
        user: "fahrul.razix@gmail.com",
        additionalData: "",
      }),
    });

    if (res.ok) {
      setMessage("");
      router.refresh();
    } else {
      console.error("failed to create Message");
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-2">
      <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        My Message
      </p>
      <div className="flex justify-between gap-2">
        <input
          onChange={(e) => setMessage(e.target.value)}
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <SendHorizonal onClick={createMessage} height={50} width={50} />
      </div>
    </div>
  );
};
