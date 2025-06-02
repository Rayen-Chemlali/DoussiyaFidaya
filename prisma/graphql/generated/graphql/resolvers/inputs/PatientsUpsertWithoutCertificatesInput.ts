import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateWithoutCertificatesInput } from "../inputs/PatientsCreateWithoutCertificatesInput";
import { PatientsUpdateWithoutCertificatesInput } from "../inputs/PatientsUpdateWithoutCertificatesInput";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";

@TypeGraphQL.InputType("PatientsUpsertWithoutCertificatesInput", {})
export class PatientsUpsertWithoutCertificatesInput {
  @TypeGraphQL.Field(_type => PatientsUpdateWithoutCertificatesInput, {
    nullable: false
  })
  update!: PatientsUpdateWithoutCertificatesInput;

  @TypeGraphQL.Field(_type => PatientsCreateWithoutCertificatesInput, {
    nullable: false
  })
  create!: PatientsCreateWithoutCertificatesInput;

  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;
}
