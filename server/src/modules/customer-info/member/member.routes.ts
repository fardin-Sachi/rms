import { Router } from 'express';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import { createMemberValidator } from './validators/createMember.validator.js';
import { updateMemberValidator } from './validators/updateMember.validator.js';
import { memberIdParamValidator } from './validators/memberIdParam.validator.js';
import { memberAddressValidator } from './validators/memberAddress.validator.js';
import type MemberController from './member.controller.js';

class MemberRouter {
  public readonly router: Router;

  constructor(private readonly mController: MemberController) {
    this.router = Router();
    this.registerRoutes();
  }

  private registerRoutes(): void {
    this.registerMemberAddressRoutes();
    this.registerSingleRoutes();
  }

  // Member Address Routes
  private registerMemberAddressRoutes(): void {
    this.router
      .get(
        '/address/:customerId',
        validate(memberIdParamValidator, 'params'),
        this.mController.getMemberAddress,
      )
      .post(
        '/address/:customerId',
        validate(memberIdParamValidator, 'params'),
        validate(memberAddressValidator, 'body'),
        this.mController.createMemberAddress,
      )
      .patch(
        '/address/:customerId',
        validate(memberIdParamValidator, 'params'),
        validate(memberAddressValidator, 'body'),
        this.mController.updateMemberAddress,
      );
  }

  // Single Member routes
  private registerSingleRoutes(): void {
    this.router
      .get(
        '/:customerId',
        validate(memberIdParamValidator, 'params'),
        this.mController.get,
      )
      .post('/', validate(createMemberValidator), this.mController.create)
      .patch(
        '/:customerId',
        validate(memberIdParamValidator, 'params'),
        validate(updateMemberValidator, 'body'),
        this.mController.update,
      )
      .delete(
        '/:customerId',
        validate(memberIdParamValidator, 'params'),
        this.mController.delete,
      );
  }
}

export default MemberRouter;
