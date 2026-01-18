import { VideoHero } from '@/components/home/VideoHero';
import { MarqueeBanner } from '@/components/home/MarqueeBanner';
import { FeaturedMenu } from '@/components/home/FeaturedMenu';
import { StoryPreview } from '@/components/home/StoryPreview';
import { NewsFeature } from '@/components/home/NewsFeature';
import { TestimonialCarousel } from '@/components/home/TestimonialCarousel';
import { DeliveryZones } from '@/components/home/DeliveryZones';
import { FloatingPhone } from '@/components/home/FloatingPhone';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Floating Phone - Click to call */}
      <FloatingPhone />

      {/* Hero - Immediate impact with clear CTA */}
      <VideoHero />

      {/* Scrolling Announcement Banner - Dynamic movement */}
      <MarqueeBanner />

      {/* Featured Menu - The star of the show, FOOD FIRST! */}
      <FeaturedMenu />

      {/* Testimonial Carousel - Social proof right after seeing the food */}
      <TestimonialCarousel />

      {/* News Feature - Media credibility builds trust */}
      <NewsFeature />

      {/* Delivery Zones - Show service areas and delivery times */}
      <DeliveryZones />

      {/* Story Preview - Heritage and connection */}
      <StoryPreview />
    </main>
  );
}
