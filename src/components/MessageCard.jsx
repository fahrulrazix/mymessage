"use client";

import { Delete, FileEdit, PenSquare } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const MessageCard = ({ id, content }) => {
  const router = useRouter();
  const [onEdit, setOnEdit] = useState(false);
  const [currentMessage, SetCurrentMessage] = useState(content);

  async function handleDelete() {
    await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
      {
        method: "DELETE",
      }
    );
    router.refresh();
  }

  async function handleUpdate() {
    const res = await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: currentMessage }),
      }
    );
    const data = await res.json();
    setOnEdit(false);
    router.refresh();
  }

  return (
    <div className="max-w-3xl mx-auto p-2">
      <div>
        {onEdit ? (
          <input
            value={currentMessage}
            onChange={(e) => SetCurrentMessage(e.target.value)}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        ) : (
          <p className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {currentMessage}
          </p>
        )}
      </div>
      <div className="flex space-x-7 justify-end py-3">
        {onEdit ? (
          <PenSquare onClick={handleUpdate} className="text-green-600" />
        ) : (
          <FileEdit
            onClick={() => setOnEdit(true)}
            className="text-zinc-700"
            alt="Edit"
          />
        )}

        <Delete onClick={handleDelete} className="text-red-600" />
      </div>
    </div>
  );
};
