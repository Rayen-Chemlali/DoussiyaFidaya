import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsCountAggregate } from "../outputs/PrescriptionsCountAggregate";
import { PrescriptionsMaxAggregate } from "../outputs/PrescriptionsMaxAggregate";
import { PrescriptionsMinAggregate } from "../outputs/PrescriptionsMinAggregate";
import { prescriptions_status_enum } from "../../enums/prescriptions_status_enum";

@TypeGraphQL.ObjectType("PrescriptionsGroupBy", {})
export class PrescriptionsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  instructions!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_signed!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  section!: string | null;

  @TypeGraphQL.Field(_type => prescriptions_status_enum, {
    nullable: false
  })
  status!: "ACTIVE" | "COMPLETED" | "CANCELLED";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  doctor_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patient_id!: string;

  @TypeGraphQL.Field(_type => PrescriptionsCountAggregate, {
    nullable: true
  })
  _count!: PrescriptionsCountAggregate | null;

  @TypeGraphQL.Field(_type => PrescriptionsMinAggregate, {
    nullable: true
  })
  _min!: PrescriptionsMinAggregate | null;

  @TypeGraphQL.Field(_type => PrescriptionsMaxAggregate, {
    nullable: true
  })
  _max!: PrescriptionsMaxAggregate | null;
}
