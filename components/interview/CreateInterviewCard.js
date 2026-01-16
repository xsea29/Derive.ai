'use client';

import { motion } from 'framer-motion';
import { Plus, Sparkles, Upload, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CreateInterviewCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-card border border-border p-5 sm:p-6 md:p-8 lg:p-10 card-elevated"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 ai-gradient-subtle opacity-50" />
      
      <div className="relative">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
          <div className="flex-1 w-full">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-primary/10 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-primary mb-3 sm:mb-4">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              AI-Powered Interviews
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3 sm:mb-4 text-balance">
              Create AI Interview
            </h1>
            
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-4 sm:mb-6">
              Upload candidates from any ATS or spreadsheet and run AI interviews at scale.
              <span className="hidden sm:inline"> No integration required — works with any hiring workflow.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
              <Link href="/interview/create" className="w-full sm:w-auto">
                <Button size="lg" className="ai-gradient ai-glow-sm gap-2 font-medium w-full sm:w-auto tap-target">
                  <Plus className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                  <span className="hidden sm:inline">Create AI Interview</span>
                  <span className="sm:hidden">Create Interview</span>
                </Button>
              </Link>
              
              <Link href="/interview" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto tap-target">
                  <span className="hidden sm:inline">View All Interviews</span>
                  <span className="sm:hidden">View All</span>
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 md:gap-6 mt-5 sm:mt-8 pt-4 sm:pt-6 border-t border-border/60">
              <FeatureChip icon={<Upload className="h-3 w-3 sm:h-3.5 sm:w-3.5" />} text="CSV & Excel" />
              <FeatureChip icon={<Zap className="h-3 w-3 sm:h-3.5 sm:w-3.5" />} text="Text, Audio & Video" />
              <FeatureChip icon={<Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />} text="AI-adaptive" />
            </div>
          </div>
          
          <div className="hidden lg:flex items-center justify-center shrink-0 w-full lg:w-auto">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rounded-full ai-gradient opacity-20 blur-2xl" />
              <div className="relative flex items-center justify-center w-full h-full">
                <div className="w-32 h-32 rounded-2xl ai-gradient flex items-center justify-center ai-glow">
                  <Sparkles className="h-14 w-14 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FeatureChip({ icon, text }) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <span className="text-primary">{icon}</span>
      {text}
    </div>
  );
}
