import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CertificatesWhereInput } from "../../../inputs/CertificatesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCertificatesArgs {
  @TypeGraphQL.Field(_type => CertificatesWhereInput, {
    nullable: true
  })
  where?: CertificatesWhereInput | undefined;
}
