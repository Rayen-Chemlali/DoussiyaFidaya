import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rdv_requestsCreateManyInput } from "../../../inputs/Rdv_requestsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRdv_requestsArgs {
  @TypeGraphQL.Field(_type => [Rdv_requestsCreateManyInput], {
    nullable: false
  })
  data!: Rdv_requestsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
