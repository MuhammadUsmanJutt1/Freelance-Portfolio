// Database utilities for storing contact form submissions
// Uncomment and configure based on your database choice

// ============================================
// OPTION 1: PostgreSQL with Prisma
// ============================================
// 1. Install: npm install @prisma/client
// 2. Install dev: npm install -D prisma
// 3. Initialize: npx prisma init
// 4. Create schema in prisma/schema.prisma:
//
// model ContactSubmission {
//   id        String   @id @default(cuid())
//   name      String
//   email     String
//   service   String
//   message   String
//   createdAt DateTime @default(now())
// }
//
// 5. Run: npx prisma migrate dev
// 6. Generate client: npx prisma generate

// import { PrismaClient } from '@prisma/client';
// 
// const prisma = new PrismaClient();
// 
// export async function saveContactSubmission(data: {
//   name: string;
//   email: string;
//   service: string;
//   message: string;
// }) {
//   return await prisma.contactSubmission.create({
//     data,
//   });
// }

// ============================================
// OPTION 2: MongoDB with Mongoose
// ============================================
// 1. Install: npm install mongoose
// 2. Create connection and model

// import mongoose from 'mongoose';
// 
// const ContactSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   service: { type: String, required: true },
//   message: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
// });
// 
// const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
// 
// export async function saveContactSubmission(data: {
//   name: string;
//   email: string;
//   service: string;
//   message: string;
// }) {
//   await mongoose.connect(process.env.MONGODB_URI!);
//   return await Contact.create(data);
// }

// ============================================
// OPTION 3: Supabase
// ============================================
// 1. Install: npm install @supabase/supabase-js
// 2. Create table in Supabase dashboard:
//    - name (text)
//    - email (text)
//    - service (text)
//    - message (text)
//    - created_at (timestamp)

// import { createClient } from '@supabase/supabase-js';
// 
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_KEY!
// );
// 
// export async function saveContactSubmission(data: {
//   name: string;
//   email: string;
//   service: string;
//   message: string;
// }) {
//   const { data: result, error } = await supabase
//     .from('contact_submissions')
//     .insert([data]);
//   
//   if (error) throw error;
//   return result;
// }

// Placeholder export (remove when implementing above)
export async function saveContactSubmission(data: {
  name: string;
  email: string;
  service: string;
  message: string;
}) {
  console.log('Would save to database:', data);
  return { success: true, id: 'placeholder-id' };
}
