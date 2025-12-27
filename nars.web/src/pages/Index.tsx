import { Link } from "react-router-dom";
import { ArrowRight, Users, Calendar, Camera, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionCard } from "@/components/SectionCard";

import heroBg from "@/assets/hero-bg.jpg";
import galleryPreview from "@/assets/gallery-preview.jpg";
import eventsPreview from "@/assets/events-preview.jpg";
import activitiesPreview from "@/assets/activities-preview.jpg";
import aboutPreview from "@/assets/about-preview.jpg";

const sections = [
  {
    title: "Gallery",
    description: "Explore our curated collection of memorable moments and artistic expressions from our community.",
    image: galleryPreview,
    link: "/gallery",
  },
  {
    title: "Events",
    description: "Discover upcoming celebrations, workshops, and gatherings that bring our community together.",
    image: eventsPreview,
    link: "/events",
  },
  {
    title: "Activities",
    description: "Join exciting activities from outdoor adventures to creative workshops for all ages.",
    image: activitiesPreview,
    link: "/activities",
  },
  {
    title: "About Us",
    description: "Learn about our mission, meet our team, and discover the heart of our community.",
    image: aboutPreview,
    link: "/about",
  },
];

const stats = [
  { icon: Users, value: "2,500+", label: "Community Members" },
  { icon: Calendar, value: "150+", label: "Annual Events" },
  { icon: Camera, value: "5,000+", label: "Memories Captured" },
  { icon: Heart, value: "10+", label: "Years Strong" },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Community gathering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 opacity-0 animate-fade-up">
            Welcome to Our<br />
            <span className="text-accent">Community</span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "200ms" }}>
            Where connections flourish, memories are made, and every member matters. 
            Join us in building something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <Button asChild variant="hero" size="lg">
              <Link to="/events" className="flex items-center gap-2">
                Explore Events
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Discover What We Offer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the different facets of our vibrant community and find your place among us.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((section, index) => (
              <SectionCard
                key={section.title}
                {...section}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Become part of something special. Connect with like-minded people and create lasting memories.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/about" className="flex items-center gap-2">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
