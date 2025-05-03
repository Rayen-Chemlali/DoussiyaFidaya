import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrescriptionsUpdateManyMutationInput } from "../../../inputs/PrescriptionsUpdateManyMutationInput";
import { PrescriptionsWhereInput } from "../../../inputs/PrescriptionsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPrescriptionsArgs {
  @TypeGraphQL.Field(_type => PrescriptionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PrescriptionsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PrescriptionsWhereInput, {
    nullable: true
  })
  where?: PrescriptionsWhereInput | undefined;
}
