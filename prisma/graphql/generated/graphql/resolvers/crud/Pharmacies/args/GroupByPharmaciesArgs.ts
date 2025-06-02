import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PharmaciesOrderByWithAggregationInput } from "../../../inputs/PharmaciesOrderByWithAggregationInput";
import { PharmaciesScalarWhereWithAggregatesInput } from "../../../inputs/PharmaciesScalarWhereWithAggregatesInput";
import { PharmaciesWhereInput } from "../../../inputs/PharmaciesWhereInput";
import { PharmaciesScalarFieldEnum } from "../../../../enums/PharmaciesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPharmaciesArgs {
  @TypeGraphQL.Field(_type => PharmaciesWhereInput, {
    nullable: true
  })
  where?: PharmaciesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PharmaciesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PharmaciesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PharmaciesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "address" | "phone" | "email" | "name">;

  @TypeGraphQL.Field(_type => PharmaciesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PharmaciesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
