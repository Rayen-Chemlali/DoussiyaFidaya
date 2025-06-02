import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rdv_requestsOrderByWithAggregationInput } from "../../../inputs/Rdv_requestsOrderByWithAggregationInput";
import { Rdv_requestsScalarWhereWithAggregatesInput } from "../../../inputs/Rdv_requestsScalarWhereWithAggregatesInput";
import { Rdv_requestsWhereInput } from "../../../inputs/Rdv_requestsWhereInput";
import { Rdv_requestsScalarFieldEnum } from "../../../../enums/Rdv_requestsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRdv_requestsArgs {
  @TypeGraphQL.Field(_type => Rdv_requestsWhereInput, {
    nullable: true
  })
  where?: Rdv_requestsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Rdv_requestsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "date" | "time" | "Motif" | "Status" | "patient_id" | "doctor_id" | "rdv_id">;

  @TypeGraphQL.Field(_type => Rdv_requestsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Rdv_requestsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
