import {
  Home, ConciergeBell, Compass, Waves, Building2, MapPin, Users,
  CheckCircle, Shield, Star, Instagram, Facebook, Twitter,
  ChevronDown, Megaphone, Settings, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFadeIn } from "@/hooks/useFadeIn";
import heroImage from "@/assets/hero-villa.jpg";
import eventsImage from "@/assets/events-banner.jpg";

const FadeSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useFadeIn();
  return <div ref={ref} className={`fade-in-section ${className}`}>{children}</div>;
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Luxury Greek villa with infinity pool overlooking the Aegean Sea in Paros"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Welcome to Paros Villa Hub
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Your private gateway to authentic island living in Paros & AntiParos. Handpicked villas, premium holiday homes, and seamless booking — all in one place.
          </p>
          <Button
            size="lg"
            onClick={() => document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6 rounded-full font-sans font-medium tracking-wide"
          >
            Discover More
            <ChevronDown className="ml-2 animate-bounce" size={20} />
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="intro" className="py-24 md:py-32 px-6">
        <FadeSection className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
            Discover a handpicked collection of luxury villas and vacation rentals across Paros & AntiParos, crafted for travelers who appreciate comfort, privacy, and meaningful island experiences. From tranquil countryside retreats and breathtaking seafront escapes to exclusive villas suited for unforgettable holidays, destination weddings, private celebrations, and location scouting — Paros Villa Hub connects you with the perfect setting, effortlessly, confidently, and with true local insight.
          </p>
        </FadeSection>
      </section>

      {/* Feature Cards */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <FadeSection>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center text-primary mb-16">
              What We Offer
            </h2>
          </FadeSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Home, title: "Private Villas", desc: "Enjoy complete privacy, stunning views, and thoughtfully designed spaces that feel like your own island home." },
              { icon: ConciergeBell, title: "Concierge Services", desc: "From private chefs and transfers to reservations and local tips, we take care of every detail." },
              { icon: Compass, title: "Island Experiences", desc: "Boat trips, wine tasting, cooking workshops, yoga, kitesurfing, cultural tours, and hidden local gems — discover Paros beyond the ordinary." },
              { icon: Waves, title: "Private Pools & Sea Views", desc: "Relax by your private pool, enjoy sunsets over the Aegean, and embrace effortless summer living." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <FadeSection key={title}>
                <div className="bg-card rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 h-full" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 text-secondary mb-6">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-3">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Message Section */}
      <section className="py-24 md:py-32 px-6 bg-muted/50">
        <FadeSection className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary mb-10">
            Welcome to Your Home in Paros
          </h2>
          <p className="text-lg leading-relaxed text-foreground/80 mb-8">
            Behind Paros Villa Hub is a dedicated local team, driven by deep knowledge of the island and a genuine passion for hospitality. From the moment you book and throughout your stay, we are here to support you, guide you, and take care of every detail — allowing you the luxury to simply relax and enjoy Paros.
          </p>
          <p className="text-lg leading-relaxed text-foreground/80 mb-10">
            Each guest receives a thoughtfully curated travel guide featuring meaningful recommendations, local insights, and carefully selected experiences. And whenever you need advice or a personal suggestion, we are always just a message away.
          </p>
          <p className="text-base italic text-primary font-serif">
            — Konstantinos Tsantilas, Paros Villa Hub Team
          </p>
        </FadeSection>
      </section>

      {/* Why Paros Villa Hub */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeSection>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center text-primary mb-16">
              Why Paros Villa Hub
            </h2>
          </FadeSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: Building2, title: "Built on Real Property Experience", desc: "Started from property construction & maintenance, ensuring professional management and worry-free stays." },
              { icon: MapPin, title: "Local Presence, Not Remote Management", desc: "Physically based in Paros. Faster responses, smarter decisions." },
              { icon: Users, title: "Personalized Guest & Owner Support", desc: "Direct communication, tailored solutions, and continuous assistance." },
              { icon: CheckCircle, title: "Carefully Selected Homes", desc: "Only properties that meet our quality, aesthetics, and functionality standards." },
              { icon: Shield, title: "Transparent & Secure Bookings", desc: "Clear pricing, secure transactions, no hidden surprises." },
              { icon: Star, title: "Authentic Island Experiences", desc: "Hidden beaches, local dining spots, and experiences beyond tourist guides." },
            ].map(({ icon: Icon, title, desc }) => (
              <FadeSection key={title}>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mt-1">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-primary mb-2">{title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Productions Banner */}
      <section className="relative py-32 md:py-40 px-6 overflow-hidden">
        <img
          src={eventsImage}
          alt="Elegant outdoor wedding setup at a luxury villa in Paros overlooking the Aegean Sea"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <FadeSection className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Exclusive Villas for Events, Weddings & Film Productions
          </h2>
          <p className="text-lg text-white/85 font-light">
            Unique locations in Paros for unforgettable moments and professional productions
          </p>
        </FadeSection>
      </section>

      {/* Property Owners Section */}
      <section className="py-24 md:py-32 px-6 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <FadeSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary mb-4">
              For Property Owners
            </h2>
            <p className="text-lg text-muted-foreground">
              Turn your property into a high-performing holiday investment with Paros Villa Hub.
            </p>
          </FadeSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Megaphone, title: "Property Promotion & Bookings", desc: "Maximize visibility across major booking channels and attract quality guests year-round." },
              { icon: Settings, title: "Complete Property Management", desc: "From maintenance to guest check-in, we handle everything so you don't have to." },
              { icon: Sparkles, title: "Tailor-Made Owner Services", desc: "Custom solutions designed to match your property's unique needs and your personal goals." },
            ].map(({ icon: Icon, title, desc }) => (
              <FadeSection key={title}>
                <div className="bg-card rounded-xl p-8 text-center shadow-sm h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-6">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-primary mb-3">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-serif font-bold mb-2">Paros Villa Hub</h3>
            <p className="text-primary-foreground/70 text-sm italic">
              Simply the smarter way to stay and host in Paros.
            </p>
          </div>
          <p className="text-center text-primary-foreground/60 text-sm max-w-xl mx-auto mb-10 leading-relaxed">
            Paros Villa Hub is dedicated to delivering exceptional hospitality, premium property management, and seamless vacation booking experiences in Paros.
          </p>
          <div className="flex justify-center gap-6 mb-10">
            <a href="#" aria-label="Instagram" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Instagram size={22} />
            </a>
            <a href="#" aria-label="Facebook" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Facebook size={22} />
            </a>
            <a href="#" aria-label="X (Twitter)" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Twitter size={22} />
            </a>
          </div>
          <p className="text-center text-primary-foreground/40 text-xs">
            © 2025 Paros Villa Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
