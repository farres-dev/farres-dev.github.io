---
layout: build
title: Autonomous Trading Bot
description: Fully autonomous AI trading system. Claude runs the morning scan, selects setups, manages entries and exits across stocks, options, and crypto — completely hands-free during market hours.
tech: [Claude, Python, Robinhood API, TradingView MCP, Streamlit]
year: 2026
status: Active
image: /assets/images/builds/trading-bot/cover.svg
order: 1
screenshots:
  - src: /assets/images/builds/trading-bot/dashboard.webp
    caption: Live execution dashboard — performance, open positions, and Claude's ranked watchlist
  - src: /assets/images/builds/trading-bot/watchlist.webp
    caption: Scored watchlist with entries, stops, and targets, alongside the operations activity feed
  - src: /assets/images/builds/trading-bot/run-details.webp
    caption: Per-run detail — every candidate graded, with the reasoning behind each pass or skip
  - src: /assets/images/builds/trading-bot/ask-the-bot.png
    caption: Ask-the-bot panel for on-demand analysis, position checks, and manual trade execution
---

## The idea

I wanted to see how far I could push an AI agent as an actual trader — not a backtest, not a
signal newsletter, but a system that reads the market and places real trades on its own.

## What it does

- Runs a **morning scan** across a watchlist, grading each setup against a defined strategy
- Picks the strongest setups and **sizes, enters, and manages** them automatically
- Trades **stocks, options, and crypto** from one codebase
- Enforces a **safety check** — every condition in the strategy has to pass before a single order goes through
- Logs every fill to a CSV with price, fees, and net, so the accounting is done by the time the day closes

## How it's built

Claude is the decision layer. It reads the live chart through my TradingView MCP server, applies
the strategy rules, and calls the broker API to execute. A Streamlit dashboard sits on top for
monitoring, and the whole thing can run on a schedule in the cloud so it doesn't need my laptop open.

The interesting part was the guardrails — getting an autonomous agent to be *conservative* by
default, skip the day when nothing qualifies, and never override its own risk checks.
