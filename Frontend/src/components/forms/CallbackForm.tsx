"use client";

import { useState, useTransition, useRef, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { CallbackFormData, ApiResponse } from "@/lib/types";
import { TIME_OPTIONS } from "@/lib/types";

export default function CallbackForm() {
  const honeypotRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [timePreference, setTimePreference] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [isPending, startTransition] = useTransition();

  function validate(): boolean {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!phone.trim() || phone.trim().length < 7) errs.phone = "Valid phone number is required";
    if (!timePreference) errs.timePreference = "Please select a time preference";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (honeypotRef.current?.value) return;
    if (!validate()) return;

    const payload: CallbackFormData = {
      name: name.trim(),
      phone: phone.trim(),
      timePreference: timePreference as CallbackFormData["timePreference"],
      description: description.trim() || undefined,
    };

    startTransition(async () => {
      try {
        const res = await fetch("/api/callbacks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data: ApiResponse = await res.json();
        if (data.success) {
          toast.success(data.message);
          setName(""); setPhone(""); setTimePreference(""); setDescription("");
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

      <div className="space-y-2">
        <Label htmlFor="cb-name">Full Name *</Label>
        <Input id="cb-name" value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" />
        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="cb-phone">Phone Number *</Label>
        <Input id="cb-phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+260 123 456 789" />
        {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="cb-time">Preferred Call Time *</Label>
        <Select value={timePreference} onValueChange={(v) => setTimePreference(v ?? "")}>
          <SelectTrigger id="cb-time">
            <SelectValue placeholder="When should we call?" />
          </SelectTrigger>
          <SelectContent>
            {TIME_OPTIONS.map(opt => (
              <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.timePreference && <p className="text-sm text-red-500">{errors.timePreference}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="cb-description">Notes</Label>
        <Textarea
          id="cb-description"
          value={description}
          onChange={e => e.target.value.length <= 200 && setDescription(e.target.value)}
          placeholder="Brief reason for the call (optional, max 200 chars)..."
          rows={3}
        />
        <p className="text-xs text-gray-500 text-right">{description.length}/200</p>
      </div>

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Submitting...
          </span>
        ) : (
          "Request a Callback"
        )}
      </Button>
    </form>
  );
}
