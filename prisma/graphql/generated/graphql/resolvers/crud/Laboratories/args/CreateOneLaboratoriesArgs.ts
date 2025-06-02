import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LaboratoriesCreateInput } from "../../../inputs/LaboratoriesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLaboratoriesArgs {
  @TypeGraphQL.Field(_type => LaboratoriesCreateInput, {
    nullable: false
  })
  data!: LaboratoriesCreateInput;
}
