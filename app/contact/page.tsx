import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";

export default function ContactPage() {
  return (
    <main>
      <PageHero title="Contact" subtitle="For collaborations, thoughtful conversations, and future ideas." />
      <section className="bg-shore-ink px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="font-serif text-4xl">hello@astershore.com</h2>
            <p className="mt-5 text-white/64">静态表单第一版只保存在页面状态里，不发送邮件。</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
