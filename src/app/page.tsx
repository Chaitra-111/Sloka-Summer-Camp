"use client";

import Image from "next/image";
import {
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Mail,
  MessageCircle,
  Phone,
  QrCode,
  Sparkles,
  UploadCloud,
  UsersRound,
} from "lucide-react";
import { useMemo, useState } from "react";

const whatsappGroupLink = "https://chat.whatsapp.com/YourSummerSlokaCamp";
const contactPhone = "7995531535";
const contactEmail = "csarts1535@gmail.com";

const classHighlights = [
  "One month online camp with 4 evening classes every week",
  "Simple slokas taught with meaning, pronunciation, and daily use",
  "Friendly teaching style for kids from 5 to 15 years",
  "Small practice activities that help children speak with confidence",
];

const kidFriendlyContent = [
  {
    title: "Learn with stories",
    copy: "Children understand each sloka through short stories and simple examples.",
  },
  {
    title: "Speak clearly",
    copy: "Every class includes slow chanting, repeat practice, and pronunciation support.",
  },
  {
    title: "Enjoy the routine",
    copy: "Kids get actions, memory games, and small recitation turns to keep learning active.",
  },
  {
    title: "Feel proud",
    copy: "Parents can see children slowly become comfortable saying slokas at home.",
  },
];

const mentors = [
  {
    name: "Chaitra Sri Polana",
    role: "Sloka camp mentor",
    image: "/images/mentor-chaitra.jpeg",
    alt: "Chaitra Sri Polana, mentor for Sloka Summer Camp",
    copy: "Guides children with simple English explanations, calm practice, and friendly correction.",
  },
  {
    name: "Camp Mentor",
    role: "Student support and practice guide",
    image: "/images/mentor-medical.jpeg",
    alt: "Mentor for Sloka Summer Camp",
    copy: "Supports kids with confidence, discipline, and steady practice during the camp.",
  },
];

