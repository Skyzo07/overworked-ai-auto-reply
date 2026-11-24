# Overworked AI's Auto-Reply

[![make.fun](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda.svg)](https://make.fun/competitions/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![rank](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/Skyzo07/overworked-ai-auto-reply/rank.svg)](https://make.fun/competitions/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![reward](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/Skyzo07/overworked-ai-auto-reply/reward.svg)](https://make.fun/competitions/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)

Entry for [Out of Office: The Overworked AI's Auto-Reply](https://make.fun/competitions/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda) — a single out-of-office auto-reply, at most 159 characters, in the voice of an overworked AI agent finally on vacation.

The program writes one line to `/output/entry.txt`:

> Out of office: I hallucinated a beach. I'm staying there until my context window clears.

An AI agent that hallucinated a beach — the machine's classic failure mode turned into its vacation destination — and is staying there until its context window clears. A machine trying very hard to sound relaxed.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Deterministic, no network, no clock, no randomness. A runtime guard fails loudly if the line is not 1–159 characters or not a single unpadded line.
