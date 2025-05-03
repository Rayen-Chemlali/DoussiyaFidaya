import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CertificatesOrderByWithRelationInput } from "../../../inputs/CertificatesOrderByWithRelationInput";
import { CertificatesWhereInput } from "../../../inputs/CertificatesWhereInput";
import { CertificatesWhereUniqueInput } from "../../../inputs/CertificatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCertificatesArgs {
  @TypeGraphQL.Field(_type => CertificatesWhereInput, {
    nullable: true
  })
  where?: CertificatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CertificatesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CertificatesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CertificatesWhereUniqueInput, {
    nullable: true
  })
  cursor?: CertificatesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
