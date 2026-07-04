"use client";

import { useState } from "react";
import { posts } from "@/lib/content";

const categories = ["All", ...Array.from(new Set(posts.map((post) => post.category)))];

export function JournalList() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? posts : posts.filter((post) => post.category === active);

  return (
    <>
      <section className="bg-shore-ink px-5 pt-14">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          {categories.map((category) => (
            <button
              className={`border px-4 py-2 text-sm transition ${
                active === category
                  ? "border-shore-coral/60 bg-shore-coral/20 text-white"
                  : "border-white/15 bg-white/8 text-white/72 hover:bg-white/14"
              }`}
              key={category}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>
      <section className="bg-shore-ink px-5 pb-20 pt-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {visible.map((post) => (
              <article className="quiet-card overflow-hidden border border-white/12 bg-[#0b1736]/72 shadow-[0_20px_80px_rgba(0,0,0,.24)] backdrop-blur-xl" key={post.title}>
                <div className={`${post.visual} h-44`} />
                <div className="p-6">
                  <p className="inline-block bg-[#9382f5]/75 px-3 py-1 text-xs text-white">{post.category}</p>
                  <h3 className="mt-5 font-serif text-2xl">{post.title}</h3>
                  <p className="mt-3 text-white/68">{post.excerpt}</p>
                  <p className="mt-6 text-sm text-white/48">{post.date} · 全文整理中</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
