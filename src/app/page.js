import { Header } from "@/components/Header";
import { MessageCard } from "@/components/MessageCard";
import { MessageInput } from "@/components/MessageInput";

const url =
  "https://devscale-mockapi.fly.dev/api/collections/notes/records?filter=(user='fahrul.razix@gmail.com')";

async function getMessage() {
  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();
  return data;
}

export default async function Page() {
  const { items } = await getMessage();

  return (
    <div>
      <Header />
      <MessageInput />
      <div>
        {items
          .slice()
          .reverse()
          .map(({ id, content }) => {
            return <MessageCard key={id} id={id} content={content} />;
          })}
      </div>
    </div>
  );
}
