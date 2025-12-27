import { Calendar, MapPin, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import eventsPreview from "@/assets/events-preview.jpg";

const events = [
  {
    title: "Summer Community Festival",
    date: "January 15, 2025",
    time: "10:00 AM - 8:00 PM",
    location: "Central Park Pavilion",
    description: "Join us for a day of music, food, and fun activities for the whole family.",
    image: eventsPreview,
  },
  {
    title: "Art & Culture Night",
    date: "January 22, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Community Arts Center",
    description: "Experience local art exhibitions, live performances, and cultural showcases.",
    image: eventsPreview,
  },
  {
    title: "Wellness Workshop",
    date: "February 5, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Health & Wellness Hub",
    description: "Learn about mindfulness, nutrition, and holistic health practices.",
    image: eventsPreview,
  },
];

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 opacity-0 animate-fade-up">
            Upcoming Events
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "150ms" }}>
            Mark your calendar and join us for exciting community gatherings, workshops, and celebrations.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 bg-card rounded-2xl shadow-lg overflow-hidden opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="md:w-1/3">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      {event.location}
                    </span>
                  </div>
                  <Button variant="default" className="w-fit">
                    Register Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
