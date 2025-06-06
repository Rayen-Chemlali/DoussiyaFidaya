import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsWhereInput } from "../inputs/ConsultationsWhereInput";

@TypeGraphQL.InputType("ConsultationsNullableRelationFilter", {})
export class ConsultationsNullableRelationFilter {
  @TypeGraphQL.Field(_type => ConsultationsWhereInput, {
    nullable: true
  })
  is?: ConsultationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsWhereInput, {
    nullable: true
  })
  isNot?: ConsultationsWhereInput | undefined;
}
