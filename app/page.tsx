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
 import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { FloatingDock } from '@/components/ui/floating-dock';
import { Button } from '@/components/ui/button';
import { BentoGridThirdDemo } from '@/components/hero';
import { MarqueeDemo } from '@/components/magicui/data';
export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid mismatch by waiting until the component is mounted on the client

  return (
    <>
    <div className='mt-20'>
      <BackgroundBeamsWithCollision>
        <BentoGridThirdDemo />
      </BackgroundBeamsWithCollision>
       <MarqueeDemo />
    </div>
    </>
  );
}

