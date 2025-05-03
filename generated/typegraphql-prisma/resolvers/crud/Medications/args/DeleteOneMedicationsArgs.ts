import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MedicationsWhereUniqueInput } from "../../../inputs/MedicationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneMedicationsArgs {
  @TypeGraphQL.Field(_type => MedicationsWhereUniqueInput, {
    nullable: false
  })
  where!: MedicationsWhereUniqueInput;
}
