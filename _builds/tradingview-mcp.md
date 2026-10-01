---
layout: build
title: TradingView MCP Server
description: Model Context Protocol server that gives Claude direct control over a live TradingView Desktop chart. Claude reads indicators, switches symbols and timeframes, and grades setups in real time.
tech: [MCP, Node.js, Chrome CDP, TradingView]
year: 2025
status: Active
image: /assets/images/builds/tradingview-mcp/cover.svg
order: 3
---

## The idea

LLMs are great at reasoning about a chart — if they can actually *see* it. I built an MCP server
that plugs Claude directly into a live TradingView Desktop chart so it can read and drive the chart
like a person would.

## What it does

- **Reads the chart** — symbol, timeframe, OHLCV, and the values of every visible indicator
- **Drives the chart** — switches symbols and timeframes, adds and configures indicators, scrolls to dates
- **Reads custom Pine output** — lines, labels, tables, and zones drawn by custom indicators
- Lets Claude **grade a setup in real time** against a strategy, which is what the trading bot is built on top of

## How it's built

A Node.js MCP server that talks to TradingView Desktop over the Chrome DevTools Protocol. It exposes
a toolset Claude can call — the same server now powers the autonomous trading bot's decision layer.

This was the foundation piece: once Claude could reliably see and control a real chart, everything
else — scanning, grading, executing — became possible.
