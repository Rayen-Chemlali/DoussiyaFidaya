import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Instituts_medicauxOrderByWithAggregationInput } from "../../../inputs/Instituts_medicauxOrderByWithAggregationInput";
import { Instituts_medicauxScalarWhereWithAggregatesInput } from "../../../inputs/Instituts_medicauxScalarWhereWithAggregatesInput";
import { Instituts_medicauxWhereInput } from "../../../inputs/Instituts_medicauxWhereInput";
import { Instituts_medicauxScalarFieldEnum } from "../../../../enums/Instituts_medicauxScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByInstituts_medicauxArgs {
  @TypeGraphQL.Field(_type => Instituts_medicauxWhereInput, {
    nullable: true
  })
  where?: Instituts_medicauxWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Instituts_medicauxOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Instituts_medicauxOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Instituts_medicauxScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "type">;

  @TypeGraphQL.Field(_type => Instituts_medicauxScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Instituts_medicauxScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
