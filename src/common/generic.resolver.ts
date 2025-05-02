import {
  Resolver,
  Query,
  Mutation,
  Args,
  ID,
} from '@nestjs/graphql';
import { Type } from '@nestjs/common';
import { GenericService } from './generic.service'; // Adjust path as needed

export function createResolver<TEntity, TCreateInput, TUpdateInput>(
  entity: Type<TEntity>,
  createInput: Type<TCreateInput>,
  updateInput: Type<TUpdateInput>
) {
  @Resolver(() => entity)
  class GenericResolver {
    constructor(
      protected readonly service: GenericService<TEntity, TCreateInput, TUpdateInput>
    ) {}

    @Query(() => [entity], { name: `findAll${entity.name}s` })
    async findAll(): Promise<TEntity[]> {
      return this.service.findAll();
    }

    @Query(() => entity, { name: `find${entity.name}ById` })
    async findById(@Args('id') id: number): Promise<TEntity> {
      return this.service.findOne(id, []);
    }

    @Mutation(() => entity, { name: `create${entity.name}` })
    async create(@Args('input') input: TCreateInput): Promise<TEntity> {
      return this.service.create(input);
    }

    @Mutation(() => entity, { name: `update${entity.name}` })
    async update(@Args('id') id: number, @Args('input') input: TUpdateInput): Promise<TEntity> {
      return this.service.update(id, input);
    }

    @Mutation(() => entity, { name: `delete${entity.name}` })
    async delete(@Args('id') id: number): Promise<TEntity> {
      return this.service.remove(id);
    }

    @Mutation(() => [entity], { name: `find${entity.name}sByIds` })
    async findByIds(@Args('ids', { type: () => [Number] }) ids: number[]): Promise<TEntity[]> {
      return this.service.findByIds(ids);
    }
  }

  return GenericResolver as Type<GenericResolver>;
}
