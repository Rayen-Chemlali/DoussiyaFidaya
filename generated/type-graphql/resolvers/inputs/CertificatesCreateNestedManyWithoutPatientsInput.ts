import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CertificatesCreateManyPatientsInputEnvelope } from "../inputs/CertificatesCreateManyPatientsInputEnvelope";
import { CertificatesCreateOrConnectWithoutPatientsInput } from "../inputs/CertificatesCreateOrConnectWithoutPatientsInput";
import { CertificatesCreateWithoutPatientsInput } from "../inputs/CertificatesCreateWithoutPatientsInput";
import { CertificatesWhereUniqueInput } from "../inputs/CertificatesWhereUniqueInput";

@TypeGraphQL.InputType("CertificatesCreateNestedManyWithoutPatientsInput", {})
export class CertificatesCreateNestedManyWithoutPatientsInput {
  @TypeGraphQL.Field(_type => [CertificatesCreateWithoutPatientsInput], {
    nullable: true
  })
  create?: CertificatesCreateWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CertificatesCreateOrConnectWithoutPatientsInput], {
    nullable: true
  })
  connectOrCreate?: CertificatesCreateOrConnectWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => CertificatesCreateManyPatientsInputEnvelope, {
    nullable: true
  })
  createMany?: CertificatesCreateManyPatientsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CertificatesWhereUniqueInput], {
    nullable: true
  })
  connect?: CertificatesWhereUniqueInput[] | undefined;
}
