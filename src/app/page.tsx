import { VideoHero } from '@/components/home/VideoHero';
import { MarqueeBanner } from '@/components/home/MarqueeBanner';
import { FeaturedMenu } from '@/components/home/FeaturedMenu';
import { StoryPreview } from '@/components/home/StoryPreview';
import { NewsFeature } from '@/components/home/NewsFeature';
import { TestimonialCarousel } from '@/components/home/TestimonialCarousel';
import { DeliveryZones } from '@/components/home/DeliveryZones';
import { FadeInSection } from '@/components/ui/FadeInSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero - Immediate impact with clear CTA */}
      <VideoHero />

      {/* Scrolling Announcement Banner - Dynamic movement */}
      <MarqueeBanner />

      {/* Featured Menu - The star of the show, FOOD FIRST! */}
      <FadeInSection>
        <FeaturedMenu />
      </FadeInSection>

      {/* Testimonial Carousel - Social proof right after seeing the food */}
      <FadeInSection delay={100}>
        <TestimonialCarousel />
      </FadeInSection>

      {/* News Feature - Media credibility builds trust */}
      <FadeInSection delay={100}>
        <NewsFeature />
      </FadeInSection>

      {/* Delivery Zones - Show service areas and delivery times */}
      <FadeInSection delay={100}>
        <DeliveryZones />
      </FadeInSection>

      {/* Story Preview - Heritage and connection */}
      <FadeInSection delay={100}>
        <StoryPreview />
      </FadeInSection>
    </main>
  );
}
