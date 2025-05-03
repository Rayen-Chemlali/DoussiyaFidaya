import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CertificatesWhereInput } from "../inputs/CertificatesWhereInput";

@TypeGraphQL.InputType("CertificatesListRelationFilter", {})
export class CertificatesListRelationFilter {
  @TypeGraphQL.Field(_type => CertificatesWhereInput, {
    nullable: true
  })
  every?: CertificatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => CertificatesWhereInput, {
    nullable: true
  })
  some?: CertificatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => CertificatesWhereInput, {
    nullable: true
  })
  none?: CertificatesWhereInput | undefined;
}
