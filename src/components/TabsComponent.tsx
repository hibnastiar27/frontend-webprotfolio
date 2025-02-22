"use client";

import React from 'react'
import { Tabs, Tab } from "@heroui/react";
import CardComponent from './CardComponent';

interface TabsProps {
  educations: {
    title: string;
    institution: string;
    duration: string;
    description: string[];
    imageUrl: string;
  }[];
  experiences: {
    title: string;
    institution: string;
    duration: string;
    description: string[];
    imageUrl: string;
  }[];
  resumeUrl: string;
}

const TabsComponent = ({ educations, experiences, resumeUrl }: TabsProps) => {
  return (
    <div className='flex flex-col sm:justify-start sm:items-start justify-center items-center'>
      <div className="w-full overflow-x-scroll scrollbar-hide">
        <Tabs size="lg" variant="light" radius="full" className='flex-nowrap whitespace-nowrap' color="default" aria-label="Tabs About Me">
          <Tab title="description" className='w-full'>
            <div className='w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3  gap-4 dark:text-foreground'>
              {educations.map((edu, index) => (
                <CardComponent key={index} {...edu} />
              ))}
            </div>
          </Tab>
          <Tab title="Educations" className='w-full'>
            <div className='w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3  gap-4 dark:text-foreground'>
              {educations.map((edu, index) => (
                <CardComponent key={index} {...edu} />
              ))}
            </div>
          </Tab>

          <Tab title="Experiences" className='w-full'>
            <div className='w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3  gap-4 dark:text-foreground'>
              {experiences.map((exp, index) => (
                <CardComponent key={index} {...exp} />
              ))}
            </div>
          </Tab>

          <Tab title="Resume" className='w-full'>
            <div className='w-full dark:text-foreground'>
              <iframe
                className='rounded-xl border border-gray-400 dark:border-gray-700'
                src={resumeUrl}
                width="100%"
                height="1200px"
                title="PDF Viewer"
              ></iframe>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div >
  )
}

export default TabsComponent