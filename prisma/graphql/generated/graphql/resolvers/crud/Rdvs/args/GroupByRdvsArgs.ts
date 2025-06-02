import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RdvsOrderByWithAggregationInput } from "../../../inputs/RdvsOrderByWithAggregationInput";
import { RdvsScalarWhereWithAggregatesInput } from "../../../inputs/RdvsScalarWhereWithAggregatesInput";
import { RdvsWhereInput } from "../../../inputs/RdvsWhereInput";
import { RdvsScalarFieldEnum } from "../../../../enums/RdvsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRdvsArgs {
  @TypeGraphQL.Field(_type => RdvsWhereInput, {
    nullable: true
  })
  where?: RdvsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RdvsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: RdvsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [RdvsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "date" | "time" | "patient_id" | "doctor_id" | "consultation_id" | "rdv_request_id">;

  @TypeGraphQL.Field(_type => RdvsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: RdvsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
