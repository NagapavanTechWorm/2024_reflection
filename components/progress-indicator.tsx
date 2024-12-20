'use client';

import { ChevronRight } from 'lucide-react';

export function ProgressIndicator({ currentStep }: { currentStep: number }) {
  if (currentStep >= 24) return null;

  return (
    <div className="mt-8 text-center text-white/60">
      <p>
        Question {currentStep + 1} of 24
        <ChevronRight className="inline ml-2" />
      </p>
    </div>
  );
}