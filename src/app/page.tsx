import { VideoHero } from '@/components/home/VideoHero';
import { MarqueeBanner } from '@/components/home/MarqueeBanner';
import { FeaturedMenu } from '@/components/home/FeaturedMenu';
import { FoodGallerySlider } from '@/components/home/FoodGallerySlider';
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

      {/* Delivery Zones - Show service areas and delivery times */}
      <DeliveryZones />

      {/* Food Gallery Slider - Visual feast with smooth transitions */}
      <FoodGallerySlider />

      {/* Story Preview - Heritage and connection */}
      <StoryPreview />

      {/* News Feature - Local media coverage */}
      <NewsFeature />

      {/* Testimonial Carousel - Auto-rotating social proof */}
      <TestimonialCarousel />
    </main>
  );
}
