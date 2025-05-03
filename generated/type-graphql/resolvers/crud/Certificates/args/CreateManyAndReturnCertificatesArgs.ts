import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CertificatesCreateManyInput } from "../../../inputs/CertificatesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnCertificatesArgs {
  @TypeGraphQL.Field(_type => [CertificatesCreateManyInput], {
    nullable: false
  })
  data!: CertificatesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
