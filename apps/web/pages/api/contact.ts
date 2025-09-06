import type { NextApiRequest, NextApiResponse } from "next";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

type ResponseData = {
  success: boolean;
  message: string;
  data?: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, message }: ContactFormData = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // TODO: Save to database
    console.log("Contact form submission:", { name, email, message });

    res.status(200).json({
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
      data: {
        submittedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
