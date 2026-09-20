import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ActivityPill } from "@/components/ui/ActivityPill";
import { ACTIVITY_GROUPS } from "@/lib/activities";

export function Activities() {
  return (
    <section className="py-14">
      <RevealOnScroll>
        <h2 className="font-heading mb-2 text-[clamp(30px,6vw,42px)] font-extrabold tracking-tight text-ink">
          What are you up for?
        </h2>
        <p className="mb-7 text-lg text-muted">Tap one — we&apos;ll match you there first.</p>
        <div className="flex flex-col gap-5">
          {ACTIVITY_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="mb-2.5 flex items-center gap-2 text-sm font-bold text-muted">
                <span aria-hidden="true">{group.emoji}</span>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.activities.map((activity) => (
                  <ActivityPill key={activity.id} activity={activity} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
