import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CertificatesCreateManyDoctorsInput } from "../inputs/CertificatesCreateManyDoctorsInput";

@TypeGraphQL.InputType("CertificatesCreateManyDoctorsInputEnvelope", {})
export class CertificatesCreateManyDoctorsInputEnvelope {
  @TypeGraphQL.Field(_type => [CertificatesCreateManyDoctorsInput], {
    nullable: false
  })
  data!: CertificatesCreateManyDoctorsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
