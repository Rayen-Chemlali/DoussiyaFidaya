import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientsUpdateInput } from "../../../inputs/PatientsUpdateInput";
import { PatientsWhereUniqueInput } from "../../../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePatientsArgs {
  @TypeGraphQL.Field(_type => PatientsUpdateInput, {
    nullable: false
  })
  data!: PatientsUpdateInput;

  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: false
  })
  where!: PatientsWhereUniqueInput;
}
