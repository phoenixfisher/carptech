import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import { lessons } from "@/data/lessons";

const Tutorials = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string>("All");

  const filtered = lessons.filter((l) => {
    const matchSearch = l.title.toLowerCase().includes(search.toLowerCase()) ||
      l.description.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || l.difficulty === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-hero text-hero-foreground py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-3">
              <Search size={28} />
              <h1 className="text-senior-2xl">Search for Lessons:</h1>
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Type to search..."
              className="flex-1 max-w-lg px-4 py-3 rounded-lg text-foreground bg-popover border border-border text-senior-base"
            />
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex gap-3 mb-8 flex-wrap">
            {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
              <button
                key={level}
                onClick={() => setFilter(level)}
                className={`px-5 py-2 rounded-full text-senior-sm font-medium border transition-colors ${
                  filter === level
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border hover:bg-secondary"
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          <h2 className="text-senior-2xl mb-2">Featured Tutorials</h2>
          <p className="text-primary text-senior-base mb-6">Scroll for more options</p>

          <div className="space-y-6">
            {filtered.map((lesson) => (
              <div key={lesson.id} className="bg-lesson-card border border-border rounded-xl p-6 flex flex-col sm:flex-row items-start gap-6">
                <div className="text-5xl flex-shrink-0">{lesson.icon}</div>
                <div className="flex-1">
                  <h3 className="text-senior-xl mb-1">{lesson.title}</h3>
                  <span className="inline-block text-senior-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full mb-2">{lesson.difficulty}</span>
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
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground text-senior-lg py-12">No lessons found. Try a different search.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tutorials;
