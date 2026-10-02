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
  - src: /assets/images/builds/bot-remote/mobile-controls.webp
    caption: Controls — start, stop, restart, run a scan, and switch strategy from your phone
  - src: /assets/images/builds/bot-remote/mobile-positions.webp
    caption: Open positions with entry, stop, and target
  - src: /assets/images/builds/bot-remote/mobile-picks.webp
    caption: Today's picks — bought positions plus the live watchlist
  - src: /assets/images/builds/bot-remote/mobile-decision.webp
    caption: Last decision — the bot's full entry-check reasoning
---

## The idea

Once the trading bot was running on its own, I needed to be able to check on it and steer it without
being at my desk. So I built a phone-friendly control panel.

## What it does

- **Start, stop, and restart** the bot from your phone
- Switch **strategy aggressiveness** on the fly
- **Trigger a market scan** on demand
- **Monitor open positions** and status in real time

## How it's built

A Streamlit app tuned for mobile, reachable securely from anywhere over **Tailscale** — no ports
exposed to the public internet. It's the remote control that makes a fully autonomous bot something
you can actually trust to leave running.
