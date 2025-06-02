import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GeneralMedicalRecordsOrderByWithAggregationInput } from "../../../inputs/GeneralMedicalRecordsOrderByWithAggregationInput";
import { GeneralMedicalRecordsScalarWhereWithAggregatesInput } from "../../../inputs/GeneralMedicalRecordsScalarWhereWithAggregatesInput";
import { GeneralMedicalRecordsWhereInput } from "../../../inputs/GeneralMedicalRecordsWhereInput";
import { GeneralMedicalRecordsScalarFieldEnum } from "../../../../enums/GeneralMedicalRecordsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGeneralMedicalRecordsArgs {
  @TypeGraphQL.Field(_type => GeneralMedicalRecordsWhereInput, {
    nullable: true
  })
  where?: GeneralMedicalRecordsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GeneralMedicalRecordsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GeneralMedicalRecordsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GeneralMedicalRecordsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "allergies" | "bloodType" | "birthDate" | "height" | "weight" | "patient_id">;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GeneralMedicalRecordsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
