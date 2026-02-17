import Navbar from "@/components/Navbar";
import carpMascot from "@/assets/carp-mascot-nobg.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-hero text-hero-foreground py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-senior-3xl">About CARP Tech</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <img src={carpMascot} alt="CARP mascot" className="w-32 h-32 mx-auto mb-6 mix-blend-multiply" />
          </div>
          <div className="space-y-6 text-senior-base text-foreground">
            <p>
              <strong>CARP Tech</strong> was created with one goal in mind: to make technology
              accessible and enjoyable for everyone, regardless of experience level.
            </p>
            <p>
              We believe that nobody should feel left behind in the digital world. Our
              step-by-step tutorials are written in plain, simple language — no confusing
              technical jargon, no assumptions about what you already know.
            </p>
            <p>
              Whether you want to send an email to a grandchild, video call a friend,
              or simply feel more confident using your computer, CARP Tech is here to help.
            </p>
            <p className="text-muted-foreground">
              Technology should bring people together, not push them apart. Let's learn together! 🐟
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
