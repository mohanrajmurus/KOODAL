export function PlanPreviewCard() {
  return (
    <div className="relative min-h-[300px]">
      <div className="rotate-[-2deg] rounded-[30px] bg-(--color-teal) p-6.5 text-white">
        <div className="mb-3.5 text-[13px] font-bold uppercase tracking-wider opacity-70">
          Tonight · Thoraipakkam
        </div>
        <div className="font-heading mb-4.5 text-[30px] leading-[1.08] font-extrabold tracking-tight">
          Padel doubles,
          <br />
          7:30pm
        </div>
        <div className="mb-4.5 flex items-center gap-2.5">
          <span className="h-8.5 w-8.5 rounded-full bg-(--color-primary)" />
          <span className="h-8.5 w-8.5 rounded-full bg-(--color-accent)" />
          <span className="grid h-8.5 w-8.5 place-items-center rounded-full border-2 border-dashed border-white/60 bg-white/18 text-lg font-bold">
            +
          </span>
          <span className="grid h-8.5 w-8.5 place-items-center rounded-full border-2 border-dashed border-white/60 bg-white/18 text-lg font-bold">
            +
          </span>
        </div>
        <div className="rounded-full bg-(--color-primary) p-3 text-center text-[15px] font-bold text-(--color-primary-ink)">
          2 spots left
        </div>
      </div>
      <div className="absolute -right-1.5 -bottom-4.5 rotate-3 rounded-2xl border-2 border-(--color-ink) bg-(--color-background) px-4 py-3 text-sm font-bold text-(--color-ink)">
        Aal kedaichaanga ✦
      </div>
    </div>
  );
}
