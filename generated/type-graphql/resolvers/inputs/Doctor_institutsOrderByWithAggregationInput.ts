import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Doctor_institutsCountOrderByAggregateInput } from "../inputs/Doctor_institutsCountOrderByAggregateInput";
import { Doctor_institutsMaxOrderByAggregateInput } from "../inputs/Doctor_institutsMaxOrderByAggregateInput";
import { Doctor_institutsMinOrderByAggregateInput } from "../inputs/Doctor_institutsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Doctor_institutsOrderByWithAggregationInput", {})
export class Doctor_institutsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  doctor_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  institut_medical_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Doctor_institutsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Doctor_institutsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Doctor_institutsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Doctor_institutsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Doctor_institutsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Doctor_institutsMinOrderByAggregateInput | undefined;
}
