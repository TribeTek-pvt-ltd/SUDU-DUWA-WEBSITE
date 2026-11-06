import type { Metadata } from "next";
import Hero from "@/components/Hero";
import GalleryClient, { MediaItem } from "@/components/GalleryClient";

export const metadata: Metadata = {
  title: "Hatchery Operations & Media Gallery | Chilaw, Sri Lanka",
  description:
    "Take a virtual tour through our state-of-the-art maturation centers, larvae rearing units, water purification plants, and biosecurity systems in Ambakandawilla, Chilaw.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Hatchery Media Gallery | SUDU DUWA AQUA PRODUCTS",
    description:
      "Video tours and photography of Litopenaeus Vannamei breeding, post-larvae care, and farm harvests.",
    url: "https://sududuwa.com/gallery",
    images: [
      {
        url: "/logo.jpeg",
        width: 640,
        height: 640,
        alt: "SUDU DUWA AQUA PRODUCTS Media Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hatchery Media Gallery | SUDU DUWA AQUA PRODUCTS",
    description:
      "Video tours and photography of Litopenaeus Vannamei breeding, post-larvae care, and farm harvests.",
    images: ["/logo.jpeg"],
  },
};

const mediaItems: MediaItem[] = [
  // Videos
  {
    id: "vid-1",
    type: "video",
    src: "/assets/changes/feedback-from-farmers/whatsapp-video-2026-05-28-at-12.00.11.mp4",
    category: "maturation",
    title: "Maturation Facility Tour",
    description:
      "Inside the St. Rogus maturation facility showing stocking tanks, temperature control, and water flows.",
  },
  {
    id: "vid-2",
    type: "video",
    src: "/assets/changes/feedback-from-farmers/whatsapp-video-2026-05-28-at-12.00.11-1.mp4",
    category: "seeds",
    title: "Active Larvae Care",
    description:
      "Monitoring and grading young post-larvae under precise environmental conditions for maximum survival.",
  },
  {
    id: "vid-3",
    type: "video",
    src: "/assets/changes/feedback-from-farmers/whatsapp-video-2026-05-28-at-12.00.42.mp4",
    category: "systems",
    title: "Continuous Aeration",
    description:
      "Industrial blower pipelines providing high-volume oxygen distribution to keep larval seeds strong.",
  },
  {
    id: "vid-4",
    type: "video",
    src: "/assets/changes/feedback-from-farmers/whatsapp-video-2026-05-28-at-12.00.42-1.mp4",
    category: "seeds",
    title: "High-Vigor SPF Nauplii",
    description:
      "Larval nauplii moving rapidly in the spawning tank, exhibiting outstanding activity and fitness.",
  },
  // Images
  {
    id: "img-1",
    type: "image",
    src: "/assets/changes/breeding-programs.jpeg",
    category: "maturation",
    title: "Spawning & Maturation Tanks",
    description:
      "Circular maturation tanks raising SPF Litopenaeus Vannamei parent broodstock.",
  },
  {
    id: "img-2",
    type: "image",
    src: "/assets/changes/farm-consultation.jpeg",
    category: "seeds",
    title: "Larval Stocking Preparation",
    description:
      "Post-larvae seeds prepared in transport-ready bags acclimated to target farm salinity.",
  },
  {
    id: "img-3",
    type: "image",
    src: "/assets/changes/hatchery-tech-uncompromising.jpeg",
    category: "maturation",
    title: "Hatchery Facility View",
    description:
      "Wide angle layout of our bio-secure prawn seed hatchery facility in Ambakandawilla.",
  },
  {
    id: "img-4",
    type: "image",
    src: "/assets/changes/hatchery.jpeg",
    category: "maturation",
    title: "Spawning Water Filtration",
    description:
      "Dedicated pipeline systems providing temperature-controlled water to maturation units.",
  },
  {
    id: "img-6",
    type: "image",
    src: "/assets/changes/whatsapp-image-2026-05-28-at-12.00.11-3.jpeg",
    category: "maturation",
    title: "Maturation Center Racks",
    description:
      "Secure, biological tracking boards and pipelines for breeding parent stock.",
  },
  {
    id: "img-7",
    type: "image",
    src: "/assets/changes/stages/nuapillia.jpeg",
    category: "maturation",
    title: "Spawning Tank Inspection",
    description:
      "Hatchery operators preparing tanks for a new batch of SPF nauplii seeds.",
  },
  {
    id: "img-9",
    type: "image",
    src: "/assets/changes/stages/Post leave.jpeg",
    category: "maturation",
    title: "Tanks Setup Ambakandawilla",
    description:
      "Close examination of aeration jets in our maturation tanks.",
  },
  // Feedback Images
  {
    id: "feedback-img-1",
    type: "image",
    src: "/assets/changes/feedback-from-farmers/whatsapp-image-2026-05-28-at-12.00.11-13.jpeg",
    category: "feedback",
    title: "Premium Harvest Quality",
    description:
      "A close look at the premium quality and size of shrimp yielded by our partner farmers.",
  },
  {
    id: "feedback-img-2",
    type: "image",
    src: "/assets/changes/feedback-from-farmers/whatsapp-image-2026-05-28-at-12.00.11-14.jpeg",
    category: "feedback",
    title: "Farmer Satisfaction",
    description:
      "Visual proof of high survival rates and impressive weight gain shared by our farming community.",
  },
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col gap-0 pb-0 bg-white">
      <Hero
        title="Hatchery Media Gallery"
        subtitle="Take a virtual tour through our state-of-the-art maturation centers, larvae rearing units, water purification plants, and biosecurity systems in Ambakandawilla, Chilaw."
      />
      <GalleryClient mediaItems={mediaItems} />
    </div>
  );
}
