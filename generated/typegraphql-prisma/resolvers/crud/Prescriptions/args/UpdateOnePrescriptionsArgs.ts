import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrescriptionsUpdateInput } from "../../../inputs/PrescriptionsUpdateInput";
import { PrescriptionsWhereUniqueInput } from "../../../inputs/PrescriptionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePrescriptionsArgs {
  @TypeGraphQL.Field(_type => PrescriptionsUpdateInput, {
    nullable: false
  })
  data!: PrescriptionsUpdateInput;

  @TypeGraphQL.Field(_type => PrescriptionsWhereUniqueInput, {
    nullable: false
  })
  where!: PrescriptionsWhereUniqueInput;
}
