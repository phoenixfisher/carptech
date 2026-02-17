import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Lightbulb, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import { lessons } from "@/data/lessons";
import carpMascot from "@/assets/carp-mascot.png";

const Index = () => {
  const featuredLessons = lessons.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero text-hero-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-senior-4xl md:text-[3.5rem] mb-4">CARP Tech</h1>
            <p className="text-senior-xl mb-8 opacity-90">Tutorials Made Easy!</p>
            <p className="text-senior-base mb-8 opacity-80 max-w-lg">
              Learn technology at your own pace. Simple lessons designed for anyone
              who wants to feel more confident using computers, phones, and the internet.
            </p>
            <Link
              to="/tutorials"
              className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-senior-lg font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              GET STARTED NOW
              <ArrowRight size={24} />
            </Link>
          </div>
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-hero-bubble overflow-hidden flex items-center justify-center">
              <img src={carpMascot} alt="CARP Tech mascot" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why CARP Tech */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-senior-3xl text-center mb-12">Why CARP Tech?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Easy to Follow", desc: "Step-by-step lessons written in plain language. No confusing jargon." },
              { icon: Lightbulb, title: "Practical Tips", desc: "Learn shortcuts and tricks you can use right away in everyday life." },
              { icon: Shield, title: "Stay Safe Online", desc: "Understand how to protect yourself from scams and keep your information secure." },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 rounded-xl bg-background border border-border animate-fade-in">
                <item.icon size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-senior-xl mb-3">{item.title}</h3>
                <p className="text-senior-base text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-senior-3xl mb-2">Featured Tutorials</h2>
          <p className="text-muted-foreground text-senior-base mb-8">Great places to start your learning journey</p>
          <div className="space-y-6">
            {featuredLessons.map((lesson) => (
              <div key={lesson.id} className="bg-lesson-card border border-border rounded-xl p-6 flex flex-col sm:flex-row items-start gap-6">
                <div className="text-5xl flex-shrink-0">{lesson.icon}</div>
                <div className="flex-1">
                  <h3 className="text-senior-xl mb-1">{lesson.title}</h3>
                  <p className="text-muted-foreground text-senior-base mb-4">{lesson.description}</p>
                  <Link
                    to={`/lesson/${lesson.id}`}
                    className="inline-block bg-foreground text-background px-6 py-2 rounded-md text-senior-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Start Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/tutorials" className="text-primary text-senior-lg underline underline-offset-4 hover:opacity-80">
              View All Tutorials →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-hero text-hero-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-senior-base opacity-80">© 2026 CARP Tech — Tutorials Made Easy</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
