export default function Template({ children }: { children: React.ReactNode }) {

  return (
    <div>
      <div
        id="transition-element"
        className="w-screen h-screen absolute top-0 left-0"
      ></div>
      {children}
    </div>
  );
}
