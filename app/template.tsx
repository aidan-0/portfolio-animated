export default function Template({ children }: { children: React.ReactNode }) {

  // This is what swipes up on page change
  return (
    <div>
      <div
        id="transition-element"
        className="w-screen h-screen absolute top-0 left-0"
      >
        <h1 id="page-transition-text" className="text-[2.5rem] sm:text-6xl lg:text-7xl 2xl:text-8xl"></h1>
      </div>
      {children}
    </div>
  );
}


