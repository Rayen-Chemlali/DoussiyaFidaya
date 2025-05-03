import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CliniquesUpdateInput } from "../../../inputs/CliniquesUpdateInput";
import { CliniquesWhereUniqueInput } from "../../../inputs/CliniquesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCliniquesArgs {
  @TypeGraphQL.Field(_type => CliniquesUpdateInput, {
    nullable: false
  })
  data!: CliniquesUpdateInput;

  @TypeGraphQL.Field(_type => CliniquesWhereUniqueInput, {
    nullable: false
  })
  where!: CliniquesWhereUniqueInput;
}
