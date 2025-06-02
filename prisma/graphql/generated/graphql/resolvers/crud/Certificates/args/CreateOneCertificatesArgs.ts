import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CertificatesCreateInput } from "../../../inputs/CertificatesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCertificatesArgs {
  @TypeGraphQL.Field(_type => CertificatesCreateInput, {
    nullable: false
  })
  data!: CertificatesCreateInput;
}
