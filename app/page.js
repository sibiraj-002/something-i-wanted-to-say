"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "../components/Section";
import Button from "../components/Button";
import FunnyProposal from "../components/FunnyProposal";
import Illustration from "../components/Illustration";
import AnimatedText from "../components/AnimatedText";
import PrimaryButton from "../components/PrimaryButton";
import HeartsBackground from "../components/HeartsBackground";

const fadeInOut = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <>
      <HeartsBackground />
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="step1" {...fadeInOut}>
            <Section>
              <Illustration src="/step_01.png" alt="You" />
              <AnimatedText delay={0.2}>Hey Rathii…</AnimatedText>
              <AnimatedText delay={0.6}>
                I didn&apos;t make this to surprise you.
              </AnimatedText>
              <AnimatedText delay={1}>
                I made this because some feelings
                are easier to say slowly… like this.
              </AnimatedText>
              <div className="pt-2">
                <PrimaryButton onClick={() => setStep(2)}>Continue</PrimaryButton>
              </div>
            </Section>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" {...fadeInOut}>
            <Section>
              <AnimatedText delay={0.2}>Sometimes…</AnimatedText>
              <AnimatedText delay={0.6}>
                some feelings stay quietly inside
                waiting for the right moment to be spoken.
              </AnimatedText>
              <div className="pt-2">
                <Button onClick={() => setStep(3)}>Continue</Button>
              </div>
            </Section>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="step3" {...fadeInOut}>
            <Section>
              <AnimatedText delay={0.2}>
                And somewhere between silence and smiles…
              </AnimatedText>
              <AnimatedText delay={0.6}>
                I realised what you truly mean to me.
              </AnimatedText>
              <div className="pt-2">
                <Button onClick={() => setStep(4)}>Continue</Button>
              </div>
            </Section>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div key="step4" {...fadeInOut}>
            <Section>
              <AnimatedText delay={0.2} size="xl">
                I don&apos;t want confusion anymore.
              </AnimatedText>
              <AnimatedText delay={0.5} size="xl">
                I want clarity — with you.
              </AnimatedText>
              <div className="pt-4">
                <PrimaryButton onClick={() => setStep(5)}>Yes, let&apos;s talk ❤️</PrimaryButton>
              </div>
            </Section>
          </motion.div>
        )}

        {step === 5 && (
          <motion.div key="step5" {...fadeInOut}>
            <Section>
              <AnimatedText delay={0.2}>
                What I&apos;m about to say isn&apos;t something new… you already know how much I care about you.
              </AnimatedText>
              <AnimatedText delay={0.5}>
              Maybe I didn’t always express it in the right way — but the feeling was always real.
              </AnimatedText>
                <AnimatedText delay={0.8}>
                I&apos;ve been quiet these past days, but every silence had a reason.
              </AnimatedText>
              <AnimatedText delay={1.1}>
                I always wished to tell this to you in person, looking at you and into your eyes.
              </AnimatedText>
              <AnimatedText delay={1.4}>
                That&apos;s why I tried coming to Salem whenever I had leave — maybe with a little bit of false hope — but I didn&apos;t really get many chances to meet you.
              </AnimatedText>
              <AnimatedText delay={1.7}>
                Even now, I really like you… and I think I always will.
              </AnimatedText>
              <AnimatedText delay={2}>
                Not a single day passes without thoughts of you; your memories come to me every day.
              </AnimatedText>
              <AnimatedText delay={2.3}>
                I&apos;m not rushing anything… I&apos;m just waiting for the right time and the right moment.
              </AnimatedText>
              <AnimatedText delay={2.6}>
                I love you, Rathi. 🤍
              </AnimatedText>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <PrimaryButton onClick={() => setStep(6)}>Continue</PrimaryButton>
                <Button variant="secondary" onClick={() => setStep(99)}>
                  No, I need more time
                </Button>
              </div>
            </Section>
          </motion.div>
        )}

        {step === 6 && (
          <motion.div key="step6" {...fadeInOut}>
            <Section>
              <AnimatedText delay={0.2} size="xl">
                Okay… since you said YES 😌
              </AnimatedText>
              <AnimatedText delay={0.5} size="xl">
                I think I&apos;m allowed to be a little honest now.
              </AnimatedText>
              <div className="pt-2">
                <Button onClick={() => setStep(7)}>Continue</Button>
              </div>
            </Section>
          </motion.div>
        )}

        {step === 7 && (
          <motion.div key="step7" {...fadeInOut}>
            <Section noPadding>
              <FunnyProposal onYes={() => setStep(8)} />
            </Section>
          </motion.div>
        )}

        {step === 8 && (
          <motion.div key="step8" {...fadeInOut}>
            <Section>
              <span className="inline-block text-4xl sm:text-5xl mb-4">😌</span>
              <AnimatedText delay={0.2} size="xl">
                So… this is where the website ends.
              </AnimatedText>
              <AnimatedText delay={0.6} size="lg">
                The rest… I want to say to you in real, face to face ❤️
              </AnimatedText>
            </Section>
          </motion.div>
        )}

        {step === 99 && (
          <motion.div key="step99" {...fadeInOut}>
            <Section>
              <AnimatedText delay={0.2}>
                Thanks for taking time to read this. Take care.
              </AnimatedText>
            </Section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
