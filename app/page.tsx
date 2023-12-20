import BlogPost from "@/components/main/BlogPost";
import Choice from "@/components/main/Choice";
import Hero from "@/components/main/Hero";
import OngoingProject from "@/components/main/OngoingProject";
import Review from "@/components/main/Review";
import Subscribe from "@/components/main/Subscribe";
import TrustedCompany from "@/components/main/TrustedCompany";
import WhatIDo from "@/components/main/WhatIDo";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main className=''>
    <div className=''>
    <Hero/>
    <WhatIDo/>
    <OngoingProject/>
    <TrustedCompany/>
    <Subscribe/>
    <Review/>
    <Choice/>
    <BlogPost/>
    <Footer/>
    </div>
    </main>
  )
}
