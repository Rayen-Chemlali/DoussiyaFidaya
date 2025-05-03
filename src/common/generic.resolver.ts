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
  entity: any,
  createInput: any,
  updateInput: any
) {
  @Resolver(() => entity)
  class GenericResolver {
    constructor(
      public readonly service: any
    ) {}

    @Query(() => [entity], { name: `findAll${entity.name}s` })
    async findAll(): Promise<TEntity[]> {
      return this.service.genericFindAll();
    }

    @Query(() => entity, { name: `find${entity.name}ById` })
    async findById(@Args('id') id: number): Promise<TEntity> {
      return this.service.genericFindOne(id, []);
    }

    @Mutation(() => entity, { name: `create${entity.name}` })
    async create(@Args('input',{type:()=>createInput}) input: TCreateInput): Promise<TEntity> {
      return this.service.genericCreate(input);
    }

    @Mutation(() => entity, { name: `update${entity.name}` })
    async update(@Args('id') id: number, @Args('input',{type:()=>updateInput}) input: TUpdateInput): Promise<TEntity> {
      return this.service.genericUpdate(id, input);
    }

    @Mutation(() => entity, { name: `delete${entity.name}` })
    async delete(@Args('id') id: number): Promise<TEntity> {
      return this.service.genericRemove(id);
    }

    @Mutation(() => [entity], { name: `find${entity.name}sByIds` })
    async findByIds(@Args('ids', { type: () => [Number] }) ids: number[]): Promise<TEntity[]> {
      return this.service.genericFindByIds(ids);
    }
  }

  return GenericResolver as Type<GenericResolver>;
}
