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
    caption: Desk controls — start, restart, scan, news, plus OG / PHD strategy mode and live system status
  - src: /assets/images/builds/bot-remote/mobile-performance.webp
    caption: Performance stats and open positions with entry, stop, and targets
  - src: /assets/images/builds/bot-remote/mobile-live-news.webp
    caption: Live news feed for the watchlist, pulled from Google, Yahoo, and SEC
  - src: /assets/images/builds/bot-remote/mobile-activity-feed.webp
    caption: Operations center — activity feed of every bot run, entry check, and exit check
  - src: /assets/images/builds/bot-remote/mobile-run-details.webp
    caption: Run details — expand any run to see the bot's full reasoning
  - src: /assets/images/builds/bot-remote/mobile-console.webp
    caption: Live console — tail the bot's log right from your phone
  - src: /assets/images/builds/bot-remote/mobile-ask-the-bot.webp
    caption: Ask the bot — query positions, request analysis, or place a trade in plain English
---

## The idea

Once the trading bot was running on its own, I needed to be able to check on it and steer it without
being at my desk. So I built a phone-friendly control panel.

## What it does

- **Start, stop, and restart** the bot from your phone
- Switch **strategy aggressiveness** on the fly
- **Trigger a market scan** on demand
- **Monitor open positions**, win rate, and P&L in real time
- Read the **activity feed and run details** to see why the bot made each call
- **Ask the bot** questions or request analysis in plain English from the chat tab
- Tail the **live console** and toggle OG / PHD strategy mode and crypto/auto modes

## How it's built

A Streamlit app tuned for mobile, reachable securely from anywhere over **Tailscale** — no ports
exposed to the public internet. It's the remote control that makes a fully autonomous bot something
you can actually trust to leave running.
