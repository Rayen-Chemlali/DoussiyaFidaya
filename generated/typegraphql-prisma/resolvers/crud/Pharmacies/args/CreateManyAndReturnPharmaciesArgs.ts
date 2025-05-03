import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PharmaciesCreateManyInput } from "../../../inputs/PharmaciesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPharmaciesArgs {
  @TypeGraphQL.Field(_type => [PharmaciesCreateManyInput], {
    nullable: false
  })
  data!: PharmaciesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
