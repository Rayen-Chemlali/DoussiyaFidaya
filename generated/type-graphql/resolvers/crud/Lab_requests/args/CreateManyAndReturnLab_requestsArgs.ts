import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_requestsCreateManyInput } from "../../../inputs/Lab_requestsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnLab_requestsArgs {
  @TypeGraphQL.Field(_type => [Lab_requestsCreateManyInput], {
    nullable: false
  })
  data!: Lab_requestsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
