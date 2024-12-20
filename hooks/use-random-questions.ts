'use client';

import { useState, useEffect } from 'react';

interface EmojiOption {
  label: string;
  value: number;
  description: string;
}

interface Question {
  question: string;
  emoji_options: EmojiOption[];
}

export function useRandomQuestions(questions: Question[], count: number): Question[] {
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);

  useEffect(() => {
    if (questions && questions.length > 0) {
      console.log("Shuffling questions...");
      const shuffled = [...questions].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, count);
      console.log("Selected questions after shuffle:", selected);
      setSelectedQuestions(selected);
    } else {
      console.warn("Questions array is empty or undefined.");
    }
  }, [questions, count]);  // Effect runs whenever `questions` or `count` changes

  // Return selected questions (after they have been updated via setSelectedQuestions)
  return selectedQuestions;
}
