import { Heart, Target, Eye, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import aboutPreview from "@/assets/about-preview.jpg";

const values = [
  {
    icon: Heart,
    title: "Community First",
    description: "Every decision we make puts our community members at the heart of it.",
  },
  {
    icon: Target,
    title: "Purposeful Action",
    description: "We create meaningful experiences that make a real difference in people's lives.",
  },
  {
    icon: Eye,
    title: "Inclusive Vision",
    description: "Everyone is welcome here. We celebrate diversity and embrace all backgrounds.",
  },
  {
    icon: Users,
    title: "Together Stronger",
    description: "We believe in the power of unity and collaborative growth.",
  },
];

const team = [
  { name: "Sarah Johnson", role: "Community Director" },
  { name: "Michael Chen", role: "Events Coordinator" },
  { name: "Emily Rodriguez", role: "Activities Manager" },
  { name: "David Thompson", role: "Outreach Lead" },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 opacity-0 animate-fade-up">
            About Us
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "150ms" }}>
            Learn about our journey, mission, and the passionate team behind Community Hub.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 animate-fade-up">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded over a decade ago, Community Hub began as a small group of neighbors 
                who believed in the power of connection. What started as weekend gatherings 
                in a local park has grown into a thriving community center.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we serve thousands of members through diverse programs, events, and 
                activities. Our mission remains unchanged: to create spaces where everyone 
                feels welcome, valued, and inspired to contribute.
              </p>
            </div>
            <div className="opacity-0 animate-scale-in" style={{ animationDelay: "200ms" }}>
              <img
                src={aboutPreview}
                alt="Our team"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center shadow-lg opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
          <Button variant="hero" size="lg">
            Contact Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
