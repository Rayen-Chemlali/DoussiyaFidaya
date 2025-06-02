import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsUpdateWithoutCertificatesInput } from "../inputs/DoctorsUpdateWithoutCertificatesInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";

@TypeGraphQL.InputType("DoctorsUpdateToOneWithWhereWithoutCertificatesInput", {})
export class DoctorsUpdateToOneWithWhereWithoutCertificatesInput {
  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutCertificatesInput, {
    nullable: false
  })
  data!: DoctorsUpdateWithoutCertificatesInput;
}
