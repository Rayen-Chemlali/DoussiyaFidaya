import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MedicationsCreateInput } from "../../../inputs/MedicationsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMedicationsArgs {
  @TypeGraphQL.Field(_type => MedicationsCreateInput, {
    nullable: false
  })
  data!: MedicationsCreateInput;
}
