import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientsCreateInput } from "../../../inputs/PatientsCreateInput";
import { PatientsUpdateInput } from "../../../inputs/PatientsUpdateInput";
import { PatientsWhereUniqueInput } from "../../../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePatientsArgs {
  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: false
  })
  where!: PatientsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientsCreateInput, {
    nullable: false
  })
  create!: PatientsCreateInput;

  @TypeGraphQL.Field(_type => PatientsUpdateInput, {
    nullable: false
  })
  update!: PatientsUpdateInput;
}
