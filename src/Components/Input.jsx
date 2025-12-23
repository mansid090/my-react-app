export default function Input({ label, id, className = "", ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-stone-700">
        {label}
      </label>

      <input
        id={id}
        className={`border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black ${className}`}
        {...props}
      />
    </div>
  );
}