export default function Home() {
  const [receiptName, setReceiptName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const canJoin = receiptName.length > 0;
  const fileLabel = useMemo(
    () => (receiptName ? receiptName : "Upload payment screenshot"),
    [receiptName],
  );

  return (
    <main className="min-h-screen bg-[#fffaf1] text-[#1f2933]">
      <section className="relative min-h-[92vh] overflow-hidden bg-[#173f3a] text-white">
        <Image
          src="/images/classroom-writing.jpg"
          alt="Children learning with a teacher in a classroom"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,63,58,0.95)_0%,rgba(23,63,58,0.75)_52%,rgba(23,63,58,0.28)_100%)]" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-between px-5 py-6 sm:px-8 lg:px-10">
          <nav className="flex items-center justify-between gap-4">
            <a href="#" className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-[#f8b84e] text-xl font-black text-[#173f3a]">
                S
              </span>
              <span className="text-base font-semibold sm:text-lg">
                Sloka Summer Camp
              </span>
            </a>
            <a
              href="#register"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#173f3a] shadow-lg shadow-black/10 transition hover:bg-[#fff3cf]"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Register
            </a>
          </nav>

          <div className="grid gap-10 pb-10 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/14 px-4 py-2 text-sm font-semibold backdrop-blur">
                <Sparkles size={17} aria-hidden="true" />
                1 month online evening classes for kids
              </p>
              <h1 className="max-w-4xl text-5xl font-black leading-[1.03] tracking-normal sm:text-6xl lg:text-7xl">
                Simple Sloka Classes Kids Will Enjoy
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88 sm:text-xl">
                A warm online camp where children learn slokas in easy English,
                practise pronunciation, understand the meaning, and build a calm
                daily habit.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#register"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f8b84e] px-5 py-3 text-sm font-bold text-[#173f3a] shadow-xl shadow-black/20 transition hover:bg-[#ffd278]"
                >
                  <UploadCloud size={18} aria-hidden="true" />
                  Pay & Join Batch
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/35 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/12"
                >
                  <Phone size={18} aria-hidden="true" />
                  Contact
                </a>
              </div>
            </div>

            <div className="grid gap-3 rounded-2xl border border-white/18 bg-white/12 p-4 backdrop-blur-md sm:grid-cols-3 lg:mb-2">
              <Stat icon={<Clock />} title="Time" value="4:30-6 PM" />
              <Stat icon={<CalendarDays />} title="Duration" value="1 Month" />
              <Stat icon={<UsersRound />} title="Age" value="5-15 yrs" />
            </div>
          </div>
        </div>
      </section>

      <section id="details" className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#c06628]">
              About the classes
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#173f3a] sm:text-4xl">
              A gentle way for children to learn culture with confidence.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#56616f]">
              The classes are made for beginners. Kids do not need any previous
              Sanskrit knowledge. We teach slowly, explain clearly, and help
              every child practise without pressure.
            </p>
            <div className="mt-8 grid gap-3">
              {classHighlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-1 shrink-0 text-[#1f9d8a]"
                    size={20}
                    aria-hidden="true"
                  />
                  <span className="text-base leading-7 text-[#2f3b47]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <ImagePanel
              src="/images/guided-learning.jpg"
              alt="Teacher guiding kids in a classroom activity"
              label="Friendly teaching"
            />
            <ImagePanel
              src="/images/mala-book.jpg"
              alt="Prayer beads on an open book"
              label="Simple sloka practice"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#e9f7f2] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0d7f75]">
              Why kids like it
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#173f3a] sm:text-4xl">
              Learning feels light, active, and happy.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#56616f]">
              We focus on simple content that children can remember and use.
              Parents get a peaceful learning activity, and kids get a class
              that feels friendly instead of difficult.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kidFriendlyContent.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[#b9ded5] bg-white p-5 shadow-sm"
              >
                <BookOpenCheck
                  className="text-[#0d7f75]"
                  size={24}
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-lg font-black leading-6 text-[#173f3a]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#56616f]">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:items-center">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/kids-classroom.jpg"
              alt="Kids listening in a bright classroom"
              width={1200}
              height={800}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#c06628]">
              For parents
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#173f3a] sm:text-4xl">
              A useful evening class that builds discipline and joy.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#56616f]">
              Classes are held 4 days a week from 4:30 PM to 6:00 PM. The
              monthly fee is only Rs. 499, making it easy for families to give
              children a meaningful summer learning experience.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <MiniFeature
                icon={<HeartHandshake />}
                title="Parent-friendly"
                copy="Easy updates, clear instructions, and a simple payment process."
              />
              <MiniFeature
                icon={<Sparkles />}
                title="Kid-friendly"
                copy="Stories, actions, chanting practice, and gentle correction."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf1] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#c06628]">
              Mentors
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#173f3a] sm:text-4xl">
              Caring mentors for steady practice.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {mentors.map((mentor) => (
              <article
                key={mentor.image}
                className="grid gap-5 rounded-lg border border-[#ecd5a1] bg-white p-5 shadow-sm sm:grid-cols-[180px_1fr] sm:items-center"
              >
                <Image
                  src={mentor.image}
                  alt={mentor.alt}
                  width={360}
                  height={420}
                  className="aspect-[4/5] w-full rounded-md object-cover object-top"
                />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0d7f75]">
                    {mentor.role}
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-[#173f3a]">
                    {mentor.name}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#56616f]">
                    {mentor.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#e9f7f2] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div className="rounded-lg border border-[#b9ded5] bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0d7f75]">
              Contact for doubts
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#173f3a]">
              Talk to us before joining.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#56616f]">
              For class doubts, batch details, payment questions, or age group
              questions, parents can contact us directly.
            </p>
            <div className="mt-6 grid gap-3">
              <a
                href={`tel:${contactPhone}`}
                className="inline-flex items-center gap-3 rounded-md border border-[#d6e0e8] px-4 py-3 font-bold text-[#173f3a] transition hover:border-[#0d7f75]"
              >
                <Phone size={20} aria-hidden="true" />
                {contactPhone}
              </a>
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-3 rounded-md border border-[#d6e0e8] px-4 py-3 font-bold text-[#173f3a] transition hover:border-[#0d7f75]"
              >
                <Mail size={20} aria-hidden="true" />
                {contactEmail}
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-[#e1b862] bg-[#fff3cf] p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#c06628]">
              Doubts message box
            </p>
            <label className="mt-4 block">
              <span className="text-sm font-bold text-[#173f3a]">
                Write your question
              </span>
              <textarea
                name="doubtMessage"
                rows={7}
                placeholder="Example: My child is 6 years old. Can they join? What days are the classes?"
                className="mt-2 w-full rounded-md border border-[#d3aa58] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0d7f75] focus:ring-4 focus:ring-[#0d7f75]/15"
              />
            </label>
            <p className="mt-3 text-sm leading-6 text-[#6a7480]">
              This box is only for writing doubts. Use the phone or email above
              to send the message.
            </p>
          </div>
        </div>
      </section>

      <section id="register" className="bg-[#fff3cf] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#c06628]">
              Payment details
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#173f3a] sm:text-4xl">
              Pay Rs. 499, upload proof, then join WhatsApp.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#56616f]">
              Scan the code or use the payment details below. The WhatsApp group
              button unlocks only after the transaction screenshot is uploaded.
            </p>

            <div className="mt-8 rounded-lg border border-[#e4b85f] bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <Image
                  src="/payment-qr.svg"
                  alt="Payment QR scanner for Sloka Summer Camp"
                  width={190}
                  height={190}
                  className="rounded-md border border-[#d9e1e8] bg-white"
                />
                <div>
                  <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#0d7f75]">
                    <QrCode size={17} aria-hidden="true" />
                    Scanner
                  </p>
                  <dl className="mt-4 grid gap-3 text-sm text-[#2f3b47]">
                    <div>
                      <dt className="font-bold">Amount</dt>
                      <dd>Rs. 499 for 1 month</dd>
                    </div>
                    <div>
                      <dt className="font-bold">Payee name</dt>
                      <dd>Chaitra Sri Polana</dd>
                    </div>
                    <div>
                      <dt className="font-bold">Contact</dt>
                      <dd>{contactPhone}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <form
            className="rounded-lg border border-[#e1b862] bg-white p-5 shadow-xl shadow-[#c47a2d]/10 sm:p-7"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-[#0d7f75]">
              Registration form
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Student name" name="student" required />
              <Field label="Parent name" name="parent" required />
              <Field
                label="Phone number"
                name="phone"
                type="tel"
                required
                placeholder="7995531535"
              />
              <Field
                label="Child age"
                name="age"
                type="number"
                min="5"
                max="15"
              />
            </div>

            <label className="mt-4 block rounded-lg border border-dashed border-[#0d7f75] bg-[#f1fbf8] p-4">
              <span className="flex items-center gap-3 text-sm font-bold text-[#173f3a]">
                <UploadCloud size={21} aria-hidden="true" />
                {fileLabel}
              </span>
              <input
                name="receipt"
                type="file"
                accept="image/*,.pdf"
                required
                className="mt-3 w-full text-sm text-[#56616f] file:mr-4 file:rounded-full file:border-0 file:bg-[#173f3a] file:px-4 file:py-2 file:text-sm file:font-bold file:text-white hover:file:bg-[#0d7f75]"
                onChange={(event) =>
                  setReceiptName(event.target.files?.[0]?.name ?? "")
                }
              />
            </label>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#173f3a] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0d7f75]"
              >
                <Phone size={18} aria-hidden="true" />
                Submit Registration
              </button>
              <a
                href={canJoin ? whatsappGroupLink : undefined}
                aria-disabled={!canJoin}
                className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${
                  canJoin
                    ? "bg-[#f8b84e] text-[#173f3a] hover:bg-[#ffd278]"
                    : "pointer-events-none bg-[#d8dee4] text-[#6a7480]"
                }`}
              >
                <MessageCircle size={18} aria-hidden="true" />
                Join WhatsApp Group
              </a>
            </div>

            {submitted && (
              <p className="mt-4 rounded-md bg-[#e9f7f2] px-4 py-3 text-sm font-semibold text-[#173f3a]">
                Registration noted. Use the WhatsApp button now that payment
                proof is uploaded.
              </p>
            )}
            {!canJoin && (
              <p className="mt-4 text-sm leading-6 text-[#6a7480]">
                The WhatsApp group link stays locked until a payment screenshot
                is uploaded.
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="bg-[#173f3a] px-5 py-8 text-sm text-white/72 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>Sloka Summer Camp. Online evening classes for ages 5 to 15.</p>
          <p>
            Contact {contactPhone} or {contactEmail} for doubts before joining.
          </p>
        </div>
      </footer>
    </main>
  );
}

function Stat({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-lg bg-white/14 p-4">
      <div className="text-[#f8b84e] [&_svg]:size-5">{icon}</div>
      <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-white/65">
        {title}
      </p>
      <p className="mt-1 text-xl font-black">{value}</p>
    </div>
  );
}

function ImagePanel({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <figure className="overflow-hidden rounded-lg bg-[#173f3a]">
      <Image
        src={src}
        alt={alt}
        width={720}
        height={880}
        className="aspect-[4/5] w-full object-cover"
      />
      <figcaption className="px-4 py-3 text-sm font-bold text-white">
        {label}
      </figcaption>
    </figure>
  );
}

function MiniFeature({
  icon,
  title,
  copy,
}: {
  icon: React.ReactNode;
  title: string;
  copy: string;
}) {
  return (
    <div className="rounded-lg border border-[#d6e0e8] p-4">
      <div className="text-[#0d7f75] [&_svg]:size-6">{icon}</div>
      <h3 className="mt-3 text-lg font-black text-[#173f3a]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#56616f]">{copy}</p>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  min,
  max,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  min?: string;
  max?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-[#173f3a]">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        min={min}
        max={max}
        className="mt-2 h-12 w-full rounded-md border border-[#ccd6dd] px-4 text-sm outline-none transition focus:border-[#0d7f75] focus:ring-4 focus:ring-[#0d7f75]/15"
      />
    </label>
  );
}
