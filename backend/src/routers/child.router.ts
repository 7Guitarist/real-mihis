import { Router } from "express";
import { child } from "../data";
import expressAsyncHandler from "express-async-handler";
import { ChildModel } from "../models/child.model";
const router = Router();

// get child
router.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const childCount = await ChildModel.countDocuments();
    if (childCount > 0) {
      res.send("Seed is already Done!");
      return;
    }

    await ChildModel.create(child);
    res.send("Seed is Done");
  })
);
router.get("/child", (req, res) => {
  res.send(child);
});

router.get("/children-page/:id", (req, res) => {
  const childId = req.params.id;
  const childProfile = child.find((children) => children.id === childId);
  res.send(childProfile);
});

export default router;
