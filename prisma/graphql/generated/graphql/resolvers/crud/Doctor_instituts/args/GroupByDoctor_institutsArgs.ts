import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Doctor_institutsOrderByWithAggregationInput } from "../../../inputs/Doctor_institutsOrderByWithAggregationInput";
import { Doctor_institutsScalarWhereWithAggregatesInput } from "../../../inputs/Doctor_institutsScalarWhereWithAggregatesInput";
import { Doctor_institutsWhereInput } from "../../../inputs/Doctor_institutsWhereInput";
import { Doctor_institutsScalarFieldEnum } from "../../../../enums/Doctor_institutsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDoctor_institutsArgs {
  @TypeGraphQL.Field(_type => Doctor_institutsWhereInput, {
    nullable: true
  })
  where?: Doctor_institutsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Doctor_institutsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"doctor_id" | "institut_medical_id">;

  @TypeGraphQL.Field(_type => Doctor_institutsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Doctor_institutsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
