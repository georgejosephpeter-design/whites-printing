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
import FileUpload from "./FileUpload";
import type { QuoteFormData, UploadedFile, ApiResponse } from "@/lib/types";
import { SERVICE_OPTIONS } from "@/lib/types";

export default function QuoteForm() {
  const honeypotRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [deliveryRequired, setDeliveryRequired] = useState(false);
  const [installationRequired, setInstallationRequired] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [isPending, startTransition] = useTransition();

  function validate(): boolean {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!phone.trim() || phone.trim().length < 7) errs.phone = "Valid phone number is required (min 7 characters)";
    if (!service) errs.service = "Please select a service";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (honeypotRef.current?.value) return;
    if (!validate()) return;

    const payload: QuoteFormData = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim() || undefined,
      company: company.trim() || undefined,
      service,
      quantity: quantity ? Number(quantity) : undefined,
      files: files.length > 0 ? files : undefined,
      description: description.trim() || undefined,
      deliveryRequired,
      installationRequired,
    };

    startTransition(async () => {
      try {
        const res = await fetch("/api/quotes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data: ApiResponse = await res.json();
        if (data.success) {
          toast.success(data.message);
          setName(""); setPhone(""); setEmail(""); setCompany("");
          setService(""); setQuantity(""); setDescription("");
          setFiles([]); setDeliveryRequired(false); setInstallationRequired(false);
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
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" ref={honeypotRef} tabIndex={-1} autoComplete="off" />
      </div>

      <section>
        <h3 className="text-lg font-semibold mb-4">Personal Details</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="qf-name">Full Name *</Label>
            <Input id="qf-name" value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="qf-phone">Phone Number *</Label>
            <Input id="qf-phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+260 123 456 789" />
            {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="qf-email">Email</Label>
            <Input id="qf-email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="qf-company">Company</Label>
            <Input id="qf-company" value={company} onChange={e => setCompany(e.target.value)} placeholder="Acme Corp" />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-4">Project Details</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="qf-service">Service *</Label>
            <Select value={service} onValueChange={(v) => setService(v ?? "")}>
              <SelectTrigger id="qf-service">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {SERVICE_OPTIONS.map(opt => (
                  <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.service && <p className="text-sm text-red-500">{errors.service}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="qf-quantity">Quantity</Label>
            <Input id="qf-quantity" type="number" min={0} value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="e.g. 500" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="qf-description">Description</Label>
            <Textarea id="qf-description" value={description} onChange={e => setDescription(e.target.value)} placeholder="Tell us about your project..." rows={4} />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-4">File Upload</h3>
        <FileUpload value={files} onChange={setFiles} />
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-4">Extras</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={deliveryRequired}
              onChange={e => setDeliveryRequired(e.target.checked)}
              className="h-4 w-4"
            />
            <span className="text-sm">Delivery required</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={installationRequired}
              onChange={e => setInstallationRequired(e.target.checked)}
              className="h-4 w-4"
            />
            <span className="text-sm">Installation required</span>
          </label>
        </div>
      </section>

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Submitting...
          </span>
        ) : (
          "Get a Free Quote"
        )}
      </Button>
    </form>
  );
}
