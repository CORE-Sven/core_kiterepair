'use client';

interface AccordionItemProps {
  question: string;
  answer: string;
  isActive: boolean;
  index: number;
  toggleAccordion: (index: number) => void;
}

export default function AccordionItem({ 
  question, 
  answer, 
  isActive, 
  index, 
  toggleAccordion 
}: AccordionItemProps) {
  return (
    <div className="border border-gray-200">
      <button
        className="flex justify-between items-center w-full px-6 py-4 text-left font-medium"
        onClick={() => toggleAccordion(index)}
      >
        <span>{question}</span>
        <span>{isActive ? '−' : '+'}</span>
      </button>
      {isActive && (
        <div className="px-6 py-4 bg-gray-50">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
} 