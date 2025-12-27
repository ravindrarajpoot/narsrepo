import { Users, Clock, Dumbbell, Palette, Music, BookOpen } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import activitiesPreview from "@/assets/activities-preview.jpg";

const activities = [
  {
    title: "Outdoor Yoga Sessions",
    icon: Dumbbell,
    schedule: "Every Saturday, 7:00 AM",
    participants: "20-30",
    description: "Start your weekend with peaceful yoga in nature. All skill levels welcome.",
  },
  {
    title: "Art & Craft Workshops",
    icon: Palette,
    schedule: "Wednesdays, 5:00 PM",
    participants: "15-20",
    description: "Express your creativity through painting, pottery, and various crafts.",
  },
  {
    title: "Community Choir",
    icon: Music,
    schedule: "Thursdays, 6:30 PM",
    participants: "30-40",
    description: "Sing together and perform at community events. No experience needed!",
  },
  {
    title: "Book Club Meetings",
    icon: BookOpen,
    schedule: "First Sunday of Month",
    participants: "10-15",
    description: "Discuss inspiring books and connect with fellow readers.",
  },
];

const Activities = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 opacity-0 animate-fade-up">
            Activities
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "150ms" }}>
            Discover enriching activities that bring our community together and help you grow.
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-xl opacity-0 animate-scale-in">
            <img
              src={activitiesPreview}
              alt="Community activities"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end">
              <div className="p-6 md:p-10">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                  Join the Fun!
                </h2>
                <p className="text-primary-foreground/80 mt-2">
                  From fitness to arts, there's something for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <activity.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{activity.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {activity.schedule}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {activity.participants} members
                      </span>
                    </div>
                    <Button variant="outline" size="sm">
                      Join Activity
                    </Button>
                  </div>
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

export default Activities;
