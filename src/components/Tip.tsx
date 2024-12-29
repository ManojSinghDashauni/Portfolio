const Tip = () => {
  return (
    <div className="absolute flex justify-center gap-5 bg-colordark h-auto py-4 pl-4 pr-12 w-auto rounded-full bottom-10 sm:-right-[415px] -right-[265px]  sm:hover:-right-10 hover:-right-16  transition-all">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="sm:size-6 size-10 self-center"
      >
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
      </svg>

      <p className="sm:w-full w-52"> Tip: You can drag, close, open, click, and explore.</p>
    </div>
  );
};

export default Tip;
