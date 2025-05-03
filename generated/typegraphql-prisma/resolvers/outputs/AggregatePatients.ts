import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsAvgAggregate } from "../outputs/PatientsAvgAggregate";
import { PatientsCountAggregate } from "../outputs/PatientsCountAggregate";
import { PatientsMaxAggregate } from "../outputs/PatientsMaxAggregate";
import { PatientsMinAggregate } from "../outputs/PatientsMinAggregate";
import { PatientsSumAggregate } from "../outputs/PatientsSumAggregate";

@TypeGraphQL.ObjectType("AggregatePatients", {})
export class AggregatePatients {
  @TypeGraphQL.Field(_type => PatientsCountAggregate, {
    nullable: true
  })
  _count!: PatientsCountAggregate | null;

  @TypeGraphQL.Field(_type => PatientsAvgAggregate, {
    nullable: true
  })
  _avg!: PatientsAvgAggregate | null;

  @TypeGraphQL.Field(_type => PatientsSumAggregate, {
    nullable: true
  })
  _sum!: PatientsSumAggregate | null;

  @TypeGraphQL.Field(_type => PatientsMinAggregate, {
    nullable: true
  })
  _min!: PatientsMinAggregate | null;

  @TypeGraphQL.Field(_type => PatientsMaxAggregate, {
    nullable: true
  })
  _max!: PatientsMaxAggregate | null;
}
