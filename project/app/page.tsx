import HeroSection from '@/components/hero-section';
import ProductShowcase from '@/components/product-showcase';
import BenefitsSection from '@/components/benefits-section';
import TestimonialsSection from '@/components/testimonials-section';
import NewsletterSection from '@/components/newsletter-section';
import FeaturedProducts from '@/components/featured-products';
import Chatbot from '@/components/chatbot';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <BenefitsSection />
      <FeaturedProducts />
      <TestimonialsSection />
      <NewsletterSection />
      <Chatbot />
    </>
  );
}