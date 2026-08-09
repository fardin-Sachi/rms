import { type Router } from 'express';
import { logger } from '../../../infrastructures/logger/logger.js';
import { db } from '../../../infrastructures/database/index.database.js';
import cache from '../../../infrastructures/cache/cache.factory.js';
import MemberMapper from './mappers/member.mapper.js';
import MemberController from './member.controller.js';
import MemberRepository from './member.repository.js';
import MemberService from './member.service.js';
import MemberRouter from './member.routes.js';

class MemberModule {
  public readonly router: Router;
  constructor() {
    const mapper = new MemberMapper();
    const repository = new MemberRepository(db, logger);
    const service = new MemberService(logger, cache, repository, mapper);
    const controller = new MemberController(logger, service);
    const router = new MemberRouter(controller);
    this.router = router.router;
  }
}
const customerModule = new MemberModule();

export default customerModule.router;
