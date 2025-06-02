import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MedicationsWhereInput } from "../inputs/MedicationsWhereInput";

@TypeGraphQL.InputType("MedicationsListRelationFilter", {})
export class MedicationsListRelationFilter {
  @TypeGraphQL.Field(_type => MedicationsWhereInput, {
    nullable: true
  })
  every?: MedicationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MedicationsWhereInput, {
    nullable: true
  })
  some?: MedicationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MedicationsWhereInput, {
    nullable: true
  })
  none?: MedicationsWhereInput | undefined;
}
