import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CertificatesCreateManyPatientsInputEnvelope } from "../inputs/CertificatesCreateManyPatientsInputEnvelope";
import { CertificatesCreateOrConnectWithoutPatientsInput } from "../inputs/CertificatesCreateOrConnectWithoutPatientsInput";
import { CertificatesCreateWithoutPatientsInput } from "../inputs/CertificatesCreateWithoutPatientsInput";
import { CertificatesScalarWhereInput } from "../inputs/CertificatesScalarWhereInput";
import { CertificatesUpdateManyWithWhereWithoutPatientsInput } from "../inputs/CertificatesUpdateManyWithWhereWithoutPatientsInput";
import { CertificatesUpdateWithWhereUniqueWithoutPatientsInput } from "../inputs/CertificatesUpdateWithWhereUniqueWithoutPatientsInput";
import { CertificatesUpsertWithWhereUniqueWithoutPatientsInput } from "../inputs/CertificatesUpsertWithWhereUniqueWithoutPatientsInput";
import { CertificatesWhereUniqueInput } from "../inputs/CertificatesWhereUniqueInput";

@TypeGraphQL.InputType("CertificatesUpdateManyWithoutPatientsNestedInput", {})
export class CertificatesUpdateManyWithoutPatientsNestedInput {
  @TypeGraphQL.Field(_type => [CertificatesCreateWithoutPatientsInput], {
    nullable: true
  })
  create?: CertificatesCreateWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CertificatesCreateOrConnectWithoutPatientsInput], {
    nullable: true
  })
  connectOrCreate?: CertificatesCreateOrConnectWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CertificatesUpsertWithWhereUniqueWithoutPatientsInput], {
    nullable: true
  })
  upsert?: CertificatesUpsertWithWhereUniqueWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => CertificatesCreateManyPatientsInputEnvelope, {
    nullable: true
  })
  createMany?: CertificatesCreateManyPatientsInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CertificatesUpdateWithWhereUniqueWithoutPatientsInput], {
    nullable: true
  })
  update?: CertificatesUpdateWithWhereUniqueWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CertificatesUpdateManyWithWhereWithoutPatientsInput], {
    nullable: true
  })
  updateMany?: CertificatesUpdateManyWithWhereWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CertificatesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CertificatesScalarWhereInput[] | undefined;
}
