import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CliniquesCreateInput } from "../../../inputs/CliniquesCreateInput";
import { CliniquesUpdateInput } from "../../../inputs/CliniquesUpdateInput";
import { CliniquesWhereUniqueInput } from "../../../inputs/CliniquesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCliniquesArgs {
  @TypeGraphQL.Field(_type => CliniquesWhereUniqueInput, {
    nullable: false
  })
  where!: CliniquesWhereUniqueInput;

  @TypeGraphQL.Field(_type => CliniquesCreateInput, {
    nullable: false
  })
  create!: CliniquesCreateInput;

  @TypeGraphQL.Field(_type => CliniquesUpdateInput, {
    nullable: false
  })
  update!: CliniquesUpdateInput;
}
