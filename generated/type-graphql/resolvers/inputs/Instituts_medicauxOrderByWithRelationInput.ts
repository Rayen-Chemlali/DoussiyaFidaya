import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsOrderByRelationAggregateInput } from "../inputs/AuthorizationsOrderByRelationAggregateInput";
import { ConsultationsOrderByRelationAggregateInput } from "../inputs/ConsultationsOrderByRelationAggregateInput";
import { DoctorsOrderByRelationAggregateInput } from "../inputs/DoctorsOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Instituts_medicauxOrderByWithRelationInput", {})
export class Instituts_medicauxOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AuthorizationsOrderByRelationAggregateInput, {
    nullable: true
  })
  authorizations?: AuthorizationsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsOrderByRelationAggregateInput, {
    nullable: true
  })
  consultations?: ConsultationsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsOrderByRelationAggregateInput, {
    nullable: true
  })
  doctors?: DoctorsOrderByRelationAggregateInput | undefined;
}
