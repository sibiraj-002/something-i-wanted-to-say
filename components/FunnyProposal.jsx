"use client";
import EscapeButton from "./EscapeButton";
import PrimaryButton from "./PrimaryButton";
import Illustration from "./Illustration";
import AnimatedText from "./AnimatedText";

export default function FunnyProposal({ onYes }) {
  return (
    <div className="relative w-full min-h-[min(70vh,420px)] sm:min-h-[380px] flex flex-col items-center">
      <Illustration src="/step_5.png" alt="Us" />
      <AnimatedText delay={0.2} size="xl" className="mb-2">
        So here&apos;s my real question…
      </AnimatedText>
      <AnimatedText delay={0.5} size="xl" className="mb-6 sm:mb-8">
        Will you walk with me — with patience, honesty,
        and a little bit of chaos? 💖
      </AnimatedText>
      <div className="relative w-full flex flex-col sm:flex-row gap-4 justify-center items-center px-2">
        <div className="flex justify-center sm:min-h-[80px] sm:items-center">
          <PrimaryButton onClick={onYes}>YES ❤️</PrimaryButton>
        </div>
        <div className="relative w-full min-h-[100px] sm:min-h-[80px] sm:w-auto sm:flex-1 flex items-center justify-center">
          <EscapeButton />
        </div>
      </div>
    </div>
  );
}
