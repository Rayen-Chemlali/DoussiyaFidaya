import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HopitauxOrderByWithAggregationInput } from "../../../inputs/HopitauxOrderByWithAggregationInput";
import { HopitauxScalarWhereWithAggregatesInput } from "../../../inputs/HopitauxScalarWhereWithAggregatesInput";
import { HopitauxWhereInput } from "../../../inputs/HopitauxWhereInput";
import { HopitauxScalarFieldEnum } from "../../../../enums/HopitauxScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByHopitauxArgs {
  @TypeGraphQL.Field(_type => HopitauxWhereInput, {
    nullable: true
  })
  where?: HopitauxWhereInput | undefined;

  @TypeGraphQL.Field(_type => [HopitauxOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: HopitauxOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [HopitauxScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "type" | "name" | "address" | "phone" | "email">;

  @TypeGraphQL.Field(_type => HopitauxScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: HopitauxScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
