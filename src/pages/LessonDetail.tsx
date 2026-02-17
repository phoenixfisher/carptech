import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { lessons } from "@/data/lessons";

const LessonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const lesson = lessons.find((l) => l.id === id);
  const [currentStep, setCurrentStep] = useState(0);

  if (!lesson) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-senior-3xl mb-4">Lesson Not Found</h1>
          <Link to="/tutorials" className="text-primary text-senior-lg underline">Back to Tutorials</Link>
        </div>
      </div>
    );
  }

  const totalSteps = lesson.objectives.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;
  const currentObjective = lesson.objectives[currentStep];

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate(`/lesson/${id}/complete`);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Progress header */}
      <section className="bg-hero text-hero-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-senior-2xl text-center mb-4">Lesson Progress</h1>
        </div>
      </section>

      {/* Progress bar */}
      <div className="w-full bg-border h-3">
        <div
          className="bg-primary h-3 transition-all duration-500 rounded-r-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navigation */}
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="bg-foreground text-background px-5 py-2 rounded-md text-senior-sm font-medium disabled:opacity-40 hover:opacity-90 transition-opacity"
        >
          Back
        </button>
        <span className="text-muted-foreground text-senior-sm">
          Step {currentStep + 1} of {totalSteps}
        </span>
        <button
          onClick={handleNext}
          className="bg-foreground text-background px-5 py-2 rounded-md text-senior-sm font-medium hover:opacity-90 transition-opacity"
        >
          {currentStep === totalSteps - 1 ? "Finish" : "Next"}
        </button>
      </div>

      {/* Content */}
      <section className="bg-hero min-h-[60vh] py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Objectives sidebar */}
            <div className="lg:w-1/3">
              {lesson.objectives.map((obj, i) => (
                <div
                  key={i}
                  className={`mb-6 transition-opacity ${i === currentStep ? "opacity-100" : "opacity-50"}`}
                >
                  <h3 className="text-senior-lg font-bold text-hero-foreground">
                    Objective {i + 1}: {obj.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Main content area */}
            <div className="lg:w-2/3 bg-lesson-card rounded-xl p-8 min-h-[400px] animate-fade-in" key={currentStep}>
              <h2 className="text-senior-2xl mb-4">{currentObjective.title}</h2>
              <p className="text-senior-base text-muted-foreground leading-relaxed">
                {currentObjective.description}
              </p>
              <div className="mt-8 p-6 bg-secondary rounded-lg border border-border">
                <h4 className="text-senior-lg font-bold mb-2">💡 Tip</h4>
                <p className="text-senior-base text-muted-foreground">
                  Take your time with each step. There's no rush — learning at your own pace is the best way to build confidence!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LessonDetail;
