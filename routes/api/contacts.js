const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody , validateId} = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:contactId",validateId, ctrl.contactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:contactId", validateId, ctrl.removeContact);

router.put("/:contactId",validateId, validateBody(schemas.addSchema), ctrl.updateContact);

router.patch(
  "/:contactId/favorite",validateId,validateBody(schemas.updateFavoriteSchema),ctrl.updateFavorite
);

module.exports = router;
