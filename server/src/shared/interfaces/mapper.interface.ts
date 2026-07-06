export interface IEntityMapper<TEntity, TDto, TCreateDto, TUpdateDto> {
  toDto(entity: TEntity): TDto;

  fromCreateDto(dto: TCreateDto): TEntity;

  updateEntity(entity: TEntity, dto: TUpdateDto): TEntity;
}
