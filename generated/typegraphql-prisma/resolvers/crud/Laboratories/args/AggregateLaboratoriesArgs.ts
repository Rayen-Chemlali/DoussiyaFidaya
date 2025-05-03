import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LaboratoriesOrderByWithRelationInput } from "../../../inputs/LaboratoriesOrderByWithRelationInput";
import { LaboratoriesWhereInput } from "../../../inputs/LaboratoriesWhereInput";
import { LaboratoriesWhereUniqueInput } from "../../../inputs/LaboratoriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateLaboratoriesArgs {
  @TypeGraphQL.Field(_type => LaboratoriesWhereInput, {
    nullable: true
  })
  where?: LaboratoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LaboratoriesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LaboratoriesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LaboratoriesWhereUniqueInput, {
    nullable: true
  })
  cursor?: LaboratoriesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
