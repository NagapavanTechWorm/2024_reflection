'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const emojis = [
  { label: '😊', value: 1, description: 'Positive' },
  { label: '😐', value: 0, description: 'Neutral' },
  { label: '😢', value: -1, description: 'Negative' },
];

interface EmojiOption {
  label: string;
  value: number;
  description: string;
}

interface Question {
  question: string;
  emoji_options: EmojiOption[];
}

export function QuestionCard({ 
  question, 
  onResponse, 
  questionNumber 
}: { 
  question: Question;
  onResponse: (month: number, score: number) => void;
  questionNumber: number;
}) {
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [step, setStep] = useState(1);

  const handleMonthSelect = (value: string) => {
    setSelectedMonth(value);
    setStep(2);
  };

  const handleEmojiSelect = (score: number) => {
    onResponse(months.indexOf(selectedMonth), score);
    setStep(1);
    setSelectedMonth('');
  };

  return (
    <Card className="p-6 bg-white/95 backdrop-blur-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-800 text-sm font-medium mb-4">
            Question {questionNumber}
          </span>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{question.question}</h2>
        </div>

        {step === 1 ? (
          <div className="space-y-4">
            <Select onValueChange={handleMonthSelect}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a month" />
              </SelectTrigger>
              <SelectContent>
                {months.map((month) => (
                  <SelectItem key={month} value={month}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            <p className="text-center text-gray-600">
              How would you rate your experience in {selectedMonth}?
            </p>
            <div className="flex justify-center flex-col md:flex-row gap-4">
              {question.emoji_options.map((emoji) => (
                <Button
                  key={emoji.value}
                  variant="outline"
                  className="text-3xl p-6 hover:scale-110 transition-transform"
                  onClick={() => handleEmojiSelect(emoji.value)}
                >
                  <span className="mr-2">{emoji.label}</span>
                  <span className="text-sm">{emoji.description}</span>
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </Card>
  );
}