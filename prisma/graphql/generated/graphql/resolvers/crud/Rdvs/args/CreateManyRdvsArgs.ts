import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RdvsCreateManyInput } from "../../../inputs/RdvsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRdvsArgs {
  @TypeGraphQL.Field(_type => [RdvsCreateManyInput], {
    nullable: false
  })
  data!: RdvsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
