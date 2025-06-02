import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CertificatesCountOrderByAggregateInput } from "../inputs/CertificatesCountOrderByAggregateInput";
import { CertificatesMaxOrderByAggregateInput } from "../inputs/CertificatesMaxOrderByAggregateInput";
import { CertificatesMinOrderByAggregateInput } from "../inputs/CertificatesMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CertificatesOrderByWithAggregationInput", {})
export class CertificatesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  start_date?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  end_date?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  doctor_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  patient_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CertificatesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CertificatesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CertificatesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CertificatesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CertificatesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CertificatesMinOrderByAggregateInput | undefined;
}
