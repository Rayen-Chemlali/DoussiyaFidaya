import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MedicationsCreateInput } from "../../../inputs/MedicationsCreateInput";
import { MedicationsUpdateInput } from "../../../inputs/MedicationsUpdateInput";
import { MedicationsWhereUniqueInput } from "../../../inputs/MedicationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMedicationsArgs {
  @TypeGraphQL.Field(_type => MedicationsWhereUniqueInput, {
    nullable: false
  })
  where!: MedicationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => MedicationsCreateInput, {
    nullable: false
  })
  create!: MedicationsCreateInput;

  @TypeGraphQL.Field(_type => MedicationsUpdateInput, {
    nullable: false
  })
  update!: MedicationsUpdateInput;
}
