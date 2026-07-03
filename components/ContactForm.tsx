"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="glass grid gap-5 p-7"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <label className="grid gap-2 text-sm text-white/70">
        Name
        <input className="border border-white/15 bg-white/8 px-4 py-3 text-white outline-none focus:border-shore-coral" required />
      </label>
      <label className="grid gap-2 text-sm text-white/70">
        Email
        <input className="border border-white/15 bg-white/8 px-4 py-3 text-white outline-none focus:border-shore-coral" required type="email" />
      </label>
      <label className="grid gap-2 text-sm text-white/70">
        Message
        <textarea className="min-h-36 border border-white/15 bg-white/8 px-4 py-3 text-white outline-none focus:border-shore-coral" required />
      </label>
      <button className="w-fit border border-white/20 bg-white/12 px-6 py-3 text-sm uppercase tracking-[0.18em] transition hover:bg-shore-coral/30" type="submit">
        Send message
      </button>
      {sent && <p className="text-shore-mist">Thank you — your message has been saved for now.</p>}
    </form>
  );
}
