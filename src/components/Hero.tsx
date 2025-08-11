import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-2 sm:px-4 md:px-8">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full float animate-delay-100" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent rounded-full float animate-delay-200" />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary-glow rounded-full float animate-delay-300" />
      </div>

      {/* Main Content */}
  <div className="relative z-10 text-center max-w-4xl mx-auto px-2 sm:px-6">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-playfair font-bold leading-tight break-words">
              Hi, I'm{" "}
              <span className="gradient-text text-shimmer">
                Emerorota Eseoghene 
              </span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Frontend Engineer & Project Manager passionate about technology driven innovation
              and coordinating people, resources and time to achieve those goals
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center opacity-0 animate-fade-in-up animate-delay-200 w-full max-w-md mx-auto">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="glass" 
              size="xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 opacity-0 animate-fade-in-up animate-delay-300 flex-wrap">
            <a 
              href="https://github.com/Ese345"  
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/eseoghene-emerorota-0b69a6268" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:esegift345@gmail.com"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
  <div className="absolute bottom-4 sm:bottom-8 left-[700px] opacity-0 animate-fade-in-up animate-delay-300 px-2">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;