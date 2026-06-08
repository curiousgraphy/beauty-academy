import Image from "next/image";
import type { VTProduct } from "@/lib/data";
import { BLUR_DATA_URL, assetPath } from "@/lib/images";
import Chip from "./Chip";

interface VTProductCardProps {
  product: VTProduct;
}

export default function VTProductCard({ product }: VTProductCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-gold/40">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-section">
        <Image
          src={assetPath(`/images/vt-${product.slug}.jpg`)}
          alt={product.name}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 50vw, 20vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-body text-sm font-semibold leading-snug text-offwhite">
          {product.name}
        </h3>
        <p className="font-display text-lg font-bold text-gold">
          {product.price}
        </p>
        <div className="mt-auto pt-1">
          <Chip variant="green">선택 가능</Chip>
        </div>
      </div>
    </div>
  );
}
