import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("MedicationsMinAggregate", {})
export class MedicationsMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dosage!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  duration!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  frequency!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  quantity!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  prescription_id!: string | null;
}
