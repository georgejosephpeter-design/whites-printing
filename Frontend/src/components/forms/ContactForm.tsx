"use client";

import { useState, useTransition, useRef, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ContactFormData, ApiResponse } from "@/lib/types";

export default function ContactForm() {
  const honeypotRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [isPending, startTransition] = useTransition();

  function validate(): boolean {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Invalid email format";
    if (!subject.trim()) errs.subject = "Subject is required";
    if (!message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (honeypotRef.current?.value) return;
    if (!validate()) return;

    const payload: ContactFormData = {
      name: name.trim(),
      phone: phone.trim() || undefined,
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    };

    startTransition(async () => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data: ApiResponse = await res.json();
        if (data.success) {
          toast.success(data.message);
          setName(""); setPhone(""); setEmail(""); setSubject(""); setMessage("");
          setErrors({});
        } else {
          toast.error(data.message);
          if (data.errors) {
            const fieldErrors: Record<string, string> = {};
            for (const [key, msgs] of Object.entries(data.errors)) {
              fieldErrors[key] = msgs[0];
            }
            setErrors(fieldErrors);
          }
        }
      } catch {
        toast.error("Something went wrong. Please try again.");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" ref={honeypotRef} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="ct-name">Full Name *</Label>
          <Input id="ct-name" value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="ct-phone">Phone</Label>
          <Input id="ct-phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+260 123 456 789" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="ct-email">Email *</Label>
        <Input id="ct-email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@example.com" />
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="ct-subject">Subject *</Label>
        <Input id="ct-subject" value={subject} onChange={e => setSubject(e.target.value)} placeholder="How can we help?" />
        {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="ct-message">Message *</Label>
        <Textarea id="ct-message" value={message} onChange={e => setMessage(e.target.value)} placeholder="Tell us more about your inquiry..." rows={5} />
        {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
      </div>

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
