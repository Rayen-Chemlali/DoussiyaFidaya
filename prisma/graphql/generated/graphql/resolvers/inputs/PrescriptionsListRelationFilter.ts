import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsWhereInput } from "../inputs/PrescriptionsWhereInput";

@TypeGraphQL.InputType("PrescriptionsListRelationFilter", {})
export class PrescriptionsListRelationFilter {
  @TypeGraphQL.Field(_type => PrescriptionsWhereInput, {
    nullable: true
  })
  every?: PrescriptionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsWhereInput, {
    nullable: true
  })
  some?: PrescriptionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsWhereInput, {
    nullable: true
  })
  none?: PrescriptionsWhereInput | undefined;
}
