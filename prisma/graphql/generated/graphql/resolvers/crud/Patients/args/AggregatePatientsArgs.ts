import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientsOrderByWithRelationInput } from "../../../inputs/PatientsOrderByWithRelationInput";
import { PatientsWhereInput } from "../../../inputs/PatientsWhereInput";
import { PatientsWhereUniqueInput } from "../../../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePatientsArgs {
  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PatientsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PatientsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: true
  })
  cursor?: PatientsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
