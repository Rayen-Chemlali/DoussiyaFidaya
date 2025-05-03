import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CertificatesScalarWhereInput } from "../inputs/CertificatesScalarWhereInput";
import { CertificatesUpdateManyMutationInput } from "../inputs/CertificatesUpdateManyMutationInput";

@TypeGraphQL.InputType("CertificatesUpdateManyWithWhereWithoutPatientsInput", {})
export class CertificatesUpdateManyWithWhereWithoutPatientsInput {
  @TypeGraphQL.Field(_type => CertificatesScalarWhereInput, {
    nullable: false
  })
  where!: CertificatesScalarWhereInput;

  @TypeGraphQL.Field(_type => CertificatesUpdateManyMutationInput, {
    nullable: false
  })
  data!: CertificatesUpdateManyMutationInput;
}
