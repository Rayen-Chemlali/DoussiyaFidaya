import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientsCreateInput } from "../../../inputs/PatientsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePatientsArgs {
  @TypeGraphQL.Field(_type => PatientsCreateInput, {
    nullable: false
  })
  data!: PatientsCreateInput;
}
