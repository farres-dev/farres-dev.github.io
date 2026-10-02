---
layout: build
title: Resume Generator
description: A resume-generation system built with Claude and Node. Each target role gets its own script that emits a clean, ATS-friendly Word document from a shared template — consistent formatting, tailored content, generated on demand.
tech: [Claude, Node.js, docx]
year: 2026
status: Active
image: /assets/images/builds/resume-generator/cover.svg
order: 5
screenshots:
  - src: /assets/images/builds/resume-generator/form-top.png
    caption: The generator UI — header, summary, and experience fields
  - src: /assets/images/builds/resume-generator/form-bottom.png
    caption: Projects, skills, and education, with one-click .docx generation
---

## The idea

Tailoring a resume to every role by hand is slow, and the formatting drifts every time you touch it.
I built a system where Claude writes the content for a specific role and a script renders it into a
pixel-consistent Word document.

## What it does

- One **script per target role**, each producing a formatted `.docx`
- A **shared template** so every resume has identical margins, fonts, and section styling
- Content **tailored to the job** — the summary, bullets, and skills reshaped for each posting
- **ATS-friendly** output — clean structure, real text, no fragile layout tricks

## How it's built

Node.js with the `docx` library handles rendering; Claude handles the writing and tailoring. Because
the layout lives in code, I can spin up a new role-specific resume in seconds and know it'll look
exactly like the others.

Used it to generate dozens of role-specific resumes in a single sitting — the whole point of
vibe-coding: build the tool once, then let it do the repetitive work.
