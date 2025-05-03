import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CertificatesCreateWithoutDoctorsInput } from "../inputs/CertificatesCreateWithoutDoctorsInput";
import { CertificatesUpdateWithoutDoctorsInput } from "../inputs/CertificatesUpdateWithoutDoctorsInput";
import { CertificatesWhereUniqueInput } from "../inputs/CertificatesWhereUniqueInput";

@TypeGraphQL.InputType("CertificatesUpsertWithWhereUniqueWithoutDoctorsInput", {})
export class CertificatesUpsertWithWhereUniqueWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => CertificatesWhereUniqueInput, {
    nullable: false
  })
  where!: CertificatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => CertificatesUpdateWithoutDoctorsInput, {
    nullable: false
  })
  update!: CertificatesUpdateWithoutDoctorsInput;

  @TypeGraphQL.Field(_type => CertificatesCreateWithoutDoctorsInput, {
    nullable: false
  })
  create!: CertificatesCreateWithoutDoctorsInput;
}
