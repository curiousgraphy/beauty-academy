import { Star, MapPin, Car, Train, Clock } from "lucide-react";
import { venue } from "@/lib/data";

interface VenueCardProps {
  /** 구글맵 embed iframe 노출 여부 */
  showMap?: boolean;
}

const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function VenueCard({ showMap = false }: VenueCardProps) {
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    venue.address
  )}&output=embed`;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="p-8">
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-2xl font-bold text-offwhite">
            {venue.name}
          </h3>
          <p className="flex items-center gap-2 font-body text-sm text-muted">
            <MapPin className="h-4 w-4 shrink-0 text-gold" aria-hidden />
            {venue.address}
          </p>
          <div className="mt-1 flex items-center gap-1 text-gold">
            <Star className="h-4 w-4 fill-gold" aria-hidden />
            <span className="font-body text-sm font-semibold">
              {venue.googleRating}
            </span>
            <span className="font-body text-sm text-muted">/ 5.0</span>
          </div>
        </div>

        <dl className="mt-6 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
          {[
            { Icon: Clock, label: "도어 오픈", value: venue.doorsOpen },
            { Icon: Car, label: "주차", value: venue.parking },
            { Icon: Train, label: "교통", value: venue.transit },
          ].map(({ Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-section text-gold">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <div className="flex flex-col">
                <dt className="font-body text-xs uppercase tracking-wider text-muted">
                  {label}
                </dt>
                <dd className="font-body text-sm font-medium text-offwhite">
                  {value}
                </dd>
              </div>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-6">
          <a
            href={venue.hallUrl}
            {...EXTERNAL}
            className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-wider text-offwhite transition-colors hover:border-gold hover:text-gold"
          >
            Jung 홀 상세
          </a>
          <a
            href={venue.googleMapsUrl}
            {...EXTERNAL}
            className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-wider text-background transition-colors hover:bg-gold/90"
          >
            구글맵
          </a>
          <a
            href={venue.homepageUrl}
            {...EXTERNAL}
            className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-wider text-offwhite transition-colors hover:border-gold hover:text-gold"
          >
            공식 홈페이지
          </a>
        </div>
      </div>

      {showMap && (
        <iframe
          src={mapEmbedUrl}
          title={`${venue.name} 지도`}
          height={650}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block w-full border-0"
        />
      )}
    </div>
  );
}
