import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CertificatesCreateInput } from "../../../inputs/CertificatesCreateInput";
import { CertificatesUpdateInput } from "../../../inputs/CertificatesUpdateInput";
import { CertificatesWhereUniqueInput } from "../../../inputs/CertificatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCertificatesArgs {
  @TypeGraphQL.Field(_type => CertificatesWhereUniqueInput, {
    nullable: false
  })
  where!: CertificatesWhereUniqueInput;

  @TypeGraphQL.Field(_type => CertificatesCreateInput, {
    nullable: false
  })
  create!: CertificatesCreateInput;

  @TypeGraphQL.Field(_type => CertificatesUpdateInput, {
    nullable: false
  })
  update!: CertificatesUpdateInput;
}
