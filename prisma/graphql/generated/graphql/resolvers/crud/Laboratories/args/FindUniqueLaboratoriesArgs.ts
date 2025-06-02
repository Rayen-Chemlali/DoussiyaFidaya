import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LaboratoriesWhereUniqueInput } from "../../../inputs/LaboratoriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueLaboratoriesArgs {
  @TypeGraphQL.Field(_type => LaboratoriesWhereUniqueInput, {
    nullable: false
  })
  where!: LaboratoriesWhereUniqueInput;
}
