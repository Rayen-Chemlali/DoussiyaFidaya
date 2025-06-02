import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LaboratoriesOrderByWithAggregationInput } from "../../../inputs/LaboratoriesOrderByWithAggregationInput";
import { LaboratoriesScalarWhereWithAggregatesInput } from "../../../inputs/LaboratoriesScalarWhereWithAggregatesInput";
import { LaboratoriesWhereInput } from "../../../inputs/LaboratoriesWhereInput";
import { LaboratoriesScalarFieldEnum } from "../../../../enums/LaboratoriesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLaboratoriesArgs {
  @TypeGraphQL.Field(_type => LaboratoriesWhereInput, {
    nullable: true
  })
  where?: LaboratoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LaboratoriesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LaboratoriesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LaboratoriesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "address" | "phone" | "email" | "name">;

  @TypeGraphQL.Field(_type => LaboratoriesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LaboratoriesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
