import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_requestsUpdateManyMutationInput } from "../../../inputs/Lab_requestsUpdateManyMutationInput";
import { Lab_requestsWhereInput } from "../../../inputs/Lab_requestsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLab_requestsArgs {
  @TypeGraphQL.Field(_type => Lab_requestsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Lab_requestsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Lab_requestsWhereInput, {
    nullable: true
  })
  where?: Lab_requestsWhereInput | undefined;
}
