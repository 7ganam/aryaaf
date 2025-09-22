# Google Sheets Form Integration Setup Guide

This guide will help you set up Google Sheets integration for your Next.js forms.

## 📋 Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Aryaaf Form Submissions" (or any name you prefer)
4. Add these headers in row 1:
   ```
   A1: Timestamp
   B1: Name
   C1: Email
   D1: Phone
   E1: Subject
   F1: Message
   G1: Form Type
   ```

## 🔧 Step 2: Set up Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete the default code and replace it with this:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    const timestamp = new Date();
    const formType = data.formType || "Contact";

    const row = [
      timestamp,
      data.name || "",
      data.email || "",
      data.phone || "",
      data.subject || "",
      data.message || "",
      formType,
    ];

    sheet.appendRow(row);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ message: "Google Sheets API is working!" })
  ).setMimeType(ContentService.MimeType.JSON);
}

function doOptions(e) {
  // Handle CORS preflight requests
  return ContentService.createTextOutput("").setMimeType(
    ContentService.MimeType.JSON
  );
}
```

3. **Save** the script (Ctrl+S or Cmd+S)
4. Give it a name like "Form Handler"

## 🚀 Step 3: Deploy as Web App

1. Click **Deploy** → **New Deployment**
2. Choose **Web app** as the type
3. Set these options:
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Copy the web app URL** (it looks like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`)

## ⚙️ Step 4: Configure Your Next.js App

1. Create a `.env.local` file in your project root:

```bash
# Server-side environment variable (no NEXT_PUBLIC_ prefix needed)
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

2. Replace `YOUR_SCRIPT_ID` with your actual script ID from the URL

**Note:** We're using a server-side environment variable to avoid CORS issues. The forms now submit to your Next.js API route, which then forwards the data to Google Apps Script.

## 🧪 Step 5: Test the Integration

1. Start your Next.js development server:

```bash
npm run dev
```

2. Test both forms:

   - Contact form (with all fields)
   - Newsletter subscription form

3. Check your Google Sheet - you should see new rows appear with the form data

## 📊 Step 6: View Your Data

Your Google Sheet will now automatically collect:

- **Contact Form submissions** with all fields
- **Newsletter subscriptions** with email and form type
- **Timestamps** for each submission
- **Form type** to distinguish between different forms

## 🔒 Security Notes

- The web app is set to "Anyone" access, which is fine for form submissions
- No sensitive data is stored in the client-side code
- All form data goes directly to your Google Sheet

## 🎯 Benefits

✅ **Free** - No cost for Google Sheets  
✅ **Real-time** - Data appears immediately  
✅ **Visual** - Easy to view and manage submissions  
✅ **Exportable** - Can export to Excel, CSV, etc.  
✅ **Searchable** - Use Google Sheets search features  
✅ **Shareable** - Can share with team members

## 🛠️ Troubleshooting

**If forms aren't submitting:**

1. Check the Google Apps Script URL in your `.env.local`
2. Make sure the web app is deployed and accessible
3. Check browser console for errors
4. Verify the Google Sheet has the correct headers

**If you see CORS errors:**

- ✅ **SOLVED!** We've implemented a Next.js API route that acts as a proxy to avoid CORS issues
- The forms now submit to `/api/submit-form` which forwards to Google Apps Script
- No more CORS errors from localhost or production domains

## 📈 Next Steps (Optional)

You can enhance this setup by:

- Adding email notifications when forms are submitted
- Creating charts and analytics in Google Sheets
- Setting up automated responses
- Adding form validation in the Apps Script
- Creating different sheets for different form types

---

**Need help?** Check the Google Apps Script documentation or contact support.
