// src/lib/leadService.ts
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export interface LeadData {
  name: string;
  phone: string;
  email: string;
  interestedIn: string;
  budget: string;
  message: string;
  source?: string;
}

// Store lead in Firestore
export async function storeLead(data: LeadData): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, 'leads'), {
      ...data,
      createdAt: serverTimestamp(),
      status: 'new',
    });
    return docRef.id;
  } catch (error) {
    console.error('Error storing lead:', error);
    throw error;
  }
}

// Send WhatsApp message to admin via WhatsApp API
export function sendWhatsAppToAdmin(data: LeadData) {
  const adminPhone = process.env.NEXT_PUBLIC_ADMIN_WHATSAPP || '919999999999';
  const message = encodeURIComponent(
    `🏗️ *New Lead - Jaybhadra Builders*\n\n` +
    `👤 Name: ${data.name}\n` +
    `📞 Phone: ${data.phone}\n` +
    `📧 Email: ${data.email || 'N/A'}\n` +
    `🏠 Interested In: ${data.interestedIn}\n` +
    `💰 Budget: ${data.budget}\n` +
    `💬 Message: ${data.message || 'N/A'}\n\n` +
    `Source: ${data.source || 'Website Contact Form'}`
  );
  window.open(`https://wa.me/${adminPhone}?text=${message}`, '_blank');
}

// Send WhatsApp auto-reply to user
export function sendWhatsAppToUser(phone: string, name: string) {
  const userPhone = phone.replace(/[^0-9]/g, '');
  const formattedPhone = userPhone.startsWith('91') ? userPhone : `91${userPhone}`;
  const message = encodeURIComponent(
    `🙏 Dear ${name},\n\nThank you for contacting *Jaybhadra Builders*!\n\nWe have received your enquiry. Our team will call you within *2 hours*.\n\nFor urgent queries, please call:\n📞 +91 99999 99999\n\n*Building Dreams, Delivering Trust* 🏗️`
  );
  // This opens WhatsApp — in production, use WhatsApp Business API
  return `https://wa.me/${formattedPhone}?text=${message}`;
}

// Send email via EmailJS
export async function sendEmailViaEmailJS(data: LeadData) {
  try {
    // EmailJS is loaded as a client-side SDK
    const emailjs = (window as any).emailjs;
    if (!emailjs) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const adminTemplateId = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID!;
    const userTemplateId = process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    // Send to admin
    await emailjs.send(serviceId, adminTemplateId, {
      to_name: 'Jaybhadra Builders',
      from_name: data.name,
      from_phone: data.phone,
      from_email: data.email,
      interested_in: data.interestedIn,
      budget: data.budget,
      message: data.message,
    }, publicKey);

    // Send confirmation to user
    if (data.email) {
      await emailjs.send(serviceId, userTemplateId, {
        to_name: data.name,
        to_email: data.email,
      }, publicKey);
    }
  } catch (error) {
    console.error('EmailJS error:', error);
  }
}

// Complete lead submission handler
export async function submitLead(data: LeadData) {
  const results = await Promise.allSettled([
    storeLead(data),
    sendEmailViaEmailJS(data),
  ]);
  
  // Send WhatsApp to admin
  try {
    sendWhatsAppToAdmin(data);
  } catch (e) {
    console.error('WhatsApp admin error:', e);
  }

  return results;
}
