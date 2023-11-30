const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody , validateId, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrl.listContacts);

router.get("/:contactId", authenticate, validateId, ctrl.contactById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:contactId", authenticate, validateId, ctrl.removeContact);

router.put("/:contactId", authenticate, validateId, validateBody(schemas.addSchema), ctrl.updateContact);

router.patch(
  "/:contactId/favorite", authenticate, validateId,validateBody(schemas.updateFavoriteSchema),ctrl.updateFavorite
);

module.exports = router;
