export default function Section({ children, noPadding }) {
  return (
    <section className="relative z-10 min-h-screen min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 bg-gradient-to-b from-[#fdf8f7] via-[#fdf2f4] to-[#fce8ec]">
      <div className={`w-full max-w-xl text-center space-y-6 sm:space-y-8 ${noPadding ? "" : "px-2 sm:px-4"}`}>
        {children}
      </div>
    </section>
  );
}
