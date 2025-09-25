"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { SparklesIcon } from "lucide-react"
import { Autoplay, Pagination } from "swiper/modules"
import { Badge } from "@/components/ui/badge"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

type Skill = {
  name: string;
  icon: string;
  category: string;
}

const skills: Skill[] = [
  { name: "JavaScript", icon: "/images/js n.png", category: "Frontend" },
  { name: "TypeScript", icon: "/images/ts nn.png", category: "Frontend" },
  { name: "React", icon: "/images/react n.png", category: "Frontend" },
  { name: "Next.js", icon: "/images/next nnn.png", category: "Frontend" },
  { name: "Node.js", icon: "/images/node n.png", category: "Backend" },
  { name: "Python", icon: "/images/python.png", category: "Backend" },
  { name: "HTML5", icon: "/images/html n.png", category: "Frontend" },
  { name: "CSS3", icon: "/images/css n.png", category: "Frontend" },
  { name: "Tailwind CSS", icon: "/images/tailwind.png", category: "Frontend" },
  { name: "Laravel", icon: "/images/lara nn.png", category: "Backend" },
  { name: "MongoDB", icon: "/images/mogo n.png", category: "Database" },
  { name: "Firebase", icon: "/images/firbase n.png", category: "Backend" },
]

const css = `   
  .swiper {
    width: 100%;
    padding: 20px 0 60px;
  }
  
  .swiper-slide {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    width: 200px;
    padding: 24px 16px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    margin: 0 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    border: 1px solid rgba(0,0,0,0.04);
  }

  .swiper-slide:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    border-color: rgba(0,0,0,0.08);
  }

  .swiper-slide img {
    display: block;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    object-fit: contain;
    transition: all 0.3s ease;
    filter: grayscale(60%);
    opacity: 0.9;
  }
  
  .swiper-slide:hover img {
    filter: grayscale(0%);
    opacity: 1;
    transform: scale(1.1);
  }

  .swiper-pagination-bullet {
    background: #E0E0E0;
    opacity: 1;
    width: 10px;
    height: 10px;
    margin: 0 6px !important;
  }
  
  .swiper-pagination-bullet-active {
    background: #3B82F6;
    width: 30px;
    border-radius: 5px;
  }
`

export default function SkillsCarousel() {
  return (
    <section
      className="w-ace-y-4 py-20"
      style={{ cursor: 'url(/heart.svg) 16 16, pointer' }}
      id="skills"
    >
      <style>{css}</style>
      <div className="mx-auto w-full max-w-6xl rounded-[24px] border border-black/5 dark:border-blue-500 p-2 shadow-sm md:rounded-t-[44px] dark:bg-neutral-900/90 bg-white">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 dark:border-blue-500 bg-neutral-50 dark:bg-neutral-900/70 p-2 shadow-md md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">
          <Badge
            variant="outline"
            className="absolute left-4 top-6 rounded-[14px] border border-black/10 dark:border-white/20 text-base md:left-6 dark:bg-neutral-800 dark:text-white bg-white text-neutral-900"
          >
            <SparklesIcon className="fill-[#EEBDE0] dark:fill-[#7F5A83] stroke-1 text-neutral-800 dark:text-white" />
            Technologies I use now
          </Badge>
          <div className="flex flex-col justify-center pb-2 pl-4 pt-14 md:items-center">
            <div className="flex gap-2">
              <div>
                <h3 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  Skills & Technologies
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">A showcase of my current stack and tools.</p>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-4 px-4">
            <div className="w-full">
              <Swiper
                spaceBetween={20}
                slidesPerView={'auto'}
                centeredSlides={false}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                speed={800}
                className="w-full py-4"
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                }}
              >
                {skills.map((skill, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col items-center p-6 bg-white rounded-xl h-full">
                      <div className="w-24 h-24 mb-4 flex items-center justify-center">
                        <Image
                          src={skill.icon}
                          width={80}
                          height={80}
                          alt={skill.name}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-center mb-1 text-gray-800">{skill.name}</h4>
                      <span className="text-sm text-gray-500 capitalize">{skill.category}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
