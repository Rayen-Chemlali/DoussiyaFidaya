import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_requestsOrderByWithAggregationInput } from "../../../inputs/Lab_requestsOrderByWithAggregationInput";
import { Lab_requestsScalarWhereWithAggregatesInput } from "../../../inputs/Lab_requestsScalarWhereWithAggregatesInput";
import { Lab_requestsWhereInput } from "../../../inputs/Lab_requestsWhereInput";
import { Lab_requestsScalarFieldEnum } from "../../../../enums/Lab_requestsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLab_requestsArgs {
  @TypeGraphQL.Field(_type => Lab_requestsWhereInput, {
    nullable: true
  })
  where?: Lab_requestsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Lab_requestsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "type" | "priority" | "description" | "doctor_id" | "patient_id">;

  @TypeGraphQL.Field(_type => Lab_requestsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Lab_requestsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
