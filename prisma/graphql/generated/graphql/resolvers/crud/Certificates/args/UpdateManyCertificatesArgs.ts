import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CertificatesUpdateManyMutationInput } from "../../../inputs/CertificatesUpdateManyMutationInput";
import { CertificatesWhereInput } from "../../../inputs/CertificatesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCertificatesArgs {
  @TypeGraphQL.Field(_type => CertificatesUpdateManyMutationInput, {
    nullable: false
  })
  data!: CertificatesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CertificatesWhereInput, {
    nullable: true
  })
  where?: CertificatesWhereInput | undefined;
}
