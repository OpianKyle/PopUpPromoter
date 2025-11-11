import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEmailSubscriptionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/subscribe", async (req, res) => {
    try {
      const validatedData = insertEmailSubscriptionSchema.parse(req.body);
      const subscription = await storage.createEmailSubscription(validatedData);
      res.json({ success: true, subscription });
    } catch (error: any) {
      res.status(400).json({ 
        success: false, 
        error: error.message || "Failed to subscribe" 
      });
    }
  });

  app.get("/api/subscriptions/count", async (_req, res) => {
    try {
      const subscriptions = await storage.getAllEmailSubscriptions();
      res.json({ count: subscriptions.length });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
