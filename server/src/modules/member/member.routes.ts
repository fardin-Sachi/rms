import express, { type Router } from 'express';
import { logger } from '../../shared/libs/logger.js';
import { validate } from '../../shared/middlewares/validate.middleware.js';
import MemberController from "./member.controller.js";
import {createMemberSchema} from "./validators/createMember.validator.js";
import {customerIdParamSchema} from "../customer/validators/customerIdParam.validator.js";
import {updateMemberSchema} from "./validators/updateMember.validator.js";
import {memberIdParamSchema} from "./validators/memberIdParam.validator.js";
import {memberAddressSchema} from "./validators/memberAddress.validator.js";

const router: Router = express.Router();

/// Object declarations
const memberController = new MemberController(logger);

/// Member Address Routes
router
  .get(
    '/address/:memberId',
    validate(memberIdParamSchema, 'params'),
    memberController.getMemberAddress,
  )
  .post(
    '/address/:memberId',
    validate(memberIdParamSchema, 'params'),
    validate(memberAddressSchema, 'body'),
    memberController.createMemberAddress,
  )
  .patch(
    '/address/:memberId',
    validate(memberAddressSchema, 'body'),
    memberController.updateMemberAddress,
  );

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
