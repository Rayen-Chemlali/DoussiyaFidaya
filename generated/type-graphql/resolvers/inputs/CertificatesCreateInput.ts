import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateNestedOneWithoutCertificatesInput } from "../inputs/DoctorsCreateNestedOneWithoutCertificatesInput";
import { PatientsCreateNestedOneWithoutCertificatesInput } from "../inputs/PatientsCreateNestedOneWithoutCertificatesInput";

@TypeGraphQL.InputType("CertificatesCreateInput", {})
export class CertificatesCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  start_date?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  end_date?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateNestedOneWithoutCertificatesInput, {
    nullable: true
  })
  doctors?: DoctorsCreateNestedOneWithoutCertificatesInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateNestedOneWithoutCertificatesInput, {
    nullable: false
  })
  patients!: PatientsCreateNestedOneWithoutCertificatesInput;
}
