import { Hero } from "@/components/home/Hero/Hero";
import { TrustStrip } from "@/components/home/TrustStrip/TrustStrip";
import { PropertyCategories } from "@/components/home/PropertyCategories/PropertyCategories";
import { ServicesSnapshot } from "@/components/home/ServicesSnapshot/ServicesSnapshot";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview/TestimonialsPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <PropertyCategories />
      <ServicesSnapshot />
      <TestimonialsPreview />
    </>
  );
}
