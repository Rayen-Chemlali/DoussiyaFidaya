import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_requestsCreateInput } from "../../../inputs/Lab_requestsCreateInput";
import { Lab_requestsUpdateInput } from "../../../inputs/Lab_requestsUpdateInput";
import { Lab_requestsWhereUniqueInput } from "../../../inputs/Lab_requestsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLab_requestsArgs {
  @TypeGraphQL.Field(_type => Lab_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_requestsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_requestsCreateInput, {
    nullable: false
  })
  create!: Lab_requestsCreateInput;

  @TypeGraphQL.Field(_type => Lab_requestsUpdateInput, {
    nullable: false
  })
  update!: Lab_requestsUpdateInput;
}
