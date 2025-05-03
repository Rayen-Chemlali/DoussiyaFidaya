import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CliniquesOrderByWithAggregationInput } from "../../../inputs/CliniquesOrderByWithAggregationInput";
import { CliniquesScalarWhereWithAggregatesInput } from "../../../inputs/CliniquesScalarWhereWithAggregatesInput";
import { CliniquesWhereInput } from "../../../inputs/CliniquesWhereInput";
import { CliniquesScalarFieldEnum } from "../../../../enums/CliniquesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCliniquesArgs {
  @TypeGraphQL.Field(_type => CliniquesWhereInput, {
    nullable: true
  })
  where?: CliniquesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CliniquesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CliniquesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CliniquesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "type" | "name" | "address" | "phone" | "email">;

  @TypeGraphQL.Field(_type => CliniquesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CliniquesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
