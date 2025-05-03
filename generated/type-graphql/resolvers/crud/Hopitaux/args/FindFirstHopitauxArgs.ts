import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HopitauxOrderByWithRelationInput } from "../../../inputs/HopitauxOrderByWithRelationInput";
import { HopitauxWhereInput } from "../../../inputs/HopitauxWhereInput";
import { HopitauxWhereUniqueInput } from "../../../inputs/HopitauxWhereUniqueInput";
import { HopitauxScalarFieldEnum } from "../../../../enums/HopitauxScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstHopitauxArgs {
  @TypeGraphQL.Field(_type => HopitauxWhereInput, {
    nullable: true
  })
  where?: HopitauxWhereInput | undefined;

  @TypeGraphQL.Field(_type => [HopitauxOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: HopitauxOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => HopitauxWhereUniqueInput, {
    nullable: true
  })
  cursor?: HopitauxWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [HopitauxScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "type" | "name" | "address" | "phone" | "email"> | undefined;
}
