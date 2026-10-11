---
layout: build
title: Bot Remote
description: Mobile-first control panel for the trading bot, accessible anywhere via Tailscale. Start, stop, or restart the bot, switch strategy aggressiveness, trigger market scans, and monitor positions from your phone.
tech: [Python, Streamlit, Tailscale]
year: 2026
status: Active
image: /assets/images/builds/bot-remote/cover.svg
order: 4
shots_style: phone
screenshots:
  - src: /assets/images/builds/bot-remote/mobile-desk-controls.webp
    caption: Desk controls — system status, Start / Restart / Scan / News, effort level, Claude session meter, and OG / PHD strategy mode
  - src: /assets/images/builds/bot-remote/mobile-performance.webp
    caption: Performance — win rate, average win and loss, profit factor, open P&L, and the open positions table with entry and stop
  - src: /assets/images/builds/bot-remote/mobile-live-news.webp
    caption: Live news for the watchlist tickers, from Google, Yahoo, and SEC
  - src: /assets/images/builds/bot-remote/mobile-activity-feed.webp
    caption: Operations center, activity feed — each bot run and exit check, timestamped
  - src: /assets/images/builds/bot-remote/mobile-run-details.webp
    caption: Run details — individual bot runs listed newest first, each expandable
  - src: /assets/images/builds/bot-remote/mobile-console.webp
    caption: Console — the bot's live log, with a 15 / 30 / 60 line view
  - src: /assets/images/builds/bot-remote/mobile-ask-the-bot.webp
    caption: Ask the bot — a chat box for questions about positions, trades, and analysis
---

## The idea

Once the trading bot was running on its own, I needed to be able to check on it and steer it without
being at my desk. So I built a phone-friendly control panel.

## What it does

- **Start, stop, and restart** the bot from your phone
- Switch **strategy aggressiveness** on the fly
- **Trigger a market scan** on demand
- **Monitor open positions**, win rate, and P&L
- Read the **activity feed and run details** for each run the bot makes
- **Ask the bot** about positions or request analysis from the chat tab
- Tail the **live console** and switch OG / PHD strategy mode

## How it's built

A Streamlit app tuned for mobile, reachable securely from anywhere over **Tailscale** — no ports
exposed to the public internet. It's the remote control that makes a fully autonomous bot something
you can actually trust to leave running.
