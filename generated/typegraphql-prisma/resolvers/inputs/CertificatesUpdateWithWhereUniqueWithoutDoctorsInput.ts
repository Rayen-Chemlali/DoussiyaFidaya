import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CertificatesUpdateWithoutDoctorsInput } from "../inputs/CertificatesUpdateWithoutDoctorsInput";
import { CertificatesWhereUniqueInput } from "../inputs/CertificatesWhereUniqueInput";

@TypeGraphQL.InputType("CertificatesUpdateWithWhereUniqueWithoutDoctorsInput", {})
export class CertificatesUpdateWithWhereUniqueWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => CertificatesWhereUniqueInput, {
    nullable: false
  })
  where!: CertificatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => CertificatesUpdateWithoutDoctorsInput, {
    nullable: false
  })
  data!: CertificatesUpdateWithoutDoctorsInput;
}
