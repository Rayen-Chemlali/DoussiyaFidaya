import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LaboratoriesUpdateManyMutationInput } from "../../../inputs/LaboratoriesUpdateManyMutationInput";
import { LaboratoriesWhereInput } from "../../../inputs/LaboratoriesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLaboratoriesArgs {
  @TypeGraphQL.Field(_type => LaboratoriesUpdateManyMutationInput, {
    nullable: false
  })
  data!: LaboratoriesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LaboratoriesWhereInput, {
    nullable: true
  })
  where?: LaboratoriesWhereInput | undefined;
}
