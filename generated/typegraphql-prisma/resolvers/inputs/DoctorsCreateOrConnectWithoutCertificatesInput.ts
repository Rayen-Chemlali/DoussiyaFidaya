import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateWithoutCertificatesInput } from "../inputs/DoctorsCreateWithoutCertificatesInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsCreateOrConnectWithoutCertificatesInput", {})
export class DoctorsCreateOrConnectWithoutCertificatesInput {
  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => DoctorsCreateWithoutCertificatesInput, {
    nullable: false
  })
  create!: DoctorsCreateWithoutCertificatesInput;
}
