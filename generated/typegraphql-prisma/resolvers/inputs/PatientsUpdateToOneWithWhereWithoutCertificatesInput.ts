import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsUpdateWithoutCertificatesInput } from "../inputs/PatientsUpdateWithoutCertificatesInput";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";

@TypeGraphQL.InputType("PatientsUpdateToOneWithWhereWithoutCertificatesInput", {})
export class PatientsUpdateToOneWithWhereWithoutCertificatesInput {
  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateWithoutCertificatesInput, {
    nullable: false
  })
  data!: PatientsUpdateWithoutCertificatesInput;
}
