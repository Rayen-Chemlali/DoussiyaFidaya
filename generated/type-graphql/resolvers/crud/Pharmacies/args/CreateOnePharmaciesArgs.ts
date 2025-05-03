import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PharmaciesCreateInput } from "../../../inputs/PharmaciesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePharmaciesArgs {
  @TypeGraphQL.Field(_type => PharmaciesCreateInput, {
    nullable: false
  })
  data!: PharmaciesCreateInput;
}
