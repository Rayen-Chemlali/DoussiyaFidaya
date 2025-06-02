import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MedicationsOrderByWithAggregationInput } from "../../../inputs/MedicationsOrderByWithAggregationInput";
import { MedicationsScalarWhereWithAggregatesInput } from "../../../inputs/MedicationsScalarWhereWithAggregatesInput";
import { MedicationsWhereInput } from "../../../inputs/MedicationsWhereInput";
import { MedicationsScalarFieldEnum } from "../../../../enums/MedicationsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMedicationsArgs {
  @TypeGraphQL.Field(_type => MedicationsWhereInput, {
    nullable: true
  })
  where?: MedicationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MedicationsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MedicationsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MedicationsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "dosage" | "duration" | "frequency" | "name" | "quantity" | "prescription_id">;

  @TypeGraphQL.Field(_type => MedicationsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MedicationsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
