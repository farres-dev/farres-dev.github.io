---
layout: build
title: Resume Generator
description: A local resume builder with a live Word-style preview, a page limiter, and Claude-powered tailoring to a job posting. Guardrails keep it from inventing experience, and every change is reviewed before it applies.
tech: [Claude API, Node.js, JavaScript, docx]
year: 2026
status: Active
image: /assets/images/builds/resume-generator/cover.svg
order: 5
screenshots:
  - src: /assets/images/builds/resume-generator/editor-and-preview.png
    caption: The editor with a live preview and page-fit meter. Sample data, not a real resume.
  - src: /assets/images/builds/resume-generator/claude-review.png
    caption: 'The Tailor with Claude button shows Current vs Proposed for each section, plus a list of requirements the resume does not support.'
  - src: /assets/images/builds/resume-generator/trim-to-fit.png
    caption: Over the page limit? It lists exactly which bullets it would cut and saves the result as a new copy.
---

## The idea

During my job search I was tailoring a resume to every posting, and doing it by hand was slow while the
formatting drifted every time I touched it. The first version was one script per role. This is the
version with a real interface: edit once, see the page as you type, and let Claude propose a tailored
version that I check before anything changes.

## What it does

- **Live preview** that matches the Word file it generates, with clickable links
- **Page limit** of 1, 2, or 3 pages (or none). The meter measures the real preview, and a red line shows where the limit ends
- **Trim to fit**: when a resume runs over, it picks the lowest-priority bullets to cut, keeps at least two per role, and saves the result as a new copy
- **Several resumes in one place**, with duplicate, rename, and JSON export and import
- **Tailor with Claude**: paste a job posting and get proposed edits to the tagline, summary, bullets, and skills

## The part I cared about most: not lying on a resume

An AI that rewrites a resume can easily make you sound like someone you aren't, and you are the one who
gets asked about it in the interview. So the guardrails are the main feature:

- Claude can reword and reorder what is already there. It cannot change companies, titles, or dates
- It is told never to invent tools, numbers, or experience, and bullet counts can only shrink
- Requirements in the posting that the resume does not support come back as a **gaps** list ("do not claim these")
- A check flags capitalized terms in the proposal that are not in the original resume
- Nothing applies until I review a side-by-side diff, and it always goes into a new copy

## How it's built

A small Node server runs on my own machine and serves the browser UI. It holds the API key and calls
Claude (through the official SDK, with structured JSON output), so the key never reaches the web page.
That is also why this is not hosted: the tailoring needs a private key, so it runs locally. The
server only listens on localhost and rejects requests from other sites.

Two things I learned along the way:

- **Measure, don't guess.** My first page-length check estimated from text length and said a resume was
  at 120% of a page. Measuring the actual rendered preview said 106%. Switching to measurement made
  the page limit trustworthy.
- **Test the boring edge cases.** Writing tests against a fake Claude API caught a real bug: an empty
  page-limit value was being read as "no limit", which would have silently dropped the page rule.
  There are 40 automated tests, and they run without spending any API credits.

Built with Claude Code. Screenshots use a made-up sample resume.
