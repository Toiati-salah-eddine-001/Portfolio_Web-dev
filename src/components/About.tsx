import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import TextGenerateEffect from "./ui/typewriter";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section
      id="about"
      className="section min-h-screen flex flex-col bg-gradient-to-br from-muted/20 to-primary/5 relative overflow-hidden py-16 sm:py-20 md:py-24"
    >
      {/* Cover div to hide any Spline logos if needed */}
      <div className="absolute top-0 left-0 w-full h-12 sm:h-16 bg-gradient-to-br from-muted/20 to-primary/5 z-10"></div>
      
      {/* Main content area - takes up most of the space */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6 p-2 sm:p-4 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <div 
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-black shadow-sm w-fit mx-auto lg:mx-0 mb-3 sm:mb-4" 
                data-aos="fade-right" 
                data-aos-delay="200"
              >
                <span className="text-primary">✨</span>
                <span>Full Stack Developer</span>
              </div>
              
              <div className="mb-4 sm:mb-6">
                <TextGenerateEffect 
                  words="ABOUT ME" 
                  className="text-4xl sm:text-5xl md:text-6xl font-bold" 
                />
              </div>
              
              <div className="space-y-4">
                <p 
                  data-aos="fade-up" 
                  data-aos-delay="400" 
                  className="text-base sm:text-lg text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                >
                  Hi, I&#39;m{' '}
                  <span 
                    className="font-semibold text-primary"
                    data-aos="fade-down-right" 
                    data-aos-delay="600"
                  >
                    Toiati Salah Eddine
                  </span>
                  , a web developer with a diploma as a Technicien Spécialisé in Full Stack Web Development. {`I&#39;m passionate about coding`}, creativity, and artificial intelligence. I love building modern, interactive web experiences that blend technology and imagination.
                </p>
                
                <div 
                  className="italic text-primary bg-gradient-to-r from-primary/10 to-primary/30 px-4 py-3 sm:py-2 rounded-lg border border-primary/30 shadow-md max-w-md mx-auto lg:mx-0 text-center sm:text-left text-sm sm:text-base font-semibold tracking-wide"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  &quot;I believe in the hard work.&quot;
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end p-2 sm:p-4 order-1 lg:order-2">
            <div 
              className="relative w-full max-w-md lg:max-w-lg"
              data-aos="zoom-in" 
              data-aos-delay="400"
            >
              <div className="aspect-[3/4] w-full h-auto overflow-hidden rounded-xl shadow-2xl">
                <Image
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  src="/images/myimage.jpeg"
                  alt="Salah Eddine Toiati - Web Developer"
                  width={600}
                  height={800}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
