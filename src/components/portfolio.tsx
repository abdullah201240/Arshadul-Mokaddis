'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

// Define the project data structure
interface Project {
  id: number;
  title: string;
  description: string;
  year: string;
  role: string;
  techStack: string;
  imageUrl: string;
  imageAlt: string;
}

// Sample project data - easy to extend with more projects
const projects: Project[] = [
  {
    id: 1,
    title: "Healthcare Platform Redesign",
    description: "Complete redesign of a healthcare platform focusing on improving patient experience and operational efficiency.",
    year: "2025",
    role: "UI/UX Designer",
    techStack: "Figma",
    imageUrl: "/project.png",
    imageAlt: "Healthcare platform redesign"
  },
  {
    id: 2,
    title: "E-commerce Mobile App",
    description: "Designed a mobile shopping experience with focus on conversion optimization and user engagement.",
    year: "2024",
    role: "Product Designer",
    techStack: "Figma, React",
    imageUrl: "/project.png",
    imageAlt: "E-commerce mobile app design"
  },
  {
    id: 3,
    title: "Banking Dashboard UI",
    description: "Created a modern dashboard interface for financial analytics with real-time data visualization.",
    year: "2024",
    role: "UI Designer",
    techStack: "Sketch, React",
    imageUrl: "/project.png",
    imageAlt: "Banking dashboard UI"
  },
  {
    id: 4,
    title: "Travel Booking Platform",
    description: "Designed a seamless booking experience for a travel platform with focus on usability and accessibility.",
    year: "2023",
    role: "UX Designer",
    techStack: "Figma, Vue.js",
    imageUrl: "/project.png",
    imageAlt: "Travel booking platform"
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    description: "Developed a comprehensive fitness tracking application with personalized workout recommendations.",
    year: "2023",
    role: "UI/UX Designer",
    techStack: "Adobe XD, React Native",
    imageUrl: "/project.png",
    imageAlt: "Fitness tracking app"
  }
];

// Project card component for reusability
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-xl border-none shadow-lg flex flex-col lg:flex-row">
      {/* Left Side - Project Details */}
      <div className="bg-[#551EBA] backdrop-blur-md p-6 lg:p-8 text-white flex-1 flex flex-col justify-between">
        <div className='mt-16'>
          <h2 className="text-2xl font-bold mb-6">
            {project.title}
          </h2>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <p className="text-purple-300 mb-1 text-xs">Completed</p>
              <p className="text-lg font-semibold">{project.year}</p>
            </div>
            <div>
              <p className="text-purple-300 mb-1 text-xs">Role</p>
              <p className="text-lg font-semibold">{project.role}</p>
            </div>
            <div>
              <p className="text-purple-300 mb-1 text-xs">Tech Stack</p>
              <p className="text-lg font-semibold">{project.techStack}</p>
            </div>
          </div>

          <p className="text-sm text-white mb-6 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button 
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-xs font-medium transition-all backdrop-blur-sm"
          >
            View project <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
          <Button 
            variant="outline" 
            className="border-2 border-white/30 text-white px-4 py-2 rounded-full text-xs font-medium bg-white/10 hover:bg-white/20 backdrop-blur-sm"
          >
            Read Case Study
          </Button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 relative w-full h-auto">
        <Image
          src={project.imageUrl}
          alt={project.imageAlt}
          width={800}
          height={500}
          className="object-contain w-full h-full rounded-r-xl"
        />
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  return (
    // Added id="portfolio" to make the anchor link work
    <div id="portfolio" className="p-2 flex items-center justify-center">
      <div className="w-full max-w-7xl">
        <div className="text-center mb-12 mt-8">
          <h2 className="text-2xl text-white tracking-tight mb-2">
            Featured Projects
          </h2>
          <p className="text-base text-white/90">
            Showcasing my creative UI/UX design work with impactful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}