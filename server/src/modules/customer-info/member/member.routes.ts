import express, { type Router } from 'express';
import { logger } from '../../../infrastructures/logger/logger.js';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import MemberController from './member.controller.js';
import { createMemberValidator } from './validators/createMember.validator.js';
import { updateMemberValidator } from './validators/updateMember.validator.js';
import { memberIdParamValidator } from './validators/memberIdParam.validator.js';
import { memberAddressValidator } from './validators/memberAddress.validator.js';
import { db } from '../../../infrastructures/database/index.database.js';
import MemberMapper from './mappers/member.mapper.js';
import MemberRepository from './member.repository.js';
import MemberService from './member.service.js';

const router: Router = express.Router();

/// Object declarations
const mMapper = new MemberMapper();
const mRepository = new MemberRepository(db, logger);
const mService = new MemberService(logger, mRepository, mMapper);
const mController = new MemberController(logger, mService);

/// Member Address Routes
router
  .get(
    '/address/:customerId',
    validate(memberIdParamValidator, 'params'),
    mController.getMemberAddress,
  )
  .post(
    '/address/:customerId',
    validate(memberIdParamValidator, 'params'),
    validate(memberAddressValidator, 'body'),
    mController.createMemberAddress,
  )
  .patch(
    '/address/:customerId',
    validate(memberAddressValidator, 'body'),
    mController.updateMemberAddress,
  );

// Single Member routes
router
  .get(
    '/:customerId',
    validate(memberIdParamValidator, 'params'),
    mController.get,
  )
  .post('', validate(createMemberValidator), mController.create)
  .patch(
    '/:customerId',
    validate(memberIdParamValidator, 'params'),
    validate(updateMemberValidator, 'body'),
    mController.update,
  )
  .delete(
    '/:customerId',
    validate(memberIdParamValidator, 'params'),
    mController.delete,
  );

export default router;
