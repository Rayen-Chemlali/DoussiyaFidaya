import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientsUpdateManyMutationInput } from "../../../inputs/PatientsUpdateManyMutationInput";
import { PatientsWhereInput } from "../../../inputs/PatientsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPatientsArgs {
  @TypeGraphQL.Field(_type => PatientsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PatientsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;
}
