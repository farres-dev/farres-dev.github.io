---
layout: build
title: CyberHand Robotic Arm
description: A 5-DOF 3D-printed robotic hand and arm, designed from scratch with Claude. Reverse-engineered a base model, then built a slim human-style hand with tendon-driven fingers, a rotating wrist, forearm, elbow, and a desk stand — all in parametric OpenSCAD. Runs on Arduino + PCA9685 with a Python control app for live calibration and gestures.
tech: [Claude, OpenSCAD, Arduino, PCA9685, Python]
year: 2026
status: Active
image: /assets/images/builds/cyberhand/cover.svg
order: 2
---

## The idea

I wanted a real robotic hand and arm on my desk — designed, not bought — and I wanted to design
it entirely through conversation with Claude, in parametric CAD, with no formal mechanical
engineering background.

## What it is

A **5-DOF arm** — base yaw, shoulder, elbow, wrist roll, and gripper — topped with a slim,
human-style hand with **tendon-driven fingers**. Every part is 3D-printed and the whole model is
parametric, so changing a servo or a battery resizes the parts around it.

## How it came together

- **Reverse-engineered** a base hand model from a 3MF to learn its joints and flexures
- Relocated the battery into the **wrist** and designed a **bayonet coupling** so a future arm could lock on
- Built a **printed ball-race** so the wrist and base rotate on airsoft BBs instead of expensive bearings
- Sized every joint against **real servo torque budgets** — and caught the hard ones (a 20 kg-cm servo literally doesn't fit at the wrist)
- Redesigned the palm several times until it was slim and organic instead of a bulky servo box

## The electronics

Arduino driving a **PCA9685** servo controller, with a **Python control app** (tkinter + pyserial)
for wiggling individual joints, setting safe limits, naming channels, and saving calibration to
EEPROM. Gestures and live sliders built in.

The lesson that kept repeating: the CAD is the easy part — the real constraints are torque, wiring
clearance, and the fact that coplanar cuts break the mesh.
