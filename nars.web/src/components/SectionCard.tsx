import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SectionCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  delay?: number;
}

export function SectionCard({ title, description, image, link, delay = 0 }: SectionCardProps) {
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-500 opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        <Button asChild variant="outline" size="sm" className="group/btn">
          <Link to={link} className="flex items-center gap-2">
            Explore
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
