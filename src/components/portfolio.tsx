'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
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
  liveDemoUrls?: { name: string; url: string }[];
  viewProjectUrl?: string;
  caseStudyUrl?: string; // Made optional with ?
}

// Sample project data - easy to extend with more projects
const projects: Project[] = [
  {
    id: 1,
    title: "Delivery & Transport App Design",
    description: "Complete design of a delivery and transport app focusing on seamless user flow, real-time tracking, and efficient product handover across hubs.",
    year: "2025",
    role: "UI/UX Designer",
    techStack: "Figma",
    imageUrl: "/project.png",
    imageAlt: "Healthcare platform redesign",
    liveDemoUrls: [
      { name: "Play Store", url: " https://www.behance.net/gallery/233012629/Bring-2-Me-A-Smart-Way-to-Deliver-Earn-%28Case-Study%29" },
    ],
    viewProjectUrl: "https://www.figma.com/design/m2b3MdWNOl4E05fho2a3za/Bring2Me?node-id=0-1&t=8Dr5pwpyz7aAL7he-1",
    caseStudyUrl: " https://www.behance.net/gallery/233012629/Bring-2-Me-A-Smart-Way-to-Deliver-Earn-%28Case-Study%29" // Has case study
  },
  {
    id: 2,
    title: "Word Game Mobile App",
    description: "Designed a mobile word game with simple navigation, engaging visuals, and smooth gameplay.",
    year: "2025",
    role: "Product Designer",
    techStack: "Figma",
    imageUrl: "/Thumbnail.png",
    imageAlt: "E-commerce mobile app design",
    liveDemoUrls: [
      { name: "Apple store", url: "https://apps.apple.com/us/app/word-games-ice-fire-media/id6748601363" },
      { name: "Play store", url: "https://play.google.com/store/apps/details?id=com.icefiremedia.wordgame&pli=1" }
    ],
    viewProjectUrl: "https://www.figma.com/design/NrwnKluMSWye6OcXLkEAJ5/Word-Game?node-id=0-1&t=qrMzkjutbATdYyuH-1"
  },
  {
    id: 3,
    title: "Home Services Mobile App Design",
    description: "Design of a mobile app where users can book multiple home services easily, and service providers can manage and deliver services based on customer orders.",
    year: "2025",
    role: "UI Designer",
    techStack: "Figma",
    imageUrl: "/Thumbnail2.png",
    imageAlt: "Home services mobile app design",
    
    viewProjectUrl: "https://www.figma.com/design/xOGrVTRAw5xjNHxxcOH389/Home-Services-Mobile-App-Design?node-id=7010-324&t=tJ7dkC6tfIuKhTRG-1",
  },
  {
    id: 4,
    title: "Travel Booking Platform",
    description: "Designed a seamless booking experience for a travel platform with focus on usability and accessibility.",
    year: "2023",
    role: "UX Designer",
    techStack: "Figma, Vue.js",
    imageUrl: "/project.png",
    imageAlt: "Travel booking platform",
    liveDemoUrls: [
      { name: "Live Demo", url: "https://example.com/project4" },
      { name: "Design System", url: "https://example.com/project4/design" }
    ],
    viewProjectUrl: "https://example.com/view4"
    // No caseStudyUrl - button will not show
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    description: "Developed a comprehensive fitness tracking application with personalized workout recommendations.",
    year: "2023",
    role: "UI/UX Designer",
    techStack: "Adobe XD, React Native",
    imageUrl: "/project.png",
    imageAlt: "Fitness tracking app",
    liveDemoUrls: [
      { name: "Live Demo", url: "https://example.com/project5" },
      { name: "App Store", url: "https://appstore.com/project5" }
    ],
    viewProjectUrl: "https://example.com/view5",
    caseStudyUrl: "https://example.com/case5" // Has case study
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
            onClick={() => window.open(project.viewProjectUrl, '_blank')}
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-xs font-medium transition-all backdrop-blur-sm"
          >
            View project <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
          
          {/* Conditional rendering of Case Study button */}
          {project.caseStudyUrl && (
            <Button 
              onClick={() => window.open(project.caseStudyUrl!, '_blank')}
              variant="outline" 
              className="border-2 border-white/30 text-white px-4 py-2 rounded-full text-xs font-medium bg-white/10 hover:bg-white/20 backdrop-blur-sm"
            >
              Read Case Study
            </Button>
          )}
          
          {/* Dynamic Live Demo Buttons */}
          {project.liveDemoUrls?.map((demo, index) => (
            <Button 
              key={index}
              onClick={() => window.open(demo.url, '_blank')}
              className="bg-white text-[#551EBA] hover:bg-white/90 px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center"
            >
              {demo.name} <ExternalLink className="ml-1 h-3 w-3" />
            </Button>
          ))}
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