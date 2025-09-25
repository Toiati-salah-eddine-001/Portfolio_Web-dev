"use client"
import About from "@/components/About"
import Hero from "@/components/Hero"
import { CardCarousel } from "@/components/ui/card-carousel"
import CardProjectNew from "@/components/CardProjectNew"
import CardProjectNew2 from "@/components/CardProjectNew2"
// import ScrollRevealSection from "@/components/ScrollRevealSection"
import ContactSectoin from "@/components/ContactSectoin"

import { Contact } from "lucide-react";
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
    { src: "/images/next nnn.png", alt: "next" },
    { src: "/images/mogo n.png", alt: "mongo" },
    { src: "/images/firbase n.png", alt: "firebase" }
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
          <div className="w-full max-w-8xl mx-auto">
            <ScrollRevealSection className="grid grid-cols-1 gap-8 sm:gap-12">
              <CardProjectNew2 Title="Roadmapi – AI-Powered Learning Roadmaps" Description="AI SaaS that generates personalized roadmaps to help students and professionals learn smarter and faster" Tags={["Next.js", " shadcn/ui", "Tailwind CSS", "TypeScript", "Bun", "Elysia", "Supabase", "Geminie API"]} Image="LP.png" Link="https://github.com/Toiati-salah-eddine-001/RoadmapAI" Link2="https://github.com/Toiati-salah-eddine-001/RoadmapAI" />

              <CardProjectNew Title="Gestion-Magasin" Description="Inventory management SaaS that streamlines product tracking, sales, and reporting for retailers, enabling efficient operations and smarter business decisions" Tags={["Next.js", " shadcn/ui", "Tailwind CSS", "laravel", "mysql", "php"]} Image="magasin.jpg" Link="https://github.com/Toiati-salah-eddine-001/Gestion-Magasin" Link2="https://github.com/Toiati-salah-eddine-001/Gestion-Magasin" />

              <CardProjectNew2 Title="Location Home" Description="Platform designed to simplify property search and management, offering users intuitive tools to find, list, and organize real estate efficiently and securely." Tags={[
                "React",
                "Redux",
                "React Router DOM",
                "Tailwind CSS",
                "React-Leaflet",
                "Firebase",
                "IndexDB"
              ]} Image="home.jpg" Link="https://github.com/Toiati-salah-eddine-001/Location-Home" Link2="https://github.com/Toiati-salah-eddine-001/Location-Home" />
            </ScrollRevealSection>
          </div>
        </div>
      </section>
      <Footer />





    </main>
  )
}

export default Home
