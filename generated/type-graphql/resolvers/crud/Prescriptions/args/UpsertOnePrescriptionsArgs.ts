import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrescriptionsCreateInput } from "../../../inputs/PrescriptionsCreateInput";
import { PrescriptionsUpdateInput } from "../../../inputs/PrescriptionsUpdateInput";
import { PrescriptionsWhereUniqueInput } from "../../../inputs/PrescriptionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePrescriptionsArgs {
  @TypeGraphQL.Field(_type => PrescriptionsWhereUniqueInput, {
    nullable: false
  })
  where!: PrescriptionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PrescriptionsCreateInput, {
    nullable: false
  })
  create!: PrescriptionsCreateInput;

  @TypeGraphQL.Field(_type => PrescriptionsUpdateInput, {
    nullable: false
  })
  update!: PrescriptionsUpdateInput;
}
