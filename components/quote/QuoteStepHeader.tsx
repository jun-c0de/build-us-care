"use client";

type Step = {
  label: string;
  description: string;
};

type QuoteStepHeaderProps = {
  steps: readonly Step[];
  currentIndex: number;
  total: string;
  instagram?: boolean;
};

export function QuoteStepHeader({ steps, currentIndex, total, instagram = false }: QuoteStepHeaderProps) {
  const current = steps[currentIndex] ?? steps[0];

  return (
    <section className="quote-flow-note" aria-label="견적 진행 요약">
      <div>
        <span>{`${currentIndex + 1}/${steps.length} ${current.label}`}</span>
        <strong>{total}</strong>
        <p>{current.description}</p>
        {instagram && <em>사진과 기본 정보만 남겨주셔도 됩니다. 정찰가 가능 여부를 먼저 확인해드릴게요.</em>}
      </div>
      <ol>
        {steps.map((step, index) => (
          <li key={step.label} className={quoteStepState(index, currentIndex)}>
            <b>{index + 1}</b>
            {step.label}
          </li>
        ))}
      </ol>
    </section>
  );
}

function quoteStepState(index: number, currentIndex: number) {
  if (index < currentIndex) return "done";
  if (index === currentIndex) return "current";
  return "";
}
