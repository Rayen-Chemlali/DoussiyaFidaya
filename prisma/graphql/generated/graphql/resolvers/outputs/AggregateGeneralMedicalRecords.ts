import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GeneralMedicalRecordsAvgAggregate } from "../outputs/GeneralMedicalRecordsAvgAggregate";
import { GeneralMedicalRecordsCountAggregate } from "../outputs/GeneralMedicalRecordsCountAggregate";
import { GeneralMedicalRecordsMaxAggregate } from "../outputs/GeneralMedicalRecordsMaxAggregate";
import { GeneralMedicalRecordsMinAggregate } from "../outputs/GeneralMedicalRecordsMinAggregate";
import { GeneralMedicalRecordsSumAggregate } from "../outputs/GeneralMedicalRecordsSumAggregate";

@TypeGraphQL.ObjectType("AggregateGeneralMedicalRecords", {})
export class AggregateGeneralMedicalRecords {
  @TypeGraphQL.Field(_type => GeneralMedicalRecordsCountAggregate, {
    nullable: true
  })
  _count!: GeneralMedicalRecordsCountAggregate | null;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsAvgAggregate, {
    nullable: true
  })
  _avg!: GeneralMedicalRecordsAvgAggregate | null;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsSumAggregate, {
    nullable: true
  })
  _sum!: GeneralMedicalRecordsSumAggregate | null;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsMinAggregate, {
    nullable: true
  })
  _min!: GeneralMedicalRecordsMinAggregate | null;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsMaxAggregate, {
    nullable: true
  })
  _max!: GeneralMedicalRecordsMaxAggregate | null;
}
