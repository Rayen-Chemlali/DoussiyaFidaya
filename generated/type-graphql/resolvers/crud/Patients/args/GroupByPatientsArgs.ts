import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientsOrderByWithAggregationInput } from "../../../inputs/PatientsOrderByWithAggregationInput";
import { PatientsScalarWhereWithAggregatesInput } from "../../../inputs/PatientsScalarWhereWithAggregatesInput";
import { PatientsWhereInput } from "../../../inputs/PatientsWhereInput";
import { PatientsScalarFieldEnum } from "../../../../enums/PatientsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPatientsArgs {
  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PatientsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PatientsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "cin" | "date_of_birth" | "gender" | "profile_image" | "general_medical_record_id" | "user_id">;

  @TypeGraphQL.Field(_type => PatientsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PatientsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
