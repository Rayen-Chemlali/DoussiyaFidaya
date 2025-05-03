import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CertificatesOrderByWithAggregationInput } from "../../../inputs/CertificatesOrderByWithAggregationInput";
import { CertificatesScalarWhereWithAggregatesInput } from "../../../inputs/CertificatesScalarWhereWithAggregatesInput";
import { CertificatesWhereInput } from "../../../inputs/CertificatesWhereInput";
import { CertificatesScalarFieldEnum } from "../../../../enums/CertificatesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCertificatesArgs {
  @TypeGraphQL.Field(_type => CertificatesWhereInput, {
    nullable: true
  })
  where?: CertificatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CertificatesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CertificatesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CertificatesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "type" | "start_date" | "end_date" | "description" | "doctor_id" | "patient_id">;

  @TypeGraphQL.Field(_type => CertificatesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CertificatesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
