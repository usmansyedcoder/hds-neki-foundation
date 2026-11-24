require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");
const { errorHandler, notFound } = require("./middleware/errorHandler");

const authRoutes = require("./routes/authRoutes");
const programRoutes = require("./routes/programRoutes");
const newsRoutes = require("./routes/newsRoutes");
const donationRoutes = require("./routes/donationRoutes");
const contactRoutes = require("./routes/contactRoutes");
const volunteerRoutes = require("./routes/volunteerRoutes");

connectDB();

const app = express();

// Security & middleware
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || "*" }));
app.use(express.json({ limit: "10mb" }));
app.use(morgan("dev"));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  message: "Too many requests, please try again later.",
});
app.use("/api", limiter);

// Routes
app.get("/api/health", (req, res) =>
  res.json({ status: "ok", org: "HDS Neki Foundation" }),
);
app.use("/api/auth", authRoutes);
app.use("/api/programs", programRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/volunteers", volunteerRoutes);

// Error handlers
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`),
);
