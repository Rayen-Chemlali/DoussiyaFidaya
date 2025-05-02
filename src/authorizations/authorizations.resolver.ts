import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthorizationsService } from './authorizations.service';
import { Authorization } from './entities/authorization.entity';
import { CreateAuthorizationInput } from './dto/create-authorization.input';
import { UpdateAuthorizationInput } from './dto/update-authorization.input';
import { GraphQLUUID } from 'graphql-scalars';
//const GenericResolver = createResolver(entity ,...inputs)

@Resolver(() => Authorization)
export class AuthorizationsResolver {
  constructor(private readonly authorizationsService: AuthorizationsService) {}

 

  @Query(() => [Authorization], { name: 'authorizations' })
  findAll() {
    return this.authorizationsService.findAll();
  }

  @Query(() => Authorization, { name: 'authorization' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.authorizationsService.genericFindOne(id);
  }

  @Query(() => [Authorization])
  async authorizationsByPatientId(
    @Args('patientId', { type: () => GraphQLUUID }) patientId: string,
  ): Promise<Authorization[]> {
    return this.authorizationsService.findByPatientId(patientId);
  }

  @Query(() => [Authorization])
  async authorizationsByMedicalInstituteId(
    @Args('medicalInstituteId', { type: () => GraphQLUUID }) medicalInstituteId: string,
  ): Promise<Authorization[]> {
    return this.authorizationsService.findByMedicalInstituteId(medicalInstituteId);
  }


}
