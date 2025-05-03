import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientsWhereInput } from "../../../inputs/PatientsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPatientsArgs {
  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;
}
