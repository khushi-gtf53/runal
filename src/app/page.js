import About from '@/components/home/About'
import Blogs from '@/components/home/Blogs'
import Developments from '@/components/home/Developments'
import Hero from '@/components/home/Hero'
import IconicProperties from '@/components/home/IconicProperties'
import OurTeam from '@/components/home/OurTeam'
import ProjectTimeline from '@/components/home/ProjectTimeline'
import React from 'react'

const page = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Developments/>
    <IconicProperties/>
    <ProjectTimeline/>
    <OurTeam/>
    <Blogs/>
    </>
  )
}

export default page