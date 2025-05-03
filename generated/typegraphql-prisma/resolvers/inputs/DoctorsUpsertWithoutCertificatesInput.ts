import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateWithoutCertificatesInput } from "../inputs/DoctorsCreateWithoutCertificatesInput";
import { DoctorsUpdateWithoutCertificatesInput } from "../inputs/DoctorsUpdateWithoutCertificatesInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";

@TypeGraphQL.InputType("DoctorsUpsertWithoutCertificatesInput", {})
export class DoctorsUpsertWithoutCertificatesInput {
  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutCertificatesInput, {
    nullable: false
  })
  update!: DoctorsUpdateWithoutCertificatesInput;

  @TypeGraphQL.Field(_type => DoctorsCreateWithoutCertificatesInput, {
    nullable: false
  })
  create!: DoctorsCreateWithoutCertificatesInput;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;
}
