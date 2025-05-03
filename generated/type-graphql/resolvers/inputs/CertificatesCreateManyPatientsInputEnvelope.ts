import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CertificatesCreateManyPatientsInput } from "../inputs/CertificatesCreateManyPatientsInput";

@TypeGraphQL.InputType("CertificatesCreateManyPatientsInputEnvelope", {})
export class CertificatesCreateManyPatientsInputEnvelope {
  @TypeGraphQL.Field(_type => [CertificatesCreateManyPatientsInput], {
    nullable: false
  })
  data!: CertificatesCreateManyPatientsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
