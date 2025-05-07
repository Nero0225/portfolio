'use client';

import { cn } from '@/lib/utils'
import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import HackerBtn from './animation/HackerBtn'

function DownLoadResumeBtn() {
  const handleResumeClick = async () => {
    try {
      await fetch('/api/track-ip', {
        method: 'POST',
      });
    } catch (error) {
      console.error('Error tracking IP:', error);
    }
  };

  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <Link href="static/resume/resume.pdf" target="_blank" onClick={handleResumeClick}>
        <HackerBtn label='View Resume' />
      </Link>
    </div>
  )
}

export default DownLoadResumeBtn