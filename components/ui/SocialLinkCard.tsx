interface SocialLinkCardProps {
  href: string;
  icon: React.ReactNode;
  iconClassName: string;
  title: string;
  subtitle: string;
}

export function SocialLinkCard({ href, icon, iconClassName, title, subtitle }: SocialLinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3.5 rounded-lg border border-border bg-surface p-4 transition-transform duration-150 hover:-translate-y-0.5 hover:border-ink"
    >
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white ${iconClassName}`}
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span className="font-heading block text-base font-extrabold tracking-tight text-ink">
          {title}
        </span>
        <span className="block truncate text-sm text-muted">{subtitle}</span>
      </span>
    </a>
  );
}
