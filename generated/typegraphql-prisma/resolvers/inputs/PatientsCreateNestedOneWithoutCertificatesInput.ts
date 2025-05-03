import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateOrConnectWithoutCertificatesInput } from "../inputs/PatientsCreateOrConnectWithoutCertificatesInput";
import { PatientsCreateWithoutCertificatesInput } from "../inputs/PatientsCreateWithoutCertificatesInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsCreateNestedOneWithoutCertificatesInput", {})
export class PatientsCreateNestedOneWithoutCertificatesInput {
  @TypeGraphQL.Field(_type => PatientsCreateWithoutCertificatesInput, {
    nullable: true
  })
  create?: PatientsCreateWithoutCertificatesInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateOrConnectWithoutCertificatesInput, {
    nullable: true
  })
  connectOrCreate?: PatientsCreateOrConnectWithoutCertificatesInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientsWhereUniqueInput | undefined;
}
