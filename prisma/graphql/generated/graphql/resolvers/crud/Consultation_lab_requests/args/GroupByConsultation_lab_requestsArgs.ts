import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Consultation_lab_requestsOrderByWithAggregationInput } from "../../../inputs/Consultation_lab_requestsOrderByWithAggregationInput";
import { Consultation_lab_requestsScalarWhereWithAggregatesInput } from "../../../inputs/Consultation_lab_requestsScalarWhereWithAggregatesInput";
import { Consultation_lab_requestsWhereInput } from "../../../inputs/Consultation_lab_requestsWhereInput";
import { Consultation_lab_requestsScalarFieldEnum } from "../../../../enums/Consultation_lab_requestsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByConsultation_lab_requestsArgs {
  @TypeGraphQL.Field(_type => Consultation_lab_requestsWhereInput, {
    nullable: true
  })
  where?: Consultation_lab_requestsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Consultation_lab_requestsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Consultation_lab_requestsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Consultation_lab_requestsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"consultation_id" | "lab_request_id">;

  @TypeGraphQL.Field(_type => Consultation_lab_requestsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Consultation_lab_requestsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
