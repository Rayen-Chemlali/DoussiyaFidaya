import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CertificatesCreateWithoutPatientsInput } from "../inputs/CertificatesCreateWithoutPatientsInput";
import { CertificatesWhereUniqueInput } from "../inputs/CertificatesWhereUniqueInput";

@TypeGraphQL.InputType("CertificatesCreateOrConnectWithoutPatientsInput", {})
export class CertificatesCreateOrConnectWithoutPatientsInput {
  @TypeGraphQL.Field(_type => CertificatesWhereUniqueInput, {
    nullable: false
  })
  where!: CertificatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => CertificatesCreateWithoutPatientsInput, {
    nullable: false
  })
  create!: CertificatesCreateWithoutPatientsInput;
}
