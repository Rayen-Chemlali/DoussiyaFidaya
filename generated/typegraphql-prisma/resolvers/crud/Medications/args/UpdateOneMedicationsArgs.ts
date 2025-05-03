import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MedicationsUpdateInput } from "../../../inputs/MedicationsUpdateInput";
import { MedicationsWhereUniqueInput } from "../../../inputs/MedicationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMedicationsArgs {
  @TypeGraphQL.Field(_type => MedicationsUpdateInput, {
    nullable: false
  })
  data!: MedicationsUpdateInput;

  @TypeGraphQL.Field(_type => MedicationsWhereUniqueInput, {
    nullable: false
  })
  where!: MedicationsWhereUniqueInput;
}
