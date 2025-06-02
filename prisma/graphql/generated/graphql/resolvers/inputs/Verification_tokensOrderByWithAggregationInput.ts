import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Verification_tokensAvgOrderByAggregateInput } from "../inputs/Verification_tokensAvgOrderByAggregateInput";
import { Verification_tokensCountOrderByAggregateInput } from "../inputs/Verification_tokensCountOrderByAggregateInput";
import { Verification_tokensMaxOrderByAggregateInput } from "../inputs/Verification_tokensMaxOrderByAggregateInput";
import { Verification_tokensMinOrderByAggregateInput } from "../inputs/Verification_tokensMinOrderByAggregateInput";
import { Verification_tokensSumOrderByAggregateInput } from "../inputs/Verification_tokensSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Verification_tokensOrderByWithAggregationInput", {})
export class Verification_tokensOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  token?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  numberofTries?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  expireAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Verification_tokensCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Verification_tokensCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Verification_tokensAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Verification_tokensAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Verification_tokensMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Verification_tokensMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Verification_tokensMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Verification_tokensMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Verification_tokensSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Verification_tokensSumOrderByAggregateInput | undefined;
}
