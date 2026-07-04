"use client";

import { useState } from "react";

export function ContactForm() {
  const [opened, setOpened] = useState(false);

  return (
    <form
      className="glass grid gap-5 p-7"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const subject = `Hello from ${data.get("name")}`;
        const body = `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`;
        window.location.href = `mailto:hello@astershore.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setOpened(true);
      }}
    >
      <label className="grid gap-2 text-sm text-white/70">
        Name
        <input name="name" className="border border-white/15 bg-white/8 px-4 py-3 text-white outline-none focus:border-shore-coral" required />
      </label>
      <label className="grid gap-2 text-sm text-white/70">
        Email
        <input name="email" className="border border-white/15 bg-white/8 px-4 py-3 text-white outline-none focus:border-shore-coral" required type="email" />
      </label>
      <label className="grid gap-2 text-sm text-white/70">
        Message
        <textarea name="message" className="min-h-36 border border-white/15 bg-white/8 px-4 py-3 text-white outline-none focus:border-shore-coral" required />
      </label>
      <button className="w-fit border border-white/20 bg-white/12 px-6 py-3 text-sm uppercase tracking-[0.18em] transition hover:bg-shore-coral/30" type="submit">
        Send message
      </button>
      {opened && <p className="text-shore-mist">已为你打开邮件应用，内容已填好 —— 点击发送即可。</p>}
    </form>
  );
}
