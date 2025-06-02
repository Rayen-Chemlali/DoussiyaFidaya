import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsAvgAggregate } from "../outputs/PatientsAvgAggregate";
import { PatientsCountAggregate } from "../outputs/PatientsCountAggregate";
import { PatientsMaxAggregate } from "../outputs/PatientsMaxAggregate";
import { PatientsMinAggregate } from "../outputs/PatientsMinAggregate";
import { PatientsSumAggregate } from "../outputs/PatientsSumAggregate";
import { patients_gender_enum } from "../../enums/patients_gender_enum";

@TypeGraphQL.ObjectType("PatientsGroupBy", {})
export class PatientsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cin!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_of_birth!: Date;

  @TypeGraphQL.Field(_type => patients_gender_enum, {
    nullable: false
  })
  gender!: "MALE" | "FEMALE" | "OTHER";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profile_image!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  general_medical_record_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_id!: string | null;

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
