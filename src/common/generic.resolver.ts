import {
  Resolver,
  Query,
  Mutation,
  Args,
  ID,
} from '@nestjs/graphql';
import { Type } from '@nestjs/common';
import { GenericService } from './generic.service'; // Adjust path as needed

export function createResolver<TEntity extends { id: string; }, TCreateInput, TUpdateInput>(
  entity: Type<TEntity>,
  createInput: Type<TCreateInput>,
  updateInput: Type<TUpdateInput>
) {
  @Resolver(() => entity)
  class GenericResolver {
    constructor(
      public readonly service: GenericService<TEntity, TCreateInput, TUpdateInput>
    ) {}

    @Query(() => [entity], { name: `findAll${entity.name}s` })
    async findAll(): Promise<TEntity[]> {
      return this.service.genericFindAll();
    }

    @Query(() => entity, { name: `find${entity.name}ById` })
    async findById(@Args('id') id: string): Promise<TEntity | null> {
      return this.service.genericFindOne(id, []);
    }

    @Mutation(() => entity, { name: `create${entity.name}` })
    async create(@Args('input') input: TCreateInput): Promise<TEntity> {
      return this.service.genericCreate(input);
    }

    @Mutation(() => entity, { name: `update${entity.name}` })
    async update(@Args('id') id: string, @Args('input') input: TUpdateInput): Promise<TEntity | null> {
      return this.service.genericUpdate(id, input);
    }

    @Mutation(() => entity, { name: `delete${entity.name}` })
    async delete(@Args('id') id: string): Promise<void> {
      return this.service.genericRemove(id);
    }

    @Mutation(() => [entity], { name: `find${entity.name}sByIds` })
    async findByIds(@Args('ids', { type: () => [String] }) ids: string[]): Promise<TEntity[]> {
      return this.service.genericFindByIds(ids);
    }
  }

  return GenericResolver as Type<GenericResolver>;
}
