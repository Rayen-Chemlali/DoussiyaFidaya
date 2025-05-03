import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CertificatesWhereInput } from "../../inputs/CertificatesWhereInput";

@TypeGraphQL.ArgsType()
export class PatientsCountCertificatesArgs {
  @TypeGraphQL.Field(_type => CertificatesWhereInput, {
    nullable: true
  })
  where?: CertificatesWhereInput | undefined;
}
