import type { IEntityMapper } from '../../../../shared/interfaces/mapper.interface.js';
import type CreateCustomerDto from '../dtos/createCustomer.dto.js';
import type { CustomerDto } from '../dtos/customer.dto.js';
import type UpdateCustomerDto from '../dtos/updateCustomer.dto.js';
import CustomerEntity from '../entities/customer.entity.js';

export default class CustomerMapper implements IEntityMapper<
  CustomerEntity,
  CustomerDto,
  CreateCustomerDto,
  UpdateCustomerDto
> {
  toEntity(dto: CustomerDto): CustomerEntity {
    return new CustomerEntity(
      dto.id,
      dto.name ?? null,
      dto.contact ?? null,
      dto.email ?? null,
      dto.createdBy ?? null,
      dto.createdOn ?? null,
      dto.updatedBy ?? null,
      dto.updatedOn ?? null,
    );
  }

  fromCreateDto(dto: CreateCustomerDto): CustomerEntity {
    return new CustomerEntity(
      0,
      dto.name ?? null,
      dto.contact ?? null,
      dto.email ?? null,
      null,
      null,
      null,
      null,
    );
  }

  toDto(entity: CustomerEntity): CustomerDto {
    const dto: CustomerDto = {
      id: entity.id,
    };

    if (entity.name !== null) dto.name = entity.name;

    if (entity.contact !== null) dto.contact = entity.contact;

    if (entity.email !== null) dto.email = entity.email;

    if (entity.createdBy !== null) dto.createdBy = entity.createdBy;

    if (entity.createdOn !== null) dto.createdOn = entity.createdOn;

    if (entity.updatedBy !== null) dto.updatedBy = entity.updatedBy;

    if (entity.updatedOn !== null) dto.updatedOn = entity.updatedOn;

    return dto;
  }

  updateEntity(entity: CustomerEntity, dto: UpdateCustomerDto): CustomerEntity {
    if (dto.name !== undefined) entity.changeName(dto.name);

    if (dto.contact !== undefined) entity.changeContact(dto.contact);

    if (dto.email !== undefined) entity.updateEmail(dto.email);

    entity.updateAudit(dto.updatedBy, dto.updatedOn);

    return entity;
  }
}
