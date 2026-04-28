import Image from "next/image";

export function FounderCards() {
  const cards: {
    name: string;
    role: string;
    bio: string;
    image?: string;
  }[] = [
    {
      name: "David Jeffries",
      role: "Role coming soon",
      bio: "Strategist and automation expert helping established companies implement AI to drive efficiency, speed, and sustainable growth.",
      image: "/founders/david-jeffries.jpg",
    },
    {
      name: "Founder 2",
      role: "Role coming soon",
      bio: "Short bio coming soon. Newsly Global is led by three operators focused on helping established businesses make calm, clear decisions about AI.",
    },
    {
      name: "Founder 3",
      role: "Role coming soon",
      bio: "Short bio coming soon. Newsly Global is led by three operators focused on helping established businesses make calm, clear decisions about AI.",
    },
  ];

  return (
    <ul className="grid gap-5 md:grid-cols-3">
      {cards.map((f) => (
        <li
          key={f.name}
          className="bg-white rounded-lg border border-line p-8 shadow-[var(--shadow-soft)]"
        >
          {f.image ? (
            <div className="relative h-20 w-20 rounded-md overflow-hidden mb-6">
              <Image
                src={f.image}
                alt={f.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
          ) : (
            <div
              aria-hidden
              className="h-20 w-20 rounded-md bg-gradient-to-br from-navy/8 to-navy/15 mb-6"
              style={{ backgroundImage: "linear-gradient(135deg, rgba(15,23,42,0.08), rgba(200,164,107,0.18))" }}
            />
          )}
          <div className="text-[0.75rem] uppercase tracking-[0.14em] text-gold font-semibold mb-2">
            Leadership
          </div>
          <h3
            className="text-[1.125rem] text-navy mb-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {f.name}
          </h3>
          <div className="text-[0.875rem] text-slate mb-4">{f.role}</div>
          <p className="text-[0.9375rem] leading-relaxed text-slate">{f.bio}</p>
        </li>
      ))}
    </ul>
  );
}
