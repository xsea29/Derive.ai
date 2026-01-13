"use client";

import { CheckCircle, Sparkles, Eye, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SuccessScreen({ candidateCount = 0 }) {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        {/* Success animation */}
        <div
          className="relative mx-auto mb-8 animate-in fade-in zoom-in duration-500"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-2xl w-32 h-32 mx-auto" />
          <div className="relative flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/50">
            <div
              className="animate-in fade-in zoom-in duration-500 delay-200"
            >
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
          </div>
          
          {/* Sparkles */}
          <div
            className="absolute -top-2 -right-2 animate-in fade-in duration-500 delay-300"
          >
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <div
            className="absolute -bottom-1 -left-3 animate-in fade-in duration-500 delay-400"
          >
            <Sparkles className="h-5 w-5 text-primary/70" />
          </div>
        </div>

        <div
          className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200"
        >
          <h1 className="text-2xl font-semibold tracking-tight mb-2">
            AI Interviews Sent Successfully!
          </h1>
          <p className="text-muted-foreground">
            {candidateCount} candidate{candidateCount !== 1 ? "s" : ""} will receive secure interview links shortly.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400"
        >
          <Link href="/interview">
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              <Eye className="h-4 w-4" />
              View Interview Status
            </Button>
          </Link>
          <Link href="/interview/create">
            <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
              <Plus className="h-4 w-4" />
              Create Another Interview
            </Button>
          </Link>
        </div>

        <p
          className="text-xs text-muted-foreground mt-8 animate-in fade-in duration-500 delay-500"
        >
          You'll receive notifications as candidates complete their interviews.
        </p>
      </div>
    </div>
  );
}
