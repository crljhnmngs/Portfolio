import React, { useMemo, useState, useRef, useEffect } from 'react';
import { Popup } from '../animation/Popup';
import { FaGithub, FaEye } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { projects } from '../const';
import ImageWithFallback from '../utils/ImageWithFallback';
import { TechList } from './TechList';
import { ProjectModal } from './ProjectModal';
import { Project } from '~/types/global';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );
    const [isModalOpen, setIsModalOpen] = useState(false);
    const memoizedData = useMemo(() => {
        return projects;
    }, []);

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const swiperRef = useRef<SwiperCore | null>(null);

    useEffect(() => {
        if (isModalOpen && swiperRef.current) {
            swiperRef.current.autoplay.stop();
        } else if (!isModalOpen && swiperRef.current) {
            swiperRef.current.autoplay.start();
        }
    }, [isModalOpen]);

    return (
        <section
            className="h-auto sm:h-screen desktopMaxHeight:h-maxDesktop projectMaxHeight:h-auto projectsCustomBP:h-auto bg-gray-100 dark:bg-black flex max-screen:justify-center"
            id="projects"
        >
            <div className="w-full max-screen:max-w-maxDesktop">
                <div className="max-w-maxScreen mx-auto sm:px-6 lg:px-7 px-4 h-full max-screen:px-0">
                    <div className="flex items-center justify-center pt-10">
                        <Popup
                            delay={0.5}
                            className="text-black font-semibold text-3xl sm:text-3xl dark:text-white"
                        >
                            Personal Projects
                        </Popup>
                    </div>
                    <div className="sm:py-10 py-5 w-full h-full">
                        <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                pauseOnMouseEnter: true,
                            }}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 25,
                                depth: 100,
                                modifier: 3,
                                slideShadows: true,
                            }}
                            modules={[EffectCoverflow, Pagination, Autoplay]}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                            }}
                        >
                            {memoizedData.map((project) => (
                                <SwiperSlide key={project.name}>
                                    <div className="w-[24rem] h-[32rem] lg:w-[29rem] lg:h-[33rem] xl:w-[32rem] xl:h-[35.5rem] project-xl:w-[35rem] project-xl:h-[39rem] mt-2 dark:bg-gray-200 bg-white rounded-lg p-3 lg:p-4">
                                        <div className="h-[50%] xl:h-[55%] w-full">
                                            <ImageWithFallback
                                                src={project.image}
                                                alt={project.name}
                                                loaderColor="black"
                                                className="object-fill size-full rounded-lg"
                                            />
                                        </div>
                                        <div className="h-[50%] xl:h-[45%] relative">
                                            <div className="mt-5 text-xl w-full project-xl:text-2xl font-semibold flex flex-col -gap-1">
                                                <div className="flex gap-1">
                                                    {project.new && (
                                                        <span className="text-[12px] leading-3 text-white text-center bg-red-500 dark:bg-red-600 px-1 py-1 rounded-md w-9">
                                                            New
                                                        </span>
                                                    )}
                                                    {project.dev && (
                                                        <span className="text-[12px] leading-3 text-white text-center bg-green-500 dark:bg-green-600 px-1 py-1 rounded-md w-24">
                                                            Development
                                                        </span>
                                                    )}
                                                </div>
                                                <h1 className="overflow-hidden">
                                                    {project.name}
                                                </h1>
                                            </div>
                                            <div className="mt-3 max-w-[100%] min-h-[4.5rem]">
                                                <p className="text-justify sm:text-base line-clamp-4 project-xl:line-clamp-5">
                                                    {project.about}
                                                </p>
                                            </div>

                                            <div className="absolute bottom-[15px] lg:bottom-5 w-full">
                                                <TechList
                                                    techs={project.tech}
                                                />
                                                <div className="flex justify-between">
                                                    <div className="text-base font-semibold pl-2 pt-1">
                                                        <p>{project.date}</p>
                                                    </div>
                                                    <div className="flex gap-3 pr-1 sm:pr-5">
                                                        <div className="relative group">
                                                            <a
                                                                onClick={() =>
                                                                    openModal(
                                                                        project
                                                                    )
                                                                }
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="opt-10 group-hover:opacity-100"
                                                            >
                                                                <FaEye className="size-7 opacity-60 cursor-pointer group-hover:opacity-100" />
                                                            </a>
                                                            <div className="absolute -bottom-4 right-2 left-0 pl-2 flex-col items-center hidden mb-[3.2rem] group-hover:flex">
                                                                <div className="w-3 h-3 -mb-10 rotate-45 bg-black dark:bg-white"></div>
                                                                <span className="p-3 text-xs text-center leading-none text-white dark:text-black whitespace-no-wrap bg-black dark:bg-white shadow-lg w-32 rounded-md">
                                                                    View More
                                                                    Info
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {project.links
                                                            ?.github && (
                                                            <div className="relative group">
                                                                <a
                                                                    href={
                                                                        project
                                                                            .links
                                                                            .github
                                                                    }
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                    className="opt-10 group-hover:opacity-100"
                                                                >
                                                                    <FaGithub className="size-7 opacity-60 cursor-pointer group-hover:opacity-100" />
                                                                </a>
                                                                <div className="absolute -bottom-4 right-2 left-0 pl-2 flex-col items-center hidden mb-[3.2rem] group-hover:flex">
                                                                    <div className="w-3 h-3 -mb-10 rotate-45 bg-black dark:bg-white"></div>
                                                                    <span className="p-3 text-xs text-center leading-none text-white dark:text-black whitespace-no-wrap bg-black dark:bg-white shadow-lg w-32 rounded-md">
                                                                        View
                                                                        Repository
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {project.links
                                                            ?.live && (
                                                            <div className="relative group">
                                                                <a
                                                                    href={
                                                                        project
                                                                            .links
                                                                            .live
                                                                    }
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                >
                                                                    <FaLink className="size-7 opacity-60 cursor-pointer group-hover:opacity-100" />
                                                                </a>
                                                                <div className="absolute -bottom-4 right-2 left-0 pl-2 flex-col items-center hidden mb-[3rem] group-hover:flex ">
                                                                    <div className="w-3 h-3 -mb-10 rotate-45 bg-black dark:bg-white"></div>
                                                                    <span className=" p-3 text-xs text-center leading-none text-white dark:text-black whitespace-no-wrap bg-black dark:bg-white shadow-lg w-24 rounded-md">
                                                                        View
                                                                        Site
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="w-full flex items-center justify-center pb-5 sm:hidden">
                        <p className="text-sm text-black dark:text-white">
                            Swipe Left or Right
                        </p>
                    </div>
                </div>
                <ProjectModal
                    project={selectedProject!}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </div>
        </section>
    );
}
