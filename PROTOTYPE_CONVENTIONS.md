# Prototype Conventions & Reference

This document captures key decisions and patterns from the FDE Pulse prototype. Reference it when updating prototypes or starting new conversations.

---

## Scenario Overview

| Tab | Component | Scenario |
|-----|-----------|----------|
| 1st | Scenario2Prototype | Weekly Check-in (agent-initiated, Shark Ninja) |
| 2nd | Scenario1Prototype | Project Startup (user-initiated, voice agent) |
| 3rd | Scenario3LeadershipInsights | Leadership Insights |

---

## Weekly Check-in (Scenario 2)

**Flow:** Agent initiates → User responds → Guided prompts → Summary → Post to Canvas

- **Agent speaks first:** "It's Friday! Time for your Shark Ninja weekly update. Quick reminder: Last week you were blocked on Voice integration—were you able to find a resolution? How's progress this week?"
- **Context:** Shark Ninja, Saks 5th Avenue (not Team Alpha) for similar solutions
- **Executive presentation:** Agent asks "You mentioned last week you had an executive presentation this week—how did that go?" during blockers/features step
- **No sponsor/agent count question:** Pre-filled from last update; agent says "I've pulled in your sponsor and agent count from the last update. Any changes needed?"
- **Canvas title:** "Shark Ninja - Feb 6, 2025" (or current date)
- **Added to Canvas message:** "Added to Canvas: Shark Ninja"

---

## Project Startup (Scenario 1)

**Flow:** User initiates → Agent (delivered, in-flight, workshop prep) → Guided prompts → Summary → Post to Canvas

- **User message:** "I'm starting a new project on agent voice capabilities. We had our kickoff this week and are planning a workshop for next week."
- **Agent first response:** Delivered (green), In-flight (amber), Workshop preparation (blue links), "What progress have you made this week?"
- **Team names:** Blue Cross and Blue Shield, Disney, Zing Health, Shark Ninja (not Team 1, 2, 3, 4)
- **Workshop preparation links:** Must appear on separate lines:
  - Workshop planning guide
  - Voice agent kickoff checklist
  - Discovery template (on its own line)
- **Guided prompts:** Accomplishments → Blockers + features → Sponsor + agent count → FDE summary
- **Shark Ninja resolution:** When user mentions Voice integration blocker, agent references Shark Ninja's Saks 5th Avenue solution from Weekly Check-in (timeout settings, firewall rules)

---

## Common Voice Blockers and Resolutions

Reference content the agent can surface when users mention voice-related blockers:

- **Voice integration timeout** → Resolution: Saks 5th Avenue approach (timeout settings, firewall rules); Shark Ninja applied this successfully in their Weekly Check-in
- **Data Cloud connector configuration** → Common blocker during voice agent setup
- Additional blockers may include latency/quality issues, authentication problems, or API rate limits

This section serves as both documentation and a source of truth for prototype content when the agent suggests resolutions.

---

## Canvas

- **Trigger:** Canvas button in channel header (not a permanent sidebar)
- **Behavior:** Button toggles overlay; no right sidebar by default
- **Overlay:** Slides in from right when button clicked; click outside or X to close
- **Content:** Include previous updates when relevant (e.g., Shark Ninja canvas: Jan 30, Jan 23, then current week)
- **Title format:** "[Account/Project] - [Date]" e.g., "Shark Ninja - Feb 6, 2025"

---

## UX Patterns

- **Thinking delay:** 1.2s (`THINKING_DELAY_MS`) before each agent response
- **Scroll:** Chat scrolls to bottom when new messages appear; page does not scroll
- **Input bar:** Pre-filled with next user message per step; user clicks send to advance
- **Send disabled:** While agent is "thinking"

---

## File References

- `src/components/SlackPrototype.tsx` - Canvas button, overlay, main layout
- `src/components/SlackCanvasPanel.tsx` - Canvas content, expand/collapse (when used as sidebar), close button (when overlay)
- `src/components/Scenario1Prototype.tsx` - Project Startup
- `src/components/Scenario2Prototype.tsx` - Weekly Check-in
- `src/components/Prototype.tsx` - Tab order, default scenario

---

*Last updated: Feb 6, 2025*
