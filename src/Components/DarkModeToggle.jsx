export default function DarkModeToggle() {
  return (
    <button
      onClick={() => {
        document.documentElement.classList.toggle("dark");
        console.log("dark toggled");
      }}
      className="
        fixed top-4 right-4 z-[9999]
        px-3 py-2 rounded-full
        bg-black text-white
        dark:bg-white dark:text-black
        shadow-lg
      "
    >
      🌙 / ☀️
    </button>
  );
}
