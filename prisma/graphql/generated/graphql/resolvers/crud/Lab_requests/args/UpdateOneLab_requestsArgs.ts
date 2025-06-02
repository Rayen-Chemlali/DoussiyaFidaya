import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_requestsUpdateInput } from "../../../inputs/Lab_requestsUpdateInput";
import { Lab_requestsWhereUniqueInput } from "../../../inputs/Lab_requestsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLab_requestsArgs {
  @TypeGraphQL.Field(_type => Lab_requestsUpdateInput, {
    nullable: false
  })
  data!: Lab_requestsUpdateInput;

  @TypeGraphQL.Field(_type => Lab_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_requestsWhereUniqueInput;
}
