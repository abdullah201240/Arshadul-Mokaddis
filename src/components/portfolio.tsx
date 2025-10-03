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
    title: "AI-Powered Coaching Mobile App Design",
    description: "Design of a mobile app connecting coaches and clients, where coaches can schedule sessions, record conversations, and receive AI-driven task suggestions. Clients can also add tasks, ensuring a personalized and interactive coaching experience.",
    year: "2025",
    role: "UX Designer",
    techStack: "Figma",
    imageUrl: "/Thumbnail(1).png",
    imageAlt: "AI-Powered Coaching Mobile App Design",
    
    viewProjectUrl: "https://www.figma.com/design/PftCVBP2Xit23alvVTkcgT/AI-Powered-Coaching-Mobile-App-Design?node-id=0-1&t=tJ7dkC6tfIuKhTRG-1"
    // No caseStudyUrl - button will not show
  },
  {
    id: 5,
    title: "UNICEF Donation Website Design",
    description: "Design of a donation platform focused on simple navigation, transparent causes, and a seamless donation process to support UNICEF initiatives.",
    year: "2025",
    role: "UI/UX Designer",
    techStack: "Figma",
    imageUrl: "/Thumbnail(2).png",
    imageAlt: "UNICEF Donation Website Design",
    viewProjectUrl: "https://www.figma.com/design/C4zhik4T3Z5TlCSrrVnmZ8/tobetter8--Working-on-Progress-?node-id=7010-324&t=8Dr5pwpyz7aAL7he-1",
  }
  ,
  {
    id: 6,
    title: "Tiles E-Commerce Website Design",
    description: "Design of an online tiles store with easy browsing, product details, search and filter options, and a smooth checkout process.",
    year: "2025",
    role: "UI/UX Designer",
    techStack: "Figma",
    imageUrl: "/Thumbnail(3).png",
    imageAlt: "Tiles E-Commerce Website Design",
    
    viewProjectUrl: "https://www.figma.com/design/BPTW2gz6eocayNXLtgVKq3/Tiles-Selling-Website?node-id=7010-324&t=8Dr5pwpyz7aAL7he-1",
  },
  {
    id: 7,
    title: "Diamond Auction Website Design",
    description: "Design of an online diamond auction platform where users can place bids in real time, track ongoing auctions, and the highest bidder wins after the set time expires.",
    year: "2025",
    role: "UI/UX Designer",
    techStack: "Figma",
    imageUrl: "/Thumbnail(4).png",
    imageAlt: "Fitness tracking app",
    
    viewProjectUrl: "https://www.figma.com/design/NJbN1apQpkO8xJnEmu6aIi/Diamond-Auction-Website-Design?node-id=5106-1281&t=8Dr5pwpyz7aAL7he-1",
  }
  ,
  {
    id: 8,

    title: "Lighting Solutions Website Design",
    description: "Design of a website providing advanced lighting solutions for large-scale innovations, focusing on product showcase, solution highlights, and a seamless inquiry process.",
    year: "2025",
    role: "UI/UX Designer",
    techStack: "Figma",
    imageUrl: "/Thumbnail(5).png",
    imageAlt: "Lighting Solutions Website Design",
   
    viewProjectUrl: "https://www.figma.com/design/7LYMFblzeoAupUyzMLVgZo/Lighting-Solutions-Website-Design?node-id=7010-324&t=8Dr5pwpyz7aAL7he-1",
  },
  {
    id: 9,

    title: "Shariah-Compliant Stock Market Platform Design",
    description: "Design of a website and mobile app that enables users to track, analyze, and trade in the stock market while ensuring Shariah compliance, offering insights and tools for informed decision-making.",
    year: "2025",
    role: "UI/UX Designer",
    techStack: "Figma",
    imageUrl: "/Thumbnail(6).png",
    imageAlt: "Shariah-Compliant Stock Market Platform Design",
   
    viewProjectUrl: "https://www.figma.com/design/czVY10nNoxycztxOSGKdqC/Shariah-Compliant-Stock-Market-Platform-Design?node-id=5106-1281&t=tJ7dkC6tfIuKhTRG-1",
  },
  {
    id: 10,

    title: "Fashion Brand E-Commerce Website Design",
    description: "Design of an online fashion store with stylish product displays, smooth navigation, and an easy checkout experience to enhance brand identity and user engagement.",
    year: "2025",
    role: "UI/UX Designer",
    techStack: "Figma",
    imageUrl: "/Thumbnail(7).png",
    imageAlt: "Fashion Brand E-Commerce Website Design",
   
    viewProjectUrl: "https://www.figma.com/design/W8JpNCg2qGpliQMeTDh6Wb/Fashion-Brand-E-Commerce-Website-Design?node-id=13011-113&t=8Dr5pwpyz7aAL7he-1",
  },
  {
    id: 11,

    title: "Fresh Fruits & Vegetables Finder Website Design",
    description: "Design of a local marketplace app that helps users easily find and purchase fresh fruits and vegetables from nearby vendors with simple browsing and quick checkout.",
    year: "2025",
    role: "UI/UX Designer",
    techStack: "Figma",
    imageUrl: "/Thumbnail(8).png",
    imageAlt: "Fresh Fruits & Vegetables Finder Website Design",
   
    viewProjectUrl: "https://www.figma.com/design/CPhA1mbakRUXEdK2f2dISx/gman54?node-id=7010-324&t=8Dr5pwpyz7aAL7he-1",
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