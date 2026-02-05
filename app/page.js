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
              <Illustration src="/Picture2.jpg" alt="You" />
              <AnimatedText delay={0.2}>Hey…</AnimatedText>
              <AnimatedText delay={0.6}>
                I didn’t make this website to impress you.
              </AnimatedText>
              <AnimatedText delay={1}>
                I made it because some things deserve honesty.
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
              <AnimatedText delay={0.2}>We were together once.</AnimatedText>
              <AnimatedText delay={0.6}>
                Then came distance, breaks, and silence.
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
              <AnimatedText delay={0.2}>Somehow, after everything,</AnimatedText>
              <AnimatedText delay={0.6}>
                we started talking again — Not perfectly.
                <br />
                Not continuously. 
                <br />
                But honestly.
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
                I don’t want confusion anymore.
              </AnimatedText>
              <AnimatedText delay={0.5} size="xl">
                I want clarity — with you.
              </AnimatedText>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <PrimaryButton onClick={() => setStep(5)}>Yes, let’s talk ❤️</PrimaryButton>
                <Button variant="secondary" onClick={() => setStep(99)}>
                  I need time 🤍
                </Button>
              </div>
            </Section>
          </motion.div>
        )}

        {step === 5 && (
          <motion.div key="step5" {...fadeInOut}>
            <Section>
              <AnimatedText delay={0.2} size="xl">
                Okay… since you said YES 😌
              </AnimatedText>
              <div className="pt-2">
                <Button onClick={() => setStep(6)}>Proceed carefully</Button>
              </div>
            </Section>
          </motion.div>
        )}

        {step === 6 && (
          <motion.div key="step6" {...fadeInOut}>
            <Section noPadding>
              <FunnyProposal onYes={() => setStep(7)} />
            </Section>
          </motion.div>
        )}

        {step === 7 && (
          <motion.div key="step7" {...fadeInOut}>
            <Section>
              <span className="inline-block heart-pulse text-4xl sm:text-5xl mb-4">❤️</span>
              <AnimatedText delay={0.2} size="2xl">
                You’re officially stuck with me now 😍
              </AnimatedText>
              <AnimatedText delay={0.6} size="lg">
                The rest of this proposal,
                <br />
                I want to say to you in real life ❤️
              </AnimatedText>
            </Section>
          </motion.div>
        )}

        {step === 99 && (
          <motion.div key="step99" {...fadeInOut}>
            <Section>
              <AnimatedText delay={0.2}>Thank you for reading this till the end.</AnimatedText>
              <AnimatedText delay={0.6}>I’ll be here when you’re ready. 🤍</AnimatedText>
            </Section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
