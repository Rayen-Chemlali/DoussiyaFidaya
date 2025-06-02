import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { prescriptions_status_enum } from "../../enums/prescriptions_status_enum";

@TypeGraphQL.ObjectType("PrescriptionsMinAggregate", {})
export class PrescriptionsMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  instructions!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  is_signed!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  section!: string | null;

  @TypeGraphQL.Field(_type => prescriptions_status_enum, {
    nullable: true
  })
  status!: "ACTIVE" | "COMPLETED" | "CANCELLED" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  doctor_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  patient_id!: string | null;
}
