"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { SparklesIcon } from "lucide-react"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

import { Badge } from "@/components/ui/badge"

interface CarouselProps {
  images: { src: string; alt: string }[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `   
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    border-radius: 24px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .swiper-slide:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 24px;
  }

  .swiper-3d .swiper-slide-shadow-left,
  .swiper-3d .swiper-slide-shadow-right {
    background: none;
  }

  /* Pagination dots */
  .swiper-pagination-bullet {
    background: #888;
    opacity: 0.7;
  }
  .swiper-pagination-bullet-active {
    background: #EEBDE0;
  }

  /* Navigation arrows */
  .swiper-button-next,
  .swiper-button-prev {
    color: #EEBDE0;
    transition: color 0.3s ease;
  }
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    color: #FF7AC6;
  }
  `
  return (
    <section
      className="w-ace-y-4"
      style={{ cursor: 'url(/heart.svg) 16 16, pointer' }}
    >
      <style>{css}</style>
      {/* Top blue line and title */}

      <div className="mx-auto w-full max-w-6xl rounded-[24px] border border-black/5 dark:border-blue-500 p-2 shadow-sm md:rounded-t-[44px] dark:bg-neutral-900/90 bg-white">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 dark:border-blue-500 bg-neutral-50 dark:bg-neutral-900/70 p-2 shadow-md md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">
          <Badge
            variant="outline"
            className="absolute left-4 top-6 rounded-[14px] border border-black/10 dark:border-white/20 text-base md:left-6 dark:bg-neutral-800 dark:text-white bg-white text-neutral-900"
          >
            <SparklesIcon className="fill-[#EEBDE0] dark:fill-[#7F5A83] stroke-1 text-neutral-800 dark:text-white" />{" "}
            Technologies I use now
          </Badge>
          <div className="flex flex-col justify-center pb-2 pl-4 pt-14 md:items-center">
            <div className="flex gap-2">
              <div>
                <h3 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  Technologie
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">A showcase of my current stack and tools.</p>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                spaceBetween={50}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="size-full rounded-3xl bg-white dark:bg-neutral-800 shadow-md dark:shadow-black/40">
                      <Image
                        src={image.src}
                        width={500}
                        height={500}
                        className="size-full rounded-xl"
                        alt={image.alt}
                      />
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
