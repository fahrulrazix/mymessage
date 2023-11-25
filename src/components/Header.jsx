import Image from "next/image";

export const Header = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <main>
        <section>
          <nav className="flex justify-between m-5">
            <div>
              <Image src="/logoTech.png" width={200} height={160} />
            </div>

            <div className="flex gap-7 items-center">
              <p>CRUD</p>
              <p>ASSIGNMENT 4</p>
            </div>
          </nav>
        </section>
        <div>
          <hr className="my-0 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-65 dark:opacity-100" />
        </div>
      </main>
    </div>
  );
};
