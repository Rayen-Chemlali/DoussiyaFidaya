import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PharmaciesWhereUniqueInput } from "../../../inputs/PharmaciesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePharmaciesArgs {
  @TypeGraphQL.Field(_type => PharmaciesWhereUniqueInput, {
    nullable: false
  })
  where!: PharmaciesWhereUniqueInput;
}
