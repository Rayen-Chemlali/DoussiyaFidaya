import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PharmaciesCreateInput } from "../../../inputs/PharmaciesCreateInput";
import { PharmaciesUpdateInput } from "../../../inputs/PharmaciesUpdateInput";
import { PharmaciesWhereUniqueInput } from "../../../inputs/PharmaciesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePharmaciesArgs {
  @TypeGraphQL.Field(_type => PharmaciesWhereUniqueInput, {
    nullable: false
  })
  where!: PharmaciesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PharmaciesCreateInput, {
    nullable: false
  })
  create!: PharmaciesCreateInput;

  @TypeGraphQL.Field(_type => PharmaciesUpdateInput, {
    nullable: false
  })
  update!: PharmaciesUpdateInput;
}
