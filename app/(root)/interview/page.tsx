import Agent from "@/components/Agent";
import React from "react";

export default function page() {
  return (
    <>
      <h3>Interview Generation</h3>
      <Agent
        userName="You"
        userId="1"
        interviewId="1"
        feedbackId="1"
        type="generate"
        questions={["What is React?", "What is Next.js?"]}
      />
    </>
  );
}
