# CLAUDE.md — chat-widget

## What this is
A Next.js app (App Router) called `chat-widget`. **Its purpose is not recorded anywhere
on disk** — no README, no package description. Derive intent from `app/` and `docs/`
before assuming, and write the answer here once it is known.

## Chat answers, hard rules

<!-- SYNCED COPY: chat-brevity rules. Source of truth is
     `~/.claude/CLAUDE.md` -> "Communication and writing". Change it THERE and
     re-sync down; never edit this block in place. It is duplicated into every
     repo at Danny's explicit instruction (2026-08-13), overriding the global
     file's own "do not copy principles down into project files" rule, because
     he wanted them visible in each repo rather than only in the layer above. -->

- Short. Shortest answer that is still true.
- Bullets, not paragraphs.
- No preamble, no recap, no restating the question.
- Say what you did + what it means. Skip the how unless asked.
- Long output only when asked for it, or when it's the deliverable (code, docs, a file).
- Docs written FOR the repo keep the repo's depth. This rule is about chat.

The failure mode to watch: narrating the work at the length the work took. A
twenty-tool-call task still gets a five-bullet answer. "Show your work" is not a
licence to write an essay, and it never outranks the rules above.

## Deliverables show only the current state

<!-- SYNCED COPY: deliverables-current-state rule. Source of truth is
     `~/.claude/CLAUDE.md` -> "Communication and writing". Change it THERE and
     re-sync down; never edit this block in place. -->

Only the NOW matters; the past lives in git and chat, never in the document.

- Artifacts, md files, docs: current state only. No superseded sections, no "Part II revises Part I", no strike-throughs, no evolution notes, no "we previously thought".
- When updating a deliverable, rewrite it as if the current state were always true; delete what it replaces in the same edit.
- Decision logs and changelogs that exist BY DESIGN (for example `DECISIONS.md`) are the exception; everything else carries no history.
