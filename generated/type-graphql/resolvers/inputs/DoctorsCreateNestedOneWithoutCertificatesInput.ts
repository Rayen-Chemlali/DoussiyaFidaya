import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateOrConnectWithoutCertificatesInput } from "../inputs/DoctorsCreateOrConnectWithoutCertificatesInput";
import { DoctorsCreateWithoutCertificatesInput } from "../inputs/DoctorsCreateWithoutCertificatesInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsCreateNestedOneWithoutCertificatesInput", {})
export class DoctorsCreateNestedOneWithoutCertificatesInput {
  @TypeGraphQL.Field(_type => DoctorsCreateWithoutCertificatesInput, {
    nullable: true
  })
  create?: DoctorsCreateWithoutCertificatesInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateOrConnectWithoutCertificatesInput, {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutCertificatesInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorsWhereUniqueInput | undefined;
}
