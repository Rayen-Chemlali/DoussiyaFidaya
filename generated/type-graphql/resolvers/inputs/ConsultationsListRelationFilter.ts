import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsWhereInput } from "../inputs/ConsultationsWhereInput";

@TypeGraphQL.InputType("ConsultationsListRelationFilter", {})
export class ConsultationsListRelationFilter {
  @TypeGraphQL.Field(_type => ConsultationsWhereInput, {
    nullable: true
  })
  every?: ConsultationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsWhereInput, {
    nullable: true
  })
  some?: ConsultationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsWhereInput, {
    nullable: true
  })
  none?: ConsultationsWhereInput | undefined;
}
