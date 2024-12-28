const Tip = () => {
  return (
    <div className="absolute flex gap-5 bg-colordark h-auto py-4 pl-4 pr-12 w-auto rounded-full bottom-10 -right-[415px] hover:-right-10 transition-all">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="size-6"
      >
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
      </svg>

      <p> Tip: You can drag, close, open, click, and explore.</p>
    </div>
  );
};

export default Tip;
