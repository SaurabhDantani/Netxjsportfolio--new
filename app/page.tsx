'use client'
import { useEffect, useState } from 'react';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from 'next/image';
import { 
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
 } from '@tabler/icons-react';
 
import { FloatingDock } from '@/components/ui/floating-dock';
import { Button } from '@/components/ui/button';
export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid mismatch by waiting until the component is mounted on the client

  return (
    <>
    <div style={{marginTop: '500px'}}>
      <BackgroundBeamsWithCollision>
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            What&apos;s cooler than Beams?{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span>Exploding beams.</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span>Exploding beams.</span>
              </div>
            </div>
          </h2>

        <Button>Button</Button>
      </BackgroundBeamsWithCollision>
    </div>
    </>
  );
}

