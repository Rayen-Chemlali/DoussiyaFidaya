import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RdvsUpdateManyMutationInput } from "../../../inputs/RdvsUpdateManyMutationInput";
import { RdvsWhereInput } from "../../../inputs/RdvsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRdvsArgs {
  @TypeGraphQL.Field(_type => RdvsUpdateManyMutationInput, {
    nullable: false
  })
  data!: RdvsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RdvsWhereInput, {
    nullable: true
  })
  where?: RdvsWhereInput | undefined;
}
