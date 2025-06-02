import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateOrConnectWithoutCertificatesInput } from "../inputs/DoctorsCreateOrConnectWithoutCertificatesInput";
import { DoctorsCreateWithoutCertificatesInput } from "../inputs/DoctorsCreateWithoutCertificatesInput";
import { DoctorsUpdateToOneWithWhereWithoutCertificatesInput } from "../inputs/DoctorsUpdateToOneWithWhereWithoutCertificatesInput";
import { DoctorsUpsertWithoutCertificatesInput } from "../inputs/DoctorsUpsertWithoutCertificatesInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsUpdateOneWithoutCertificatesNestedInput", {})
export class DoctorsUpdateOneWithoutCertificatesNestedInput {
  @TypeGraphQL.Field(_type => DoctorsCreateWithoutCertificatesInput, {
    nullable: true
  })
  create?: DoctorsCreateWithoutCertificatesInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateOrConnectWithoutCertificatesInput, {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutCertificatesInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpsertWithoutCertificatesInput, {
    nullable: true
  })
  upsert?: DoctorsUpsertWithoutCertificatesInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  disconnect?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  delete?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateToOneWithWhereWithoutCertificatesInput, {
    nullable: true
  })
  update?: DoctorsUpdateToOneWithWhereWithoutCertificatesInput | undefined;
}
