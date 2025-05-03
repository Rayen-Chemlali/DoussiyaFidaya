import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationsOrderByWithAggregationInput } from "../../../inputs/ConsultationsOrderByWithAggregationInput";
import { ConsultationsScalarWhereWithAggregatesInput } from "../../../inputs/ConsultationsScalarWhereWithAggregatesInput";
import { ConsultationsWhereInput } from "../../../inputs/ConsultationsWhereInput";
import { ConsultationsScalarFieldEnum } from "../../../../enums/ConsultationsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByConsultationsArgs {
  @TypeGraphQL.Field(_type => ConsultationsWhereInput, {
    nullable: true
  })
  where?: ConsultationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ConsultationsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "section" | "date" | "notes" | "measures" | "doctor_id" | "institut_medical_id" | "prescription_id" | "patient_id">;

  @TypeGraphQL.Field(_type => ConsultationsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ConsultationsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
