import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrescriptionsCreateInput } from "../../../inputs/PrescriptionsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePrescriptionsArgs {
  @TypeGraphQL.Field(_type => PrescriptionsCreateInput, {
    nullable: false
  })
  data!: PrescriptionsCreateInput;
}
