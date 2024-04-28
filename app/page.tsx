import Image from "next/image";

export default function Home() {
  return (
    <main className="p-10">
      <div className="group border p-6 bg-muted shadow-xl hover:shadow-2xl transition duration-500 rounded-xl flex gap-10 items-center">
        <div
          className="aspect-square border-2 border-primary-foreground w-20 rounded-xl overflow-hidden group-hover:scale-125
            transition duration-300 group-hover:-rotate-12 group-hover:shadow-xl"
        >
          <Image src="/avatars/01.png" alt="avatar" width={80} height={80} />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-xl mb-1">Japanese</h2>
          <p className="text-muted-foreground">Language</p>
        </div>
      </div>

      <div className="[perspective:2000px] w-fit mx-auto relative group">
        <div className="bg-card border rounded shadow-md absolute bottom-4 left-4 w-full p-6 z-20 scale-0">
          Trial
          <div className="opacity-0 group-has-[:hover(#hero)]:opacity-100">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </div>
        </div>
        <div
          className="border w-80 mx-async name(params:type) function {} rounded-lg [transform:rotateY(-24deg)_rotateX(45deg)]
            [transform-style:preserve-3d] shadow-sm mt-10 group"
        >
          <div className="p-4 border-b bg-muted/50 gap-2 flex *:size-2.5 *:rounded-full">
            <div className="bg-red-500"></div>
            <div className="bg-yellow-500"></div>
            <div className="bg-green-500"></div>
          </div>
          <div className="aspect-[3/4] p-4 [transform-style:preserve-3d]">
            <div
              id="hero"
              className="aspect-video rounded hover:[transform:translateZ(40px)] shadow bg-zinc-400 group transition duration-500 hover:shadow-xl"
            >
              <div className="p-4 opacity-0 group-hover:opacity-100 transition duration-500">
                <h2>Campaign</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="h-4 rounded-full border bg-muted my-10 overflow-hidden">
              <div className="size-full bg-lime-500 origin-left scale-x-0 transition duration-500 group-hover:scale-x-100"></div>
            </div>
            <div className="border rounded-xl bg-muted shadow-sm w-1/2 aspect-video scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition duration-500"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
