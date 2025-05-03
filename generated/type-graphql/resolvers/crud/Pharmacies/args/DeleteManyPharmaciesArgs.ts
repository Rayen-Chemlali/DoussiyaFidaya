import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PharmaciesWhereInput } from "../../../inputs/PharmaciesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPharmaciesArgs {
  @TypeGraphQL.Field(_type => PharmaciesWhereInput, {
    nullable: true
  })
  where?: PharmaciesWhereInput | undefined;
}
