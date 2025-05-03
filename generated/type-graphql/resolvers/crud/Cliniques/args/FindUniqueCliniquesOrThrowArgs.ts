import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CliniquesWhereUniqueInput } from "../../../inputs/CliniquesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCliniquesOrThrowArgs {
  @TypeGraphQL.Field(_type => CliniquesWhereUniqueInput, {
    nullable: false
  })
  where!: CliniquesWhereUniqueInput;
}
