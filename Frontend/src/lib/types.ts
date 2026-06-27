export interface QuoteFormData {
  name: string;
  phone: string;
  email?: string;
  company?: string;
  service: string;
  quantity?: number;
  files?: UploadedFile[];
  description?: string;
  deliveryRequired: boolean;
  installationRequired: boolean;
}

export interface CallbackFormData {
  name: string;
  phone: string;
  timePreference: "now" | "1hour" | "4hours" | "tomorrow" | "anytime";
  description?: string;
}

export interface ContactFormData {
  name: string;
  phone?: string;
  email: string;
  subject: string;
  message: string;
}

export interface UploadedFile {
  name: string;
  size: number;
  type: string;
  url: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

export interface ServiceOption {
  value: string;
  label: string;
}

export const SERVICE_OPTIONS: ServiceOption[] = [
  { value: "business-cards", label: "Business Cards & Stationery" },
  { value: "flyers-leaflets", label: "Flyers & Leaflets" },
  { value: "brochures-catalogues", label: "Brochures & Catalogues" },
  { value: "posters-large-format", label: "Posters & Large Format Printing" },
  { value: "roll-up-banners", label: "Roll-Up & Pop-Up Banners" },
  { value: "banners-outdoor", label: "Banners & Outdoor Printing" },
  { value: "foam-board-forex", label: "Foam Board & Forex Board Printing" },
  { value: "window-event-graphics", label: "Window, Office & Event Graphics" },
  { value: "acrylic-signs", label: "Acrylic Signs & Stands" },
  { value: "stamps", label: "Stamps" },
  { value: "photo-framing", label: "Photo Framing" },
  { value: "binding", label: "Binding Services" },
  { value: "awards-certificates", label: "Awards, Certificates & Tent Cards" },
  { value: "labels-menus", label: "Labels, Menus & Invitation Cards" },
  { value: "corporate-gifts", label: "Corporate Gifts" },
];

export const TIME_OPTIONS = [
  { value: "now", label: "Now" },
  { value: "1hour", label: "Within 1 hour" },
  { value: "4hours", label: "Within 4 hours" },
  { value: "tomorrow", label: "Tomorrow Morning" },
  { value: "anytime", label: "Anytime" },
];

export const ACCEPTED_FILE_TYPES = ".pdf,.ai,.eps,.cdr,.psd,.jpg,.jpeg,.png,.tiff";
export const MAX_FILE_SIZE = 25 * 1024 * 1024;
export const MAX_FILES = 5;
