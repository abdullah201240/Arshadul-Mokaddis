"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    "User Research",
    "Wireframing",
    "Prototyping",
    "UI Design",
    "UX Design",
    "Design Systems",
    "Figma",
    "Adobe Creative Suite",
    "User Testing",
    "Responsive Design",
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <div className="w-20 h-1 bg-white mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <h3 className="text-2xl font-semibold mb-4 text-white">My Journey</h3>
            <p className="text-white/80 mb-4">
              I&apos;m a passionate UI/UX designer with over 5 years of experience creating digital products that 
              combine aesthetic appeal with functional excellence. My approach focuses on understanding user 
              needs and translating them into intuitive, engaging interfaces.
            </p>
            <p className="text-white/80 mb-4">
              With a background in visual design and human psychology, I specialize in creating user-centered 
              experiences that drive engagement and conversion. I believe that great design is not just about 
              looking good&mdash;it&apos;s about solving problems and creating meaningful connections between users and 
              technology.
            </p>
            <p className="text-white/80 mb-6">
              When I&apos;m not designing, you can find me exploring new design trends, contributing to design 
              communities, or mentoring aspiring designers.
            </p>
            <Button asChild className="bg-white text-[#3843CD] hover:bg-white/90">
              <Link href="#">
                <Download className="mr-2 h-4 w-4" />
                Download Full Resume
              </Link>
            </Button>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-semibold mb-4 text-white">My Skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center p-3 bg-white/10 rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-white">{skill}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-white">Experience</h4>
              <div className="space-y-6">
                <div className="border-l-2 border-white pl-4 py-1 transition-all duration-500 hover:border-white/50">
                  <h5 className="font-semibold text-white">Senior UI/UX Designer</h5>
                  <p className="text-sm text-white/70">Tech Innovations Inc. • 2020 - Present</p>
                  <p className="mt-2 text-white/70">
                    Leading design initiatives for enterprise SaaS products, mentoring junior designers, 
                    and establishing design systems.
                  </p>
                </div>
                <div className="border-l-2 border-white pl-4 py-1 transition-all duration-500 hover:border-white/50">
                  <h5 className="font-semibold text-white">UI/UX Designer</h5>
                  <p className="text-sm text-white/70">Creative Solutions Ltd. • 2018 - 2020</p>
                  <p className="mt-2 text-white/70">
                    Designed mobile and web applications for various clients, conducted user research, 
                    and created interactive prototypes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}