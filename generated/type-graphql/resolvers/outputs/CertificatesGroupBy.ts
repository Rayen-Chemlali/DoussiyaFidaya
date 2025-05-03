import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CertificatesCountAggregate } from "../outputs/CertificatesCountAggregate";
import { CertificatesMaxAggregate } from "../outputs/CertificatesMaxAggregate";
import { CertificatesMinAggregate } from "../outputs/CertificatesMinAggregate";

@TypeGraphQL.ObjectType("CertificatesGroupBy", {})
export class CertificatesGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  start_date!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  end_date!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  doctor_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patient_id!: string;

  @TypeGraphQL.Field(_type => CertificatesCountAggregate, {
    nullable: true
  })
  _count!: CertificatesCountAggregate | null;

  @TypeGraphQL.Field(_type => CertificatesMinAggregate, {
    nullable: true
  })
  _min!: CertificatesMinAggregate | null;

  @TypeGraphQL.Field(_type => CertificatesMaxAggregate, {
    nullable: true
  })
  _max!: CertificatesMaxAggregate | null;
}
