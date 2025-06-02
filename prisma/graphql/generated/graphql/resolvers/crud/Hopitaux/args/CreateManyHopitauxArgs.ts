import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HopitauxCreateManyInput } from "../../../inputs/HopitauxCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyHopitauxArgs {
  @TypeGraphQL.Field(_type => [HopitauxCreateManyInput], {
    nullable: false
  })
  data!: HopitauxCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
