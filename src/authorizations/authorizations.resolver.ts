import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthorizationsService } from './authorizations.service';
import { Authorization } from './entities/authorization.entity';
import { CreateAuthorizationInput } from './dto/create-authorization.input';
import { UpdateAuthorizationInput } from './dto/update-authorization.input';

@Resolver(() => Authorization)
export class AuthorizationsResolver {
  constructor(private readonly authorizationsService: AuthorizationsService) {}

  @Mutation(() => Authorization)
  createAuthorization(@Args('createAuthorizationInput') createAuthorizationInput: CreateAuthorizationInput) {
    return this.authorizationsService.create(createAuthorizationInput);
  }

  @Query(() => [Authorization], { name: 'authorizations' })
  findAll() {
    return this.authorizationsService.findAll();
  }

  @Query(() => Authorization, { name: 'authorization' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.authorizationsService.findOne(id);
  }

  @Mutation(() => Authorization)
  updateAuthorization(@Args('updateAuthorizationInput') updateAuthorizationInput: UpdateAuthorizationInput) {
    return this.authorizationsService.update(updateAuthorizationInput.id, updateAuthorizationInput);
  }

  @Mutation(() => Authorization)
  removeAuthorization(@Args('id', { type: () => Int }) id: number) {
    return this.authorizationsService.remove(id);
  }
}
