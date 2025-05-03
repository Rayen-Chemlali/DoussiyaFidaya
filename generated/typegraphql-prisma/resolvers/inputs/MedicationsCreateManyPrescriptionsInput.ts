import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("MedicationsCreateManyPrescriptionsInput", {})
export class MedicationsCreateManyPrescriptionsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dosage!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  duration!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  frequency!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  quantity!: number;
}
