import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CertificatesCreateWithoutDoctorsInput } from "../inputs/CertificatesCreateWithoutDoctorsInput";
import { CertificatesWhereUniqueInput } from "../inputs/CertificatesWhereUniqueInput";

@TypeGraphQL.InputType("CertificatesCreateOrConnectWithoutDoctorsInput", {})
export class CertificatesCreateOrConnectWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => CertificatesWhereUniqueInput, {
    nullable: false
  })
  where!: CertificatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => CertificatesCreateWithoutDoctorsInput, {
    nullable: false
  })
  create!: CertificatesCreateWithoutDoctorsInput;
}
