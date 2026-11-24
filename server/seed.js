require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Program = require("./models/Program");
const Admin = require("./models/Admin");
const News = require("./models/News");

const programs = [
  {
    title: "Free Education Programme",
    slug: "free-education-programme",
    description:
      "Support access to learning for children and young people facing financial or social barriers.",
    category: "Education",
    icon: "GraduationCap",
    order: 1,
  },
  {
    title: "Neki Dastarkhuwan",
    slug: "neki-dastarkhuwan",
    description:
      "Community food-support initiative focused on serving people with dignity.",
    category: "Food Assistance",
    icon: "Utensils",
    order: 2,
  },
  {
    title: "Mobile Dastarkhuwan",
    slug: "mobile-dastarkhuwan",
    description:
      "Mobile/community meal support initiative designed to reach people where support is needed.",
    category: "Food Assistance",
    icon: "Truck",
    order: 3,
  },
  {
    title: "Flood Relief",
    slug: "flood-relief",
    description:
      "Emergency relief activity supporting communities affected by flooding and related hardship.",
    category: "Humanitarian",
    icon: "LifeBuoy",
    order: 4,
  },
  {
    title: "Ramazan Dastarkhuwan",
    slug: "ramazan-dastarkhuwan",
    description: "Seasonal food-support initiative during Ramazan.",
    category: "Ramazan",
    icon: "Moon",
    order: 5,
  },
  {
    title: "Assistance Programme & Help Line",
    slug: "assistance-programme-help-line",
    description:
      "Assistance and referral support for individuals and households seeking help.",
    category: "Community Welfare",
    icon: "PhoneCall",
    order: 6,
  },
  {
    title: "Quran Teaching Programme & Naat Academy",
    slug: "quran-teaching-naat-academy",
    description:
      "Religious learning and cultural/educational activities aligned with community priorities.",
    category: "Religious",
    icon: "BookOpen",
    order: 7,
  },
  {
    title: "Dispute Resolution Programme",
    slug: "dispute-resolution-programme",
    description:
      "Community-level dispute resolution and support activity with appropriate referral safeguards.",
    category: "Community Welfare",
    icon: "Scale",
    order: 8,
  },
  {
    title: "100 Trillion Darood-e-Pak",
    slug: "100-trillion-darood-e-pak",
    description:
      "A named initiative included in the organization's programme portfolio.",
    category: "Religious",
    icon: "Heart",
    order: 9,
  },
];

const seed = async () => {
  try {
    await connectDB();

    // Admin
    const adminExists = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
    if (!adminExists) {
      await Admin.create({
        name: "Super Admin",
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
        role: "superadmin",
      });
      console.log("✅ Admin created");
    }

    // Programs
    await Program.deleteMany({});
    await Program.insertMany(programs);
    console.log("✅ Programs seeded");

    // Sample News
    await News.deleteMany({});
    await News.create({
      title: "Ramazan 2025: 100 Families Receive Ration",
      slug: "ramazan-2025-100-families-ration",
      excerpt:
        "HDS Neki Foundation distributed ration packs to 100 deserving families during Ramazan 2025 in Peshawar.",
      content:
        "<p>Under the Ramazan Dastarkhuwan and Ration Distribution initiative, HDS Neki Foundation successfully distributed complete ration packs to 100 families in Peshawar.</p><p>Each pack included flour, rice, cooking oil, sugar, dates, and other essential items to support families throughout the holy month.</p>",
      image: "/images/ramazan-2025.jpg",
    });

    console.log("✅ News seeded");
    console.log("🎉 Seeding complete!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  }
};

seed();
