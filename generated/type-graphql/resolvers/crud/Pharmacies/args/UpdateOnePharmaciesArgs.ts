import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PharmaciesUpdateInput } from "../../../inputs/PharmaciesUpdateInput";
import { PharmaciesWhereUniqueInput } from "../../../inputs/PharmaciesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePharmaciesArgs {
  @TypeGraphQL.Field(_type => PharmaciesUpdateInput, {
    nullable: false
  })
  data!: PharmaciesUpdateInput;

  @TypeGraphQL.Field(_type => PharmaciesWhereUniqueInput, {
    nullable: false
  })
  where!: PharmaciesWhereUniqueInput;
}
