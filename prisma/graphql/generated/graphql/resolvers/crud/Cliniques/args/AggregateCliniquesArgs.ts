import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CliniquesOrderByWithRelationInput } from "../../../inputs/CliniquesOrderByWithRelationInput";
import { CliniquesWhereInput } from "../../../inputs/CliniquesWhereInput";
import { CliniquesWhereUniqueInput } from "../../../inputs/CliniquesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCliniquesArgs {
  @TypeGraphQL.Field(_type => CliniquesWhereInput, {
    nullable: true
  })
  where?: CliniquesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CliniquesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CliniquesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CliniquesWhereUniqueInput, {
    nullable: true
  })
  cursor?: CliniquesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
