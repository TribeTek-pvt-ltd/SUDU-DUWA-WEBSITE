export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white py-24">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-aqua-600 animate-spin" />
        <span className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400">
          Loading Sudu Duwa Hatchery...
        </span>
      </div>
    </div>
  );
}

