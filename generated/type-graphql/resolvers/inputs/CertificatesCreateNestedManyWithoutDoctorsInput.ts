import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CertificatesCreateManyDoctorsInputEnvelope } from "../inputs/CertificatesCreateManyDoctorsInputEnvelope";
import { CertificatesCreateOrConnectWithoutDoctorsInput } from "../inputs/CertificatesCreateOrConnectWithoutDoctorsInput";
import { CertificatesCreateWithoutDoctorsInput } from "../inputs/CertificatesCreateWithoutDoctorsInput";
import { CertificatesWhereUniqueInput } from "../inputs/CertificatesWhereUniqueInput";

@TypeGraphQL.InputType("CertificatesCreateNestedManyWithoutDoctorsInput", {})
export class CertificatesCreateNestedManyWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => [CertificatesCreateWithoutDoctorsInput], {
    nullable: true
  })
  create?: CertificatesCreateWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CertificatesCreateOrConnectWithoutDoctorsInput], {
    nullable: true
  })
  connectOrCreate?: CertificatesCreateOrConnectWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => CertificatesCreateManyDoctorsInputEnvelope, {
    nullable: true
  })
  createMany?: CertificatesCreateManyDoctorsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CertificatesWhereUniqueInput], {
    nullable: true
  })
  connect?: CertificatesWhereUniqueInput[] | undefined;
}
