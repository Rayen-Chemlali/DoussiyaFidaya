import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrescriptionsOrderByWithAggregationInput } from "../../../inputs/PrescriptionsOrderByWithAggregationInput";
import { PrescriptionsScalarWhereWithAggregatesInput } from "../../../inputs/PrescriptionsScalarWhereWithAggregatesInput";
import { PrescriptionsWhereInput } from "../../../inputs/PrescriptionsWhereInput";
import { PrescriptionsScalarFieldEnum } from "../../../../enums/PrescriptionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPrescriptionsArgs {
  @TypeGraphQL.Field(_type => PrescriptionsWhereInput, {
    nullable: true
  })
  where?: PrescriptionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PrescriptionsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "date" | "instructions" | "is_signed" | "section" | "status" | "updated_at" | "doctor_id" | "patient_id">;

  @TypeGraphQL.Field(_type => PrescriptionsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PrescriptionsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
