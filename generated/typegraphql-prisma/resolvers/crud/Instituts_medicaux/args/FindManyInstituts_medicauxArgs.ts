import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Instituts_medicauxOrderByWithRelationInput } from "../../../inputs/Instituts_medicauxOrderByWithRelationInput";
import { Instituts_medicauxWhereInput } from "../../../inputs/Instituts_medicauxWhereInput";
import { Instituts_medicauxWhereUniqueInput } from "../../../inputs/Instituts_medicauxWhereUniqueInput";
import { Instituts_medicauxScalarFieldEnum } from "../../../../enums/Instituts_medicauxScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyInstituts_medicauxArgs {
  @TypeGraphQL.Field(_type => Instituts_medicauxWhereInput, {
    nullable: true
  })
  where?: Instituts_medicauxWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Instituts_medicauxOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Instituts_medicauxOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxWhereUniqueInput, {
    nullable: true
  })
  cursor?: Instituts_medicauxWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Instituts_medicauxScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "type"> | undefined;
}
