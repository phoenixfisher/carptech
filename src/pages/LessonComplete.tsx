import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import { lessons } from "@/data/lessons";
import carpMascot from "@/assets/carp-mascot.png";

const LessonComplete = () => {
  const { id } = useParams<{ id: string }>();
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  const currentIndex = lessons.findIndex((l) => l.id === id);
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-completion">
      <Navbar />

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-6 bg-hero-bubble rounded-full px-12 py-8 mb-10">
            <img src={carpMascot} alt="CARP mascot" className="w-28 h-28" />
            <div className="text-left">
              <h1 className="text-senior-3xl text-foreground">Congratulations!</h1>
              <p className="text-senior-xl text-foreground">You have completed the tutorial!</p>
            </div>
          </div>

          {/* Star rating */}
          <div className="mb-10">
            <p className="text-hero-foreground text-senior-lg mb-4">How would you rate this lesson?</p>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onMouseEnter={() => setHovered(star)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => setRating(star)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    size={48}
                    className={`${
                      star <= (hovered || rating)
                        ? "fill-hero-foreground text-hero-foreground"
                        : "text-hero-foreground"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/"
              className="bg-foreground text-background px-8 py-4 rounded-lg text-senior-lg font-bold hover:opacity-90 transition-opacity"
            >
              Return Home
            </Link>
            {nextLesson && (
              <Link
                to={`/lesson/${nextLesson.id}`}
                className="bg-foreground text-background px-8 py-4 rounded-lg text-senior-lg font-bold hover:opacity-90 transition-opacity"
              >
                Next Lesson
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LessonComplete;
