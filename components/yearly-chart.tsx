'use client';

import { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export function YearlyChart({ 
  data 
}: { 
  data: Array<{ month: number; score: number }> 
}) {
  const chartData = useMemo(() => {
    const monthlyScores = months.map((month, index) => {
      const monthResponses = data.filter(d => d.month === index);
      const score = monthResponses.length
        ? monthResponses.reduce((acc, curr) => acc + curr.score, 0) / monthResponses.length
        : 0;
      
      return {
        month,
        score: parseFloat(score.toFixed(2)),
      };
    });

    return monthlyScores;
  }, [data]);

  return (
    <div className="w-full h-[150px] md:h-[400px]">
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            stroke="#374151"
            tick={{ fill: '#374151' }}
          />
          <YAxis
            stroke="#374151"
            tick={{ fill: '#374151' }}
            domain={[-1, 1]}
            ticks={[-1, -0.5, 0, 0.5, 1]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
            }}
          />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#15803d"
            strokeWidth={2}
            dot={{
              fill: '#15803d',
              stroke: 'white',
              strokeWidth: 2,
              r: 6,
            }}
            activeDot={{
              fill: '#15803d',
              stroke: 'white',
              strokeWidth: 2,
              r: 8,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}