import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CertificatesCountAggregate } from "../outputs/CertificatesCountAggregate";
import { CertificatesMaxAggregate } from "../outputs/CertificatesMaxAggregate";
import { CertificatesMinAggregate } from "../outputs/CertificatesMinAggregate";

@TypeGraphQL.ObjectType("AggregateCertificates", {})
export class AggregateCertificates {
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
