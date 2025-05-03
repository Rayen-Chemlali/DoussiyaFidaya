import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Consultation_lab_requestsOrderByWithRelationInput } from "../../../inputs/Consultation_lab_requestsOrderByWithRelationInput";
import { Consultation_lab_requestsWhereInput } from "../../../inputs/Consultation_lab_requestsWhereInput";
import { Consultation_lab_requestsWhereUniqueInput } from "../../../inputs/Consultation_lab_requestsWhereUniqueInput";
import { Consultation_lab_requestsScalarFieldEnum } from "../../../../enums/Consultation_lab_requestsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstConsultation_lab_requestsOrThrowArgs {
  @TypeGraphQL.Field(_type => Consultation_lab_requestsWhereInput, {
    nullable: true
  })
  where?: Consultation_lab_requestsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Consultation_lab_requestsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Consultation_lab_requestsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Consultation_lab_requestsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Consultation_lab_requestsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Consultation_lab_requestsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"consultation_id" | "lab_request_id"> | undefined;
}
