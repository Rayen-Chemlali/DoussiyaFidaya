import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientsWhereUniqueInput } from "../../../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePatientsArgs {
  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: false
  })
  where!: PatientsWhereUniqueInput;
}
