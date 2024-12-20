'use client';

import { useState,useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { YearlyChart } from '@/components/yearly-chart';
import { QuestionCard } from '@/components/question-card';
import { Snowfall } from '@/components/snowfall';
import { Header } from '@/components/header';
import { ProgressIndicator } from '@/components/progress-indicator';
// import { questions } from '@/lib/questions';
import {questionss} from '@/lib/questions';
import { useRandomQuestions } from '@/hooks/use-random-questions';
import { Footer } from '@/components/Footer';
import NPLoading from '@/components/Loading';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<Array<{ month: number; score: number }>>([]);
  const selectedQuestions = useRandomQuestions(questionss, 24);
  

  if (selectedQuestions.length === 0) {
    return <NPLoading/>

  }



  const handleResponse = (month: number, score: number) => {
    setResponses([...responses, { month, score }]);
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-green-900 md:flex md:flex-col md:justify-between">
      <Snowfall />
      <main className="container mx-auto px-4 py-8 relative">
        <Header />

        <AnimatePresence mode="wait">
          {currentStep < 24 ? (
            <motion.div
              key="question"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              className="max-w-2xl mx-auto"
            >
              <QuestionCard
                question={selectedQuestions[currentStep]}
                onResponse={handleResponse}
                questionNumber={currentStep + 1}
              />
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="p-6 bg-white/95 backdrop-blur-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">Your Year in Review</h2>
                <YearlyChart data={responses} />
                <div className="mt-6 flex justify-center">
                  <Button className="bg-green-700 hover:bg-green-800">
                    <Share2 className="mr-2" /> Share Your Reflection
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <ProgressIndicator currentStep={currentStep} />
      </main>
      <Footer/>
    </div>
  );
}