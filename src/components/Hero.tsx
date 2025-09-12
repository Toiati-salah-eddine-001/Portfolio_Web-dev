"use client"
import Spline from '@splinetool/react-spline';
import {Globe } from "lucide-react"
import WrapButton  from "@/components/ui/wrap-button"
import { TextScroll } from "@/components/ui/text-scroll"
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Hero = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
  return (
    <section
      id="hero"
      className="section min-h-screen flex items-center justify-center bg-gradient-to-br from-muted/20 to-primary/5 px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative overflow-hidden"
    >
      {/* Cover div to hide Spline logo */}
      <div className="absolute bottom-28 sm:bottom-36 left-0 w-full h-3 sm:h-4 bg-gradient-to-br from-muted/20 to-primary/5 z-10"></div>
      
      {/* Cover div to hide "Built with Spline" logo */} 
      <div className="absolute bottom-0 left-0 w-full h-4 sm:h-6 bg-gradient-to-br from-muted/20 to-primary/5 z-20"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center w-full max-w-7xl mx-auto">
        {/* Left Column - Text Content */}
        <div className="text-center lg:text-left space-y-4 sm:space-y-6 p-2 sm:p-4">
          <div className="space-y-3 sm:space-y-4">
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-foreground leading-tight" 
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
            >
              Hi, I am{" "}
              <span className="text-blue-600 dark:text-primary bg-gradient-to-r from-blue-600 to-blue-500 dark:from-primary dark:to-primary/60 bg-clip-text text-transparent block sm:inline">
                Salah Eddine Toiati
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-muted-foreground">
              Web Developer
            </h2>
            <p 
              className="text-base sm:text-lg text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              Passionate about creating beautiful, functional, and user-friendly web experiences. 
              I specialize in modern web technologies and creative solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <WrapButton 
              className="px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-medium bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-primary dark:hover:bg-primary/80 dark:text-white transition-colors duration-300" 
              href="/docs/components/card-carousel"
            >
              <Globe className="animate-spin mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Get Started
            </WrapButton>
            <WrapButton 
              className="px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-medium bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-secondary dark:hover:bg-secondary/80 dark:text-white transition-colors duration-300" 
              href="#projects"
            >
              View My Work
            </WrapButton>
          </div>
        </div>

        {/* Right Column - 3D Scene */}
        <div className="flex justify-center lg:justify-end w-full">
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] max-w-full lg:max-w-none">
            <Spline 
              scene="https://prod.spline.design/mOAxof0FMIMe8qrR/scene.splinecode" 
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      
      {/* TextScroll at the bottom */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 w-full px-4">
        <TextScroll
          className="font-display text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tighter text-gray-800 dark:text-white"
          text="SALAH EDDINE TOIATI - WEB DEVELOPER -"
          default_velocity={3}
        />
      </div>
    </section>
  );
};

export default Hero;
