import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorizationsOrderByWithAggregationInput } from "../../../inputs/AuthorizationsOrderByWithAggregationInput";
import { AuthorizationsScalarWhereWithAggregatesInput } from "../../../inputs/AuthorizationsScalarWhereWithAggregatesInput";
import { AuthorizationsWhereInput } from "../../../inputs/AuthorizationsWhereInput";
import { AuthorizationsScalarFieldEnum } from "../../../../enums/AuthorizationsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAuthorizationsArgs {
  @TypeGraphQL.Field(_type => AuthorizationsWhereInput, {
    nullable: true
  })
  where?: AuthorizationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AuthorizationsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "level" | "institut_medical_id" | "patient_id">;

  @TypeGraphQL.Field(_type => AuthorizationsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AuthorizationsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
