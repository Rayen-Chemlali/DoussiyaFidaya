import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PharmaciesOrderByWithRelationInput } from "../../../inputs/PharmaciesOrderByWithRelationInput";
import { PharmaciesWhereInput } from "../../../inputs/PharmaciesWhereInput";
import { PharmaciesWhereUniqueInput } from "../../../inputs/PharmaciesWhereUniqueInput";
import { PharmaciesScalarFieldEnum } from "../../../../enums/PharmaciesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPharmaciesOrThrowArgs {
  @TypeGraphQL.Field(_type => PharmaciesWhereInput, {
    nullable: true
  })
  where?: PharmaciesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PharmaciesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PharmaciesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PharmaciesWhereUniqueInput, {
    nullable: true
  })
  cursor?: PharmaciesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PharmaciesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "address" | "phone" | "email" | "name"> | undefined;
}
