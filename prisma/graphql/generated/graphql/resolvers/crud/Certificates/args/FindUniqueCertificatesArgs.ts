import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CertificatesWhereUniqueInput } from "../../../inputs/CertificatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCertificatesArgs {
  @TypeGraphQL.Field(_type => CertificatesWhereUniqueInput, {
    nullable: false
  })
  where!: CertificatesWhereUniqueInput;
}
