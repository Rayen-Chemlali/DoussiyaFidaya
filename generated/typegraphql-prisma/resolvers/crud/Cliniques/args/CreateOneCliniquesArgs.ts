import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CliniquesCreateInput } from "../../../inputs/CliniquesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCliniquesArgs {
  @TypeGraphQL.Field(_type => CliniquesCreateInput, {
    nullable: false
  })
  data!: CliniquesCreateInput;
}
