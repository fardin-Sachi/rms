import express, { type Router } from 'express';
import { logger } from '../../shared/libs/logger.js';
import { validate } from '../../shared/middlewares/validate.middleware.js';
import MemberController from "./member.controller.js";
import {createMemberSchema} from "./validators/createMember.validator.js";
import {customerIdParamSchema} from "../customer/validators/customerIdParam.validator.js";
import {updateMemberSchema} from "./validators/updateMember.validator.js";

const router: Router = express.Router();

/// Object declarations
const memberController = new MemberController(logger);

// Single Member routes
router
  .get(
    '/:customerId',
    validate(customerIdParamSchema, 'params'),
    memberController.get,
  )
  .post('', validate(createMemberSchema), memberController.create)
  .patch(
    '/:customerId',
    validate(customerIdParamSchema, 'params'),
    validate(updateMemberSchema, 'body'),
    memberController.update,
  )
  .delete(
    '/:customerId',
    validate(customerIdParamSchema, 'params'),
    memberController.delete,
  );

export default router;
