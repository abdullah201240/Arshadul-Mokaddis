import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function SkillsExpertise() {
  const skills = [
    { image: "/fi_6020329.png", title: "Usability Testing & Iteration" },
    { image: "/fi_3518261.png", title: "UI Design & Visual Consistency" },
    { image: "/fi_1055666.png", title: "User Research & Analysis" },
    { image: "/fi_2621271.png", title: "Wireframing & Prototyping" }
  ];

  return (
    // Changed to use transparent background to show global gradient
    <div className="w-full flex flex-col items-center px-6 pb-12">
      <div className="max-w-7xl w-full flex flex-col items-center space-y-6 mt-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl text-white tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-white/90 text-lg max-w-7xl mx-auto">
            Designing intuitive and engaging user experiences with a balance of creativity and usability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image 
                    src={skill.image} 
                    alt={skill.title} 
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                
                <h3 className="text-white font-semibold text-2xl leading-tight text-center">
                  {skill.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}