import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CertificatesCreateWithoutPatientsInput } from "../inputs/CertificatesCreateWithoutPatientsInput";
import { CertificatesUpdateWithoutPatientsInput } from "../inputs/CertificatesUpdateWithoutPatientsInput";
import { CertificatesWhereUniqueInput } from "../inputs/CertificatesWhereUniqueInput";

@TypeGraphQL.InputType("CertificatesUpsertWithWhereUniqueWithoutPatientsInput", {})
export class CertificatesUpsertWithWhereUniqueWithoutPatientsInput {
  @TypeGraphQL.Field(_type => CertificatesWhereUniqueInput, {
    nullable: false
  })
  where!: CertificatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => CertificatesUpdateWithoutPatientsInput, {
    nullable: false
  })
  update!: CertificatesUpdateWithoutPatientsInput;

  @TypeGraphQL.Field(_type => CertificatesCreateWithoutPatientsInput, {
    nullable: false
  })
  create!: CertificatesCreateWithoutPatientsInput;
}
