import express, { type Router } from 'express';
import { logger } from '../../../shared/libs/logger.js';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import MemberController from './member.controller.js';
import { createMemberValidator } from './validators/createMember.validator.js';
import { updateMemberValidator } from './validators/updateMember.validator.js';
import { memberIdParamValidator } from './validators/memberIdParam.validator.js';
import { memberAddressValidator } from './validators/memberAddress.validator.js';

const router: Router = express.Router();

/// Object declarations
const memberController = new MemberController(logger);

/// Member Address Routes
router
  .get(
    '/address/:customerId',
    validate(memberIdParamValidator, 'params'),
    memberController.getMemberAddress,
  )
  .post(
    '/address/:customerId',
    validate(memberIdParamValidator, 'params'),
    validate(memberAddressValidator, 'body'),
    memberController.createMemberAddress,
  )
  .patch(
    '/address/:customerId',
    validate(memberAddressValidator, 'body'),
    memberController.updateMemberAddress,
  );

// Single Member routes
router
  .get(
    '/:customerId',
    validate(memberIdParamValidator, 'params'),
    memberController.get,
  )
  .post('', validate(createMemberValidator), memberController.create)
  .patch(
    '/:customerId',
    validate(memberIdParamValidator, 'params'),
    validate(updateMemberValidator, 'body'),
    memberController.update,
  )
  .delete(
    '/:customerId',
    validate(memberIdParamValidator, 'params'),
    memberController.delete,
  );

export default router;
