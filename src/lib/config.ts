// Configuration for form submissions
// Note: This is now handled by the API route to avoid CORS issues
export const GOOGLE_APPS_SCRIPT_URL =
  process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL ||
  "YOUR_GOOGLE_APPS_SCRIPT_URL";

// You can also add other configuration here
export const FORM_CONFIG = {
  contactForm: {
    name: "Contact Form",
    fields: ["name", "email", "phone", "subject", "message"],
  },
  inquiryForm: {
    name: "inquiry",
    fields: ["email"],
  },
};
