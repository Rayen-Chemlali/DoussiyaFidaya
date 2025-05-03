import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CertificatesUpdateInput } from "../../../inputs/CertificatesUpdateInput";
import { CertificatesWhereUniqueInput } from "../../../inputs/CertificatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCertificatesArgs {
  @TypeGraphQL.Field(_type => CertificatesUpdateInput, {
    nullable: false
  })
  data!: CertificatesUpdateInput;

  @TypeGraphQL.Field(_type => CertificatesWhereUniqueInput, {
    nullable: false
  })
  where!: CertificatesWhereUniqueInput;
}
