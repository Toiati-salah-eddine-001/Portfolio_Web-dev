"use client"
import About from "@/components/About"
import Hero from "@/components/Hero"
import { CardCarousel } from "@/components/ui/card-carousel"
import CardProjectNew from "@/components/CardProjectNew"
import CardProjectNew2 from "@/components/CardProjectNew2"
// import ScrollRevealSection from "@/components/ScrollRevealSection"
import ContactSectoin from "@/components/ContactSectoin"

import {Contact} from "lucide-react";
import ScrollRevealSection from "@/components/ScrollRevealSection";
import ContactSection from "@/components/ContactSectoin";
import Footer from "@/components/Footer"
import { SectionTitle } from "@/components/ui/SectionTitle";

function Home() {
  const images = [
    { src: "/images/react n.png", alt: "React 1" },
    { src: "/images/js n.png", alt: "JavaScript" },
    { src: "/images/css n.png", alt: "CSS" },
    { src: "/images/html n.png", alt: "HTML" },
    { src: "/images/git n.png", alt: "Git" },
    { src: "/images/mysql n.png", alt: "MySQL" },
    { src: "/images/node n.png", alt: "Node.js" },
    { src: "/images/php n.png", alt: "PHP" },
    { src: "/images/sql n.png", alt: "SQL" },
    { src: "/images/tail n.png", alt: "Tailwind CSS" },
    { src: "/images/ts nn.png", alt: "TypeScript" },
      { src: "/images/lara nn.png", alt: "laravel" },
      { src: "/images/next nnn.png", alt: "next" }
  ]
  return (
<main className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <About />
      
      {/* Skills Carousel Section */}
      <section
        style={{ cursor: 'url(/heart.svg) 16 16, pointer' }}
        id="skills"
        className="section min-h-[80vh] sm:min-h-screen flex items-center justify-center bg-gradient-to-br from-muted/20 to-primary/5 py-12 sm:py-0 px-4 sm:px-6"
      >
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-800 dark:text-white">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-full max-w-5xl mx-auto">
            <CardCarousel
              images={images}
              autoplayDelay={2000}
              showPagination={true}
              showNavigation={true}
            />
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section
        id="projects"
        className="section min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-muted/20 to-primary/5 py-12 sm:py-20 px-4 sm:px-6"
      >
        <div className="w-full max-w-6xl mx-auto">
          <SectionTitle className="mb-8 sm:mb-12">
            My <span className="text-primary">Projects</span>
          </SectionTitle>
          <div className="w-full max-w-4xl mx-auto">
            <ScrollRevealSection className="grid grid-cols-1 gap-8 sm:gap-12">
              <CardProjectNew2 />
              <CardProjectNew />
              <CardProjectNew2 />
            </ScrollRevealSection>
          </div>
        </div>
      </section>

    {/*<section*/}
    {/*    id="contact"*/}
    {/*    className="section min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/10"*/}
    {/*>*/}
    {/*</section>*/}
    {/*<ContactSection />*/}
    {/*<section*/}
    {/*    id="contact"*/}
    {/*    className="section min-h-[200px] flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/10 px-6"*/}
    {/*>*/}
    {/*    <div className="w-full max-w-full mx-auto"> /!* Changed max-w-4xl to max-w-full for full width *!/*/}
    {/*        <h2 className="text-4xl font-bold text-center mb-16">Connect With Me</h2>*/}
    {/*        /!* CUSTOM GRID LAYOUT *!/*/}
    {/*        <div className="relative w-full aspect-[3/2] border-2 border-gray-800 rounded-lg overflow-hidden shadow-2xl">*/}
    {/*            /!* LinkedIn - Full Width, Top Row *!/*/}
    {/*            <a*/}
    {/*                href="https://www.linkedin.com/"*/}
    {/*                target="_blank"*/}
    {/*                rel="noopener noreferrer"*/}
    {/*                className="absolute top-0 left-0 right-0 h-1/3 flex items-center justify-center transition-all duration-500 group"*/}
    {/*                style={{ backgroundColor: "#0077b5" }}*/}
    {/*            >*/}
    {/*                <img*/}
    {/*                    src="/Icons8/icons8-linkedin-50.png"*/}
    {/*                    alt="LinkedIn"*/}
    {/*                    className="w-12 h-12 z-10 transition-all duration-500"*/}
    {/*                />*/}
    {/*                /!* Smooth Gradient Overlay on Hover, does not hide icon *!/*/}
    {/*                <span className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity duration-500 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-500 z-0"></span>*/}
    {/*            </a>*/}
    {/*            /!* GitHub - Half Width, Middle Left *!/*/}
    {/*            <a*/}
    {/*                href="https://github.com/"*/}
    {/*                target="_blank"*/}
    {/*                rel="noopener noreferrer"*/}
    {/*                className="absolute top-1/3 left-0 w-1/2 h-1/3 flex items-center justify-center transition-all duration-500 group"*/}
    {/*                style={{ backgroundColor: "#000000" }}*/}
    {/*            >*/}
    {/*                <img*/}
    {/*                    src="/Icons8/icons8-octocat-50.png"*/}
    {/*                    alt="GitHub"*/}
    {/*                    className="w-12 h-12 z-10 transition-all duration-500"*/}
    {/*                />*/}
    {/*                <span className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity duration-500 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-400 z-0"></span>*/}
    {/*            </a>*/}
    {/*            /!* Instagram - Half Width, Middle Right *!/*/}
    {/*            <a*/}
    {/*                href="https://instagram.com/"*/}
    {/*                target="_blank"*/}
    {/*                rel="noopener noreferrer"*/}
    {/*                className="absolute top-1/3 right-0 w-1/2 h-1/3 flex items-center justify-center transition-all duration-500 group"*/}
    {/*                style={{ backgroundColor: "#f04e39" }}*/}
    {/*            >*/}
    {/*                <img*/}
    {/*                    src="/Icons8/icons8-instagram-50.png"*/}
    {/*                    alt="Instagram"*/}
    {/*                    className="w-12 h-12 z-10 transition-all duration-500"*/}
    {/*                />*/}
    {/*                <span className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity duration-500 bg-gradient-to-r from-pink-600 via-red-500 to-orange-400 z-0"></span>*/}
    {/*            </a>*/}
    {/*            /!* Twitter (X) - One-Third Width, Bottom Left *!/*/}
    {/*            <a*/}
    {/*                href="https://twitter.com/"*/}
    {/*                target="_blank"*/}
    {/*                rel="noopener noreferrer"*/}
    {/*                className="absolute bottom-0 left-0 w-1/3 h-1/3 flex items-center justify-center transition-all duration-500 group"*/}
    {/*                style={{ backgroundColor: "#1da1f2" }}*/}
    {/*            >*/}
    {/*                <img*/}
    {/*                    src="/Icons8/icons8-x-50.png"*/}
    {/*                    alt="Twitter/X"*/}
    {/*                    className="w-12 h-12 z-10 transition-all duration-500"*/}
    {/*                />*/}
    {/*                <span className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity duration-500 bg-gradient-to-r from-black via-blue-900 to-blue-400 z-0"></span>*/}
    {/*            </a>*/}
    {/*            /!* Reddit - Two-Thirds Width, Bottom Right *!/*/}
    {/*            <a*/}
    {/*                href="https://reddit.com/"*/}
    {/*                target="_blank"*/}
    {/*                rel="noopener noreferrer"*/}
    {/*                className="absolute bottom-0 right-0 w-2/3 h-1/3 flex items-center justify-center transition-all duration-500 group"*/}
    {/*                style={{ backgroundColor: "#ff4500" }}*/}
    {/*            >*/}
    {/*                <img*/}
    {/*                    src="/Icons8/icons8-reddit-50.png"*/}
    {/*                    alt="Reddit"*/}
    {/*                    className="w-12 h-12 z-10 transition-all duration-500"*/}
    {/*                />*/}
    {/*                <span className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity duration-500 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 z-0"></span>*/}
    {/*            </a>*/}
    {/*        </div>*/}
    {/*    </div>*/}
    {/*</section>*/}


    <Footer/>





</main>
  )
}

export default Home
