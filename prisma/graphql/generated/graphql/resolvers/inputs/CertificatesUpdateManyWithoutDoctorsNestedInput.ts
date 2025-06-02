import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CertificatesCreateManyDoctorsInputEnvelope } from "../inputs/CertificatesCreateManyDoctorsInputEnvelope";
import { CertificatesCreateOrConnectWithoutDoctorsInput } from "../inputs/CertificatesCreateOrConnectWithoutDoctorsInput";
import { CertificatesCreateWithoutDoctorsInput } from "../inputs/CertificatesCreateWithoutDoctorsInput";
import { CertificatesScalarWhereInput } from "../inputs/CertificatesScalarWhereInput";
import { CertificatesUpdateManyWithWhereWithoutDoctorsInput } from "../inputs/CertificatesUpdateManyWithWhereWithoutDoctorsInput";
import { CertificatesUpdateWithWhereUniqueWithoutDoctorsInput } from "../inputs/CertificatesUpdateWithWhereUniqueWithoutDoctorsInput";
import { CertificatesUpsertWithWhereUniqueWithoutDoctorsInput } from "../inputs/CertificatesUpsertWithWhereUniqueWithoutDoctorsInput";
import { CertificatesWhereUniqueInput } from "../inputs/CertificatesWhereUniqueInput";

@TypeGraphQL.InputType("CertificatesUpdateManyWithoutDoctorsNestedInput", {})
export class CertificatesUpdateManyWithoutDoctorsNestedInput {
  @TypeGraphQL.Field(_type => [CertificatesCreateWithoutDoctorsInput], {
    nullable: true
  })
  create?: CertificatesCreateWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CertificatesCreateOrConnectWithoutDoctorsInput], {
    nullable: true
  })
  connectOrCreate?: CertificatesCreateOrConnectWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CertificatesUpsertWithWhereUniqueWithoutDoctorsInput], {
    nullable: true
  })
  upsert?: CertificatesUpsertWithWhereUniqueWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => CertificatesCreateManyDoctorsInputEnvelope, {
    nullable: true
  })
  createMany?: CertificatesCreateManyDoctorsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CertificatesWhereUniqueInput], {
    nullable: true
  })
  set?: CertificatesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CertificatesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CertificatesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CertificatesWhereUniqueInput], {
    nullable: true
  })
  delete?: CertificatesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CertificatesWhereUniqueInput], {
    nullable: true
  })
  connect?: CertificatesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CertificatesUpdateWithWhereUniqueWithoutDoctorsInput], {
    nullable: true
  })
  update?: CertificatesUpdateWithWhereUniqueWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CertificatesUpdateManyWithWhereWithoutDoctorsInput], {
    nullable: true
  })
  updateMany?: CertificatesUpdateManyWithWhereWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CertificatesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CertificatesScalarWhereInput[] | undefined;
}
